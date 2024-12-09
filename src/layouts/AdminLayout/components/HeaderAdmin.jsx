import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import logo from "~/assets/logo/no-avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryTourRequest } from "~/redux/categoryTour/actions";
import { Button, ButtonGroup, Dropdown, Modal } from "react-bootstrap";
import { logoutRequest } from "~/redux/auth/actions";
import { toast } from "react-toastify";
import { resetUserState } from "~/redux/user/actions";
import { routesUser } from "~/configs";

export const HeaderAdmin = memo(() => {
  const history = useHistory();
  const { profileResponse } = useSelector((store) => store.user);
  const [isShowModalLogout, setIsShowModalLogout] = useState(false);
  // const { getAllNotificationsResponse } = useSelector(
  //   (store) => store.notification,
  // );

  // const cartState = localStorage.getItem(
  //   STORAGE_KEY.CART_STATE.concat('_').concat(profileResponse.data.id),
  // )
  //   ? JSON.parse(
  //     localStorage.getItem(
  //       STORAGE_KEY.CART_STATE.concat('_').concat(profileResponse.data.id),
  //     ),
  //   )
  //   : [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAllCategoryTourRequest({
        limit: 5,
      })
    );
  }, []);

  const handleLogout = () => {
    dispatch(logoutRequest());
    toast.success("Sign out success!", {
      position: "top-center",
    });
    dispatch(resetUserState());
    history.push(routesUser.home);
    setIsShowModalLogout(false);
  };
  const handleClose = () => {
    setIsShowModalLogout(false);
  };
  const handleWorkSchedule = () => {
    history.push(routesUser.WorkSchedule);
  };
  return (
    <section id="header-admin">
      <div className="header-admin--inner">
        <Dropdown as={ButtonGroup}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div className="header-admin--inner--right">
              <img src={logo} alt="" />
            </div>
            <div>
              <span className="name-user">{profileResponse?.data?.name}</span>
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
              <Dropdown.Item href="/admin">System management</Dropdown.Item>
            )}
            <Dropdown.Item onClick={handleWorkSchedule}>
              Work schedule
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setIsShowModalLogout(true)}>
              Sign out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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

HeaderAdmin.displayName = "HeaderAdmin";
