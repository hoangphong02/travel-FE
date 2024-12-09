import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardBlog } from "~/components/common/CardBlog";
import { getAllBlogsRequest } from "~/redux/blog/actions";

const BlogPage = () => {
  const dispatch = useDispatch();
  const { getAllBlogsState } = useSelector((store) => store.blog);

  const { getAllCategoryState } = useSelector((store) => store.categoryBlog);

  useEffect(() => {
    dispatch(getAllBlogsRequest());
  }, []);

  return (
    <div className="blog-page">
      {getAllCategoryState?.data?.map((category) => {
        return (
          <div className="section">
            <div className="title">
              <span>{category?.name}</span>
              <div className="line">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </div>
            </div>
            <div className="list-card-blog">
              {getAllBlogsState?.data
                ?.filter((a) => a.category?._id === category?._id)
                .map((item) => {
                  return <CardBlog blog={item} />;
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
