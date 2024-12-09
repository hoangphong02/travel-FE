import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Slider from "react-slick";
import {
  CSChevronLeftNavigational,
  CSChevronRightNavigational,
} from "~/components/iconography/Navigational";
const Banner = () => {
  const { getSlidesTourState } = useSelector((store) => store.tour);
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-home-page">
      <Slider {...settings}>
        {getSlidesTourState?.data?.map((item, index) => {
          return (
            <div className="slider-home-item" key={index}>
              <img src={item?.image[0]?.url} alt="" />
              <div className="information-tour-slide">
                <span className="category">
                  {item?.category?.name?.toUpperCase()}
                </span>
                <span className="name-tour">{item?.name?.toUpperCase()}</span>
                <span className="price-tour">
                  {" "}
                  Price: {item.base_price_adult.toLocaleString("vi-VN")} VND
                </span>
                <Button onClick={() => handleClickTourDetail(item?._id)}>
                  Book now
                </Button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
