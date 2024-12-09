import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import { FooterAction, HeaderAction } from "~/components/common";
import { routesUser } from "~/configs";
import { getProfileRequest } from "~/redux/user/actions";

export const UserLayout = (props) => {
  const { isGetProfileSuccess } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const [isScroll, setIsScroll] = useState(false);

  const checkAuth = () => {
    dispatch(getProfileRequest());
  };

  useEffect(() => {
    if (!isGetProfileSuccess) {
      checkAuth();
    }
  }, []);
  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollUp();
  }, []);
  const render = () => {
    // if (isLoading) return <LoadingPage />;
    return (
      <div
        className={`user-layout${pathname.includes(routesUser.ordersList.concat("/")) || pathname.includes(routesUser.cart) || pathname.includes(routesUser.historyPoint) || pathname.includes(routesUser.profile) || pathname.includes(routesUser.information) || pathname.includes(routesUser.addressesManager) || pathname.includes(routesUser.productType.replace(":productTypeId", "")) || pathname.includes(routesUser.vouchersList.concat("/")) || pathname.includes(routesUser.history.concat("/")) || pathname.includes(routesUser.giftsList.concat("/")) ? " hide-footer-action" : ""} ${isScroll ? "scroll" : ""}`}
      >
        {pathname.includes(routesUser.admin) ||
        pathname.includes(
          routesUser.productType.replace(":productTypeId", "")
        ) ? (
          ""
        ) : (
          <HeaderAction />
        )}
        <Route {...props} />
        {pathname.includes(routesUser.admin) ||
        pathname.includes(
          routesUser.productType.replace(":productTypeId", "")
        ) ? (
          ""
        ) : (
          <FooterAction />
        )}
      </div>
    );
  };

  return render();
};
