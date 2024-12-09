import React, { memo } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  CSChatOutline,
  CSCheckCircleOutline,
  CSUser2Outline,
} from "~/components/iconography/Outline";

export const CardTour = memo((tour) => {
  const history = useHistory();
  const handleDetail = () => {
    history.push(`/tour-detail/${tour?.tour?._id}`);
  };

  return (
    <div className="card-tour" onClick={handleDetail}>
      <img
        src={tour.tour?.image?.find((item) => item.type === "banner")?.url}
        alt=""
      />
      <div className="info-card">
        <span className="title">{tour?.tour?.name}</span>
        <span className="price">
          Original price:{" "}
          <strong>
            {tour?.tour?.base_price_adult.toLocaleString("vi-VN")} VND
          </strong>
        </span>
        <Button>Book tour</Button>
      </div>
      <div className="bottom">
        <div className="left">
          <CSUser2Outline />
          <span>Number of people interested</span>
        </div>
        <div className="right">
          <div>
            <CSCheckCircleOutline />
            {tour?.tour?.view}
          </div>
          <div>
            <CSChatOutline />
            <span>50</span>
          </div>
        </div>
      </div>
    </div>
  );
});

CardTour.displayName = "CardTour";
