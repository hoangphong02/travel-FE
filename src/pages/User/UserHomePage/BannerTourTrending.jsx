import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Slider from "react-slick";
import {
  CSChevronLeftNavigational,
  CSChevronRightNavigational,
} from "~/components/iconography/Navigational";
const BannerTourTrending = () => {
  const { getAllTourMainState } = useSelector((store) => store.tour);
  const history = useHistory();

  const handleClickTourDetail = (id) => {
    history.push(`/tour-detail/${id}`);
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        {" "}
        <CSChevronRightNavigational />{" "}
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        {" "}
        <CSChevronLeftNavigational />{" "}
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        {getAllTourMainState?.data?.map((item, index) => {
          return (
            <div className="item-tour-trending" key={index}>
              <img
                src={
                  item?.image?.find((image) => image.type === "banner")?.url ||
                  item?.image?.find((image) => image.type === "slide")?.url
                }
                alt=""
                style={{
                  width: "100%",
                  height: "300px",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              />
              <div className="info-tour">
                <span>{item?.name}</span>
                <span>
                  {" "}
                  Price: {item.base_price_adult.toLocaleString("vi-VN")} VND
                </span>
                <div
                  className="btn-book"
                  onClick={() => handleClickTourDetail(item?._id)}
                >
                  <span>Book now</span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerTourTrending;
