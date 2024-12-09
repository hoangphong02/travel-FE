import { Button } from "react-bootstrap";
import React, { memo } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const CardBlog = memo(({ blog }) => {
  const history = useHistory();
  const handleDetail = () => {
    history.push(`/blog-detail/${blog?._id}`);
  };

  return (
    <div className="card-blog" onClick={handleDetail}>
      <div className="card-blog-image">
        <img src={blog?.image[0]?.url} alt="" />
      </div>
      <div className="card-blog-body">
        <span className="name">{blog?.name}</span>
        <span className="line"></span>
        <span className="des">{blog?.title}</span>
        <Button>See more</Button>
      </div>
    </div>
  );
});

CardBlog.displayName = "CardBlog";
