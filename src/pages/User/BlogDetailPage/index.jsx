import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import RenderQuillItem from "~/components/common/RenderQuill";
import { getDetailBlogsRequest } from "~/redux/blog/actions";
import { getAllTourMainRequest } from "~/redux/tour/actions";
import TourSuggest from "./TourSuggest";

const BlogDetailPage = () => {
  const { getDetailBlogState } = useSelector((store) => store.blog);
  const [isScrollRight, setIsScrollRight] = useState(true);
  const ref = useRef();
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClickTourDetail = (id) => {
    history.push(`/tour-detail/${id}`);
  };

  useEffect(() => {
    if (id) {
      dispatch(getDetailBlogsRequest({ id }));
    }
  }, [id]);

  const { getAllTourMainState } = useSelector((store) => store.tour);

  useEffect(() => {
    dispatch(
      getAllTourMainRequest({
        limit: 5,
      })
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // vị trí cuộn hiện tại từ đầu trang
      const windowHeight = window.innerHeight; // chiều cao của cửa sổ trình duyệt
      const fullHeight = document.documentElement.scrollHeight; // tổng chiều cao của nội dung trang

      if (ref.current) {
        if (fullHeight - (scrollTop + windowHeight) <= 400) {
          setIsScrollRight(false); // tắt position fixed khi cách cuối trang 400px
        } else {
          if (
            fullHeight - (scrollTop + windowHeight) > 400 &&
            window.scrollY < 130
          ) {
            setIsScrollRight(true);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="introduce-page-wrapper">
      <div className="introduce-page-wrapper-body">
        <div className="introduce-page-wrapper-body-left">
          <div className="bottom">
            <div className="name-company">
              <span>{getDetailBlogState?.data?.name}</span>
            </div>

            <RenderQuillItem detail={getDetailBlogState?.data?.description} />
            <div className="title-tour-intro">
              <span className="title">Related tours</span>
              <div className="line-1"></div>
              <div className="line-2"></div>
            </div>
            <div className="list-tour-suggest">
              {getDetailBlogState?.data?.tourSuggest?.length > 6 ? (
                <div className="list-tour-suggest">
                  <TourSuggest />
                </div>
              ) : (
                <div className="list-tour-little">
                  {getDetailBlogState?.data?.tourSuggest?.map((item, index) => {
                    return (
                      <div className="tour-suggest" key={index}>
                        <img
                          src={
                            item?.image?.find((item) => item?.type === "banner")
                              ?.url ||
                            item?.image?.find((item) => item?.type === "photos")
                              ?.url
                          }
                          alt=""
                        />
                        <span>{item?.name}</span>
                        <Button
                          onClick={() => handleClickTourDetail(item?._id)}
                        >
                          See more
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="introduce-page-wrapper-body-right">
          <div
            className={`introduce-page-wrapper-body-right-body ${isScrollRight ? "scroll-section-right" : ""}`}
            ref={ref}
          >
            <div className="title">
              <span>TOURS WATCH MORE</span>
            </div>
            <div className="list-tour">
              {getAllTourMainState?.data?.map((item, index) => {
                return (
                  <div
                    className="tour"
                    key={index}
                    onClick={() => history.push(`/tour-detail/${item?._id}`)}
                  >
                    <img
                      src={
                        item?.image?.find((image) => image.type === "banner")
                          ?.url
                      }
                      alt=""
                    />
                    <div>
                      <span>{item?.name}</span>
                      <span>
                        Price:{" "}
                        <span className="price">
                          {item?.base_price_adult?.toLocaleString("vi-VN")} VNĐ
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
