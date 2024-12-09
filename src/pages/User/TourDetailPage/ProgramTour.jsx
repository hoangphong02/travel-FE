import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RenderQuillItem from "~/components/common/RenderQuill";

const ProgramTour = () => {
  const { getDetailTourState } = useSelector((store) => store.tour);
  const [banner, setBanner] = useState();
  useEffect(() => {
    if (getDetailTourState) {
      const image = getDetailTourState?.data?.image?.find(
        (item) => item.type === "photos"
      )?.url;
      if (image) {
        setBanner(image);
      }
    }
  }, [getDetailTourState]);
  return (
    <div className="program-tour">
      <div className="program-tour-title">
        <span>Tour program</span>
      </div>
      <div className="program-tour-body">
        <div className="program-tour-body-left">
          <img src={banner} alt="" />
        </div>
        <div className="program-tour-body-right">
          {getDetailTourState?.data?.schedules?.map((item, index) => {
            return (
              <div className="section" key={index}>
                <div className="section-left">
                  <span>Day {index + 1}</span>
                </div>
                <div className="section-right">
                  <div className="title">
                    <span>Details day {index + 1}</span>
                  </div>
                  <RenderQuillItem key={item._id} detail={item.detail} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgramTour;
