import React, { memo, useEffect, useState } from "react";
import { Button, ButtonGroup, Dropdown, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "~/assets/logo/no-avatar.png";
import logoTour from "~/assets/logo/logo-tour.png";
import { CSPhoneOutline } from "~/components/iconography/Outline";
import { CSUserAddSolid } from "~/components/iconography/Solid";
import { routesAuth, routesUser } from "~/configs";
import { logoutRequest } from "~/redux/auth/actions";
import { resetUserState } from "~/redux/user/actions";
import { getAllCategoryRequest } from "~/redux/categoryBlog/actions";

export const HeaderAction = memo(() => {
  const [isScroll, setIsScroll] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const { profileResponse } = useSelector((store) => store.user);
  const { getAllCategoryState } = useSelector((store) => store.categoryBlog);
  const [isShowModalLogout, setIsShowModalLogout] = useState(false);
  const dispatch = useDispatch();
  const { getAllCategoryTourState } = useSelector(
    (store) => store.categoryTour
  );

  useEffect(() => {
    dispatch(getAllCategoryRequest());
  }, []);

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });
  const handleClose = () => {
    setIsShowModalLogout(false);
  };

  const handleLogout = () => {
    dispatch(logoutRequest());
    toast.success("Sign out success!", {
      position: "top-center",
    });
    dispatch(resetUserState());
    setIsShowModalLogout(false);
  };

  const handleWorkSchedule = () => {
    history.push(routesUser.WorkSchedule);
  };

  return (
    <section
      id="header-action"
      className={`header-action--wrapper ${isScroll ? "isScroll" : ""} ${pathname.includes(routesUser.introduce) || pathname.includes(routesUser.WorkSchedule) || pathname.includes(routesUser.tablePriceTour) || pathname.includes(routesUser.contact) || pathname.includes("booking") || pathname.includes(routesUser.tour) || pathname.includes(routesUser.blogs) || pathname.includes(routesUser.picturePage) ? "header-not-home" : ""}`}
    >
      <div className="header-action--inner flex-center-space h-full">
        <div className="header-action--inner--top">
          <div className="header-action--inner--top--left">
            <div className="phone">
              <CSPhoneOutline />
              <span>0742 483 578</span>
            </div>
            <div className="btn-contact">Contact</div>
          </div>
          <div className="header-action--inner--top--right">
            {profileResponse?.data ? (
              // <div
              //   style={{ display: "flex", gap: "16px", alignItems: "center" }}
              // >
              //   <img
              //     src={logo}
              //     alt=""
              //     style={{ width: "30px", height: "30px" }}
              //   />
              //   <div>
              //     <span className="name-user">
              //       {profileResponse?.data?.name}
              //     </span>
              //   </div>
              // </div>

              <Dropdown as={ButtonGroup}>
                <div
                  style={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <img
                    src={logo}
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div>
                    <span className="name-user">
                      {profileResponse?.data?.name}
                    </span>
                  </div>
                </div>

                <Dropdown.Toggle
                  split
                  variant="none"
                  id="dropdown-split-basic"
                  style={{ border: "none" }}
                />

                <Dropdown.Menu style={{ zIndex: "6" }}>
                  {profileResponse?.data?.role === "admin" && (
                    <Dropdown.Item href="/admin">
                      System management
                    </Dropdown.Item>
                  )}
                  <Dropdown.Item onClick={handleWorkSchedule}>
                    Work schedule
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setIsShowModalLogout(true)}>
                    Sign out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <span
                onClick={() => history.push(routesAuth.login)}
                style={{ cursor: "pointer" }}
              >
                <CSUserAddSolid style={{ height: "24px", fill: "#fff" }} />
              </span>
            )}
          </div>
        </div>

        <div className="header-action--inner--bottom">
          <div
            className={`logo ${!pathname.includes(routesUser.introduce) && !pathname.includes(routesUser.tablePriceTour) && !pathname.includes(routesUser.WorkSchedule) && !pathname.includes(routesUser.contact) && !pathname.includes("booking") && !pathname.includes(routesUser.tour) && !pathname.includes(routesUser.blogs) && !pathname.includes(routesUser.picturePage) ? "filter-logo" : ""}`}
          >
            <img
              src={logoTour}
              alt=""
              style={{ height: "80px", width: "auto " }}
              onClick={() => history.push(routesUser.home)}
            />
          </div>
          <div className="list-option">
            <div className="item" onClick={() => history.push(routesUser.home)}>
              <span>HOME</span>
            </div>
            <div
              className="item"
              onClick={() => history.push(routesUser.introduce)}
            >
              <span>INTRODUCE</span>
            </div>
            <div className="item">
              <span onClick={() => history.push(routesUser.tour)}>TOUR</span>
              <ul className="ul-tour">
                {getAllCategoryTourState?.data?.map((item, index) => {
                  return (
                    <li
                      onClick={() => history.push(`/tour/${item?._id}`)}
                      key={index}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className="item"
              onClick={() => history.push(routesUser.tablePriceTour)}
            >
              <span>PRICE LIST</span>
            </div>
            <div
              className="item"
              onClick={() => history.push(routesUser.booking)}
            >
              <span>BOOK TOUR</span>
            </div>
            <div className="item">
              <span onClick={() => history.push(routesUser.blogs)}>BLOG</span>
              <ul className="ul-blog">
                {getAllCategoryState?.data?.map((item) => {
                  return (
                    <li
                      onClick={() => history.push(`/blogs/${item?._id}`)}
                      key={item?._id}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className="item"
              onClick={() => history.push(routesUser.picturePage)}
            >
              <span>IMAGES</span>
            </div>
            <div
              className="item"
              onClick={() => history.push(routesUser.contact)}
            >
              CONTACT
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={isShowModalLogout}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Xác nhận</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Confirm</span>
            <span style={{ fontSize: "13px" }}>
              Are you sure you want to sign out of your account?
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button
            onClick={handleClose}
            style={{
              width: "45%",
              background: "#fff",
              border: "1px solid #ddd",
              color: "rgb(157 157 157)",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleLogout}
            style={{
              width: "45%",
              background: "rgb(255 145 15)",
              border: "none",
            }}
          >
            Sign out
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
});

HeaderAction.displayName = "HeaderAction";
