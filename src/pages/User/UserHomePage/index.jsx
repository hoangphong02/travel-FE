import React, { useEffect } from "react";
import Banner from "./Banner";
import BannerTourTrending from "./BannerTourTrending";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryTourRequest } from "~/redux/categoryTour/actions";
import { getAllCategoryRequest } from "~/redux/categoryBlog/actions";
import { getAllBlogsRequest } from "~/redux/blog/actions";
import {
  getAllTourMainRequest,
  getAllTourRequest,
  getSlidesTourRequest,
} from "~/redux/tour/actions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const UserHomePage = () => {
  const { getAllCategoryTourState } = useSelector(
    (store) => store.categoryTour
  );
  const { getAllCategoryState } = useSelector((store) => store.categoryBlog);
  const { getAllBlogsState } = useSelector((store) => store.blog);
  const { getAllTourState } = useSelector((store) => store.tour);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(
      getAllCategoryTourRequest({
        limit: 5,
      })
    );
    dispatch(
      getAllCategoryRequest({
        limit: 5,
      })
    );
    dispatch(
      getAllBlogsRequest({
        limit: 6,
      })
    );
    dispatch(
      getAllTourRequest({
        limit: 5,
      })
    );
    dispatch(
      getSlidesTourRequest({
        limit: 5,
      })
    );
    dispatch(
      getAllTourMainRequest({
        limit: 5,
      })
    );
  }, []);

  const handleClickTourDetail = (id) => {
    history.push(`/tour-detail/${id}`);
  };
  return (
    <div className="home-page">
      <div className="banner-introduce">
        <Banner />
      </div>

      <div className="list-tour-trending-month">
        <span className="title">FEATURED TOURS OF THE MONTH</span>
        <div className="banner-tour-trending-in-month">
          <BannerTourTrending />
        </div>
      </div>

      <div className="list-tour-main">
        <span className="title">MAIN TOUR</span>
        <div className="list-tour-main-body">
          <div className="list-tour-main-body-left">
            {getAllTourState?.data?.length
              ? getAllTourState?.data?.slice(0, 1)?.map((item, index) => {
                  return (
                    <div
                      className="items"
                      onClick={() => handleClickTourDetail(item?._id)}
                      key={index}
                    >
                      <img
                        src={
                          item?.image?.find((image) => image.type === "banner")
                            ?.url
                        }
                        alt=""
                      />
                      <div className="items-info">
                        <div className="name">
                          <span>{item.category.name.toUpperCase()}</span>
                          <span>{item.name.toUpperCase()}</span>
                        </div>
                        <span>
                          Price: {item.base_price_adult.toLocaleString("vi-VN")}{" "}
                          VND
                        </span>
                        <div className="btn-book">
                          <span>Book now</span>
                        </div>
                      </div>
                      <div className="bg"></div>
                    </div>
                  );
                })
              : null}
          </div>
          <div className="list-tour-main-body-right">
            <div className="list-tour-main-body-right-top">
              {getAllTourState?.data?.length
                ? getAllTourState?.data?.slice(1, 3)?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="items"
                        onClick={() => handleClickTourDetail(item?._id)}
                      >
                        <img
                          src={
                            item?.image?.find(
                              (image) => image.type === "banner"
                            )?.url
                          }
                          alt=""
                        />
                        <div className="items-info">
                          <div className="name">
                            <span>{item.category.name.toUpperCase()}</span>
                            <span>{item.name.toUpperCase()}</span>
                          </div>
                          <span>
                            Price:{" "}
                            {item.base_price_adult.toLocaleString("vi-VN")} VND
                          </span>
                          <div className="btn-book">
                            <span>Book now</span>
                          </div>
                        </div>
                        <div className="bg"></div>
                      </div>
                    );
                  })
                : null}
            </div>

            <div className="list-tour-main-body-right-bottom">
              {getAllTourState?.data?.length
                ? getAllTourState?.data?.slice(3, 5)?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="items"
                        onClick={() => handleClickTourDetail(item?._id)}
                      >
                        <img
                          src={
                            item?.image?.find(
                              (image) => image.type === "banner"
                            )?.url
                          }
                          alt=""
                        />
                        <div className="items-info">
                          <div className="name">
                            <span>{item.category.name.toUpperCase()}</span>
                            <span>{item.name.toUpperCase()}</span>
                          </div>
                          <span>
                            Price:{" "}
                            {item.base_price_adult.toLocaleString("vi-VN")} VND
                          </span>
                          <div className="btn-book">
                            <span>Book now</span>
                          </div>
                        </div>
                        <div className="bg"></div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>

      <div className="list-tour-options">
        <span className="title">TOUR LIST</span>
        <div className="list-tour-options--content">
          {getAllCategoryTourState?.data?.length
            ? getAllCategoryTourState?.data?.map((item, index) => {
                return (
                  <div
                    className="option"
                    key={index}
                    onClick={() => history.push(`/tour/${item?._id}`)}
                  >
                    <img src={item?.thumbnail} alt="" />
                    <div className="option-info">
                      <span>{item.name}</span>
                      <span>{item?.tour_count} Tour </span>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>

      <div className="list-blog">
        <span className="title">BLOG</span>
        <div className="category-blog">
          {getAllCategoryState?.data?.map((item, index) => {
            return (
              <div
                key={index}
                className="category-blog-item"
                onClick={() => history.push(`/blogs/${item?._id}`)}
              >
                <img
                  src={item.thumbnail}
                  alt=""
                  style={{ width: "100%", height: "auto", overflow: "hidden" }}
                />
                <div className="info-blog">
                  <span className="name">{item.name.toUpperCase()}</span>
                  <span className="description">
                    {item.description?.length > 190
                      ? `${item.description?.slice(0, 190)} ...`
                      : item.description}
                  </span>
                  <div className="btn-more">
                    <span>See more</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="list-blog-body">
          {getAllBlogsState?.data?.length
            ? getAllBlogsState?.data?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="blog-items"
                    onClick={() => history.push(`/blog-detail/${item._id}`)}
                  >
                    <img src={item.image[0].url} alt="" />
                    <span className="name">{item.name}</span>
                    <span className="des">{item.title}</span>
                    <div className="btn-more">
                      <span>See more</span>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
