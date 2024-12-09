import React, { memo } from "react";
import image1 from "~/assets/logo/image1.jpg";
import image2 from "~/assets/logo/image2.jpg";
import image3 from "~/assets/logo/image3.jpg";
import image4 from "~/assets/logo/image9.png";
import logoTour from "~/assets/logo/logo-tour.png";

export const FooterAction = memo(() => {
  // const { profileResponse } = useSelector((store) => store.user);
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

  return (
    <footer id="footer-action" className="footer-action--wrapper">
      <div className="footer-action--wrapper--content">
        <div className="content-bank ">
          <img
            src={logoTour}
            alt=""
            style={{ height: "80px", width: "162px", objectFit: "contain" }}
          />
          <strong>WESTERN TOURISM LIMITED</strong>
          <strong>Transfer information</strong>
          <span>
            1. Account owner: <strong>Nguyen Van A</strong> | Account number:{" "}
            <strong>0343 432 4343</strong> | Agribank State Bank{" "}
          </span>
          <span>
            2. Account owner: <strong>Western Tourism Limited</strong> | Account
            number: <strong>0343 432 4335</strong> | Agribank State Bank{" "}
          </span>
        </div>

        <div className="content-contact">
          <strong>CONTACT INFORMATION</strong>
          <span>
            {" "}
            <strong>Address:</strong>
            3/2 Street, Ninh Kieu District, Can Tho City
          </span>
          <span>
            {" "}
            <strong>Phone:</strong> 0234 243 434
          </span>
          <span>
            {" "}
            <strong>Hotline:</strong> 0234 243 434 | 0234 243 435
          </span>
          <span>
            {" "}
            <strong>Email:</strong> tourmientay.com
          </span>
        </div>
        <div className="content-introduce">
          <strong>INTRODUCE</strong>
          <span> About us</span>
          <span> Payment instructions</span>
          <span> Instructions for booking tours</span>
          <span>Price list</span>
        </div>
        <div className="content-image">
          <strong>IMAGES</strong>
          <div className="image1">
            <img
              src={image1}
              alt=""
              style={{ height: "100px", width: "200px" }}
            />
            <img
              src={image2}
              alt=""
              style={{ height: "100px", width: "200px" }}
            />
          </div>
          <div className="image2">
            <img
              src={image3}
              alt=""
              style={{ height: "100px", width: "200px" }}
            />
            <img
              src={image4}
              alt=""
              style={{ height: "100px", width: "200px" }}
            />
          </div>
        </div>
      </div>
      <div className="footer-action--wrapper--bottom">
        <span>
          Copyright © 2024 <strong>Tour Miền Tây</strong> . All rights
          reserved.
        </span>
      </div>
    </footer>
  );
});

FooterAction.displayName = "FooterAction";
