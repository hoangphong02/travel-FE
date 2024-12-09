import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Slider from "react-slick";
import {
  CSChevronLeftNavigational,
  CSChevronRightNavigational,
} from "~/components/iconography/Navigational";

function TourSuggest() {
  const { getDetailBlogState } = useSelector((store) => store.blog);

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
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {getDetailBlogState?.data?.tourSuggest?.map((item, index) => {
          return (
            <div className="tour-suggest">
              <img
                src={
                  item?.image?.find((item) => item?.type === "banner")?.url ||
                  item?.image?.find((item) => item?.type === "photos")?.url
                }
                alt=""
              />
              <span>{item?.name}</span>
              <Button onClick={() => handleClickTourDetail(item?._id)}>
                See more
              </Button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default TourSuggest;
