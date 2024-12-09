import React from "react";
import notification from "~/assets/logo/thong-bao.png";
import hotel from "~/assets/logo/KSan.png";
import address from "~/assets/logo/dia-diem.png";
import time from "~/assets/logo/time.png";
import { useSelector } from "react-redux";
import { LIST_OPTION_RANK_HOTEL, ListTransport } from "~/constants";

const InfomationTour = () => {
  const { getDetailTourState } = useSelector((store) => store.tour);
  return (
    <div className="information-tour">
      <div className="information-tour-title">
        <span>Tour information</span>
      </div>
      <div className="information-tour-body">
        <div>
          <img src={notification} alt="" />
          <span>{getDetailTourState?.data?.shedule_on_week}</span>
        </div>
        <div>
          <img src={time} alt="" />
          <span>{getDetailTourState?.data?.schedules?.length}</span>
        </div>
        <div>
          <img src={address} alt="" />
          <span>
            {
              ListTransport.find(
                (item) =>
                  item.value === getDetailTourState?.data?.transportation
              )?.label
            }
          </span>
        </div>
        <div>
          <img src={hotel} alt="" />
          <span>
            {
              LIST_OPTION_RANK_HOTEL.find(
                (item) =>
                  item.value === getDetailTourState?.data?.hotel_level[0]?.star
              )?.label
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfomationTour;
