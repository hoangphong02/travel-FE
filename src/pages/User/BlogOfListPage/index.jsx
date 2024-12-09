import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { CardBlog } from "~/components/common/CardBlog";
import { getAllBlogsRequest } from "~/redux/blog/actions";

const BlogOfListPage = () => {
  const dispatch = useDispatch();
  const { getAllBlogsState } = useSelector((store) => store.blog);

  const { getAllCategoryState } = useSelector((store) => store.categoryBlog);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllBlogsRequest());
  }, []);

  return (
    <div className="blog-page">
      <div className="section">
        <div className="title">
          <span>
            {" "}
            {getAllCategoryState?.data
              ?.find((item) => item._id === id)
              ?.name?.toUpperCase()}
          </span>
          <div className="line">
            <span className="line-1"></span>
            <span className="line-2"></span>
          </div>
        </div>
        <div className="list-card-blog">
          {getAllBlogsState?.data?.length
            ? getAllBlogsState?.data
                ?.filter((cate) => cate?.category?._id === id)
                ?.map((item) => {
                  return <CardBlog blog={item} />;
                })
            : null}
        </div>
      </div>
    </div>
  );
};

export default BlogOfListPage;
