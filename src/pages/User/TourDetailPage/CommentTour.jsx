import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import image2 from "~/assets/logo/no-avatar.png";
import {
  createCommentsRequest,
  replyCommentsRequest,
  resetCreateComments,
  resetReplyComments,
} from "~/redux/comment/actions";

const CommentTour = ({ id }) => {
  const dispatch = useDispatch();
  const [isShowReply, setIsShowReply] = useState(false);
  const [value, setValue] = useState("");
  const [idReply, setIdReply] = useState("");
  const { profileResponse } = useSelector((store) => store.user);
  const {
    isCreateCommentsRequest,
    isCreateCommentsSuccess,
    isCreateCommentsFailure,
    getAllCommentsState,
    isReplyCommentsRequest,
    isReplyCommentsSuccess,
    isReplyCommentsFailure,
  } = useSelector((store) => store.comment);
  const { values, setFieldValue, resetForm } = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      content: "",
    },
  });

  const handleComment = () => {
    const payload = {
      fullname: values.fullname,
      email: values.email,
      phone: values.phone,
      content: values.content,
      tour: id,
    };
    dispatch(createCommentsRequest(payload));
  };

  useEffect(() => {
    if (isCreateCommentsSuccess) {
      toast.success("Comment sent successfully");
      dispatch(resetCreateComments());
      resetForm();
    }
  }, [isCreateCommentsSuccess]);
  useEffect(() => {
    if (isCreateCommentsFailure) {
      toast.error("Send comment failed");
      dispatch(resetCreateComments());
    }
  }, [isCreateCommentsFailure]);

  const handleShowReply = (id) => {
    setIdReply(id);
    setIsShowReply(true);
  };
  const handleCloseReply = () => {
    setIdReply("");
    setIsShowReply(false);
    setValue("");
  };

  const handleConfirmReply = () => {
    const payload = {
      id: idReply,
      body: {
        content: value,
      },
    };
    dispatch(replyCommentsRequest(payload));
  };

  useEffect(() => {
    if (isReplyCommentsSuccess) {
      toast.success("Reply to comment successfully");
      handleCloseReply();
      dispatch(resetReplyComments());
    }
  }, [isReplyCommentsSuccess]);
  useEffect(() => {
    if (isReplyCommentsFailure) {
      toast.error("Reply to comment failed");
      dispatch(resetReplyComments());
    }
  }, [isReplyCommentsFailure]);

  return (
    <div className="comment-tour-detail">
      <div className="form-comment">
        <div className="form-comment-body">
          <div>
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              YOU HAVE SOMETHING UNKNOWN ABOUT THE TOUR. PLEASE ASK A QUESTION
              AND WE WILL ANSWER ASAP.
            </span>
          </div>

          <div className="section-1">
            <div>
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                1. Enter full name
              </span>
              <input
                type="text"
                value={values.fullname}
                onChange={(e) => setFieldValue("fullname", e.target.value)}
              />
            </div>
            <div>
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                2. Enter email
              </span>
              <input
                type="text"
                value={values.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
            </div>
            <div>
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                3. Enter phone
              </span>
              <input
                type="text"
                value={values.phone}
                onChange={(e) => setFieldValue("phone", e.target.value)}
              />
            </div>
          </div>
          <div className="section-2">
            <div>
              <span style={{ fontSize: "18px", fontWeight: "600" }}>
                4. Write your review below
              </span>
              <textarea
                type="text"
                className="message"
                value={values.content}
                onChange={(e) => setFieldValue("content", e.target.value)}
              />
            </div>
          </div>
          <div className="section-3">
            <Button className="btn-send" onClick={handleComment}>
              {isCreateCommentsRequest ? (
                <Spinner size="12" />
              ) : (
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "rgb(156 204 219)",
                  }}
                >
                  SEND
                </span>
              )}
            </Button>
          </div>
          <div
            className="list-comment"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {getAllCommentsState?.data?.map((item, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                  key={index}
                >
                  <div style={{ textAlign: "left" }}>
                    <div className="d-flex gap-2 align-items-center">
                      <img
                        src={image2}
                        alt=""
                        style={{
                          height: "40px",
                          width: "40px",
                          objectFit: "cover",
                          borderRadius: "50% ",
                        }}
                      />
                      <div className="text-align-left">
                        <span style={{ fontWeight: "600" }}>
                          {item?.fullname}
                        </span>
                        <div>
                          {moment(item?.createdAt).format("hh:mm DD/MM/YYYY")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#fff",
                      textAlign: "left",
                      padding: "20px",
                      borderRadius: "4px",
                    }}
                  >
                    <span>{item?.content}</span>
                    <div
                      style={{
                        cursor: "pointer",
                        color: "#3880bb",
                        padding: "8px 0",
                      }}
                      onClick={() =>
                        isShowReply
                          ? handleCloseReply()
                          : handleShowReply(item?._id)
                      }
                    >
                      <span
                        style={{
                          display:
                            profileResponse?.data?.role !== "admin"
                              ? "none"
                              : "",
                        }}
                      >
                        Send reply
                      </span>
                      <div style={{ marginTop: "12px" }}>
                        {item?.replyBy?.length
                          ? item?.replyBy?.map((item, index) => {
                              return (
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "8px",
                                    marginTop: "12px",
                                    borderTop: "1px solid",
                                    paddingTop: "8px",
                                  }}
                                  key={index}
                                >
                                  <div style={{ textAlign: "left" }}>
                                    <div className="d-flex gap-2 align-items-center">
                                      <img
                                        src={image2}
                                        alt=""
                                        style={{
                                          height: "40px",
                                          width: "40px",
                                          objectFit: "cover",
                                          borderRadius: "50% ",
                                        }}
                                      />

                                      <div className="text-align-left">
                                        <span style={{ fontWeight: "600" }}>
                                          Admin - ({item?.adminId?.email})
                                        </span>
                                        <div>
                                          {moment(item?.createdAt).format(
                                            "hh:mm DD/MM/YYYY"
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      background: "#fff",
                                      textAlign: "left",
                                      padding: "0 20px",
                                      borderRadius: "4px",
                                    }}
                                  >
                                    <span>{item?.comment?.content}</span>
                                  </div>
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                  </div>
                  {idReply === item?._id && isShowReply && (
                    <div className="reply-comment">
                      <textarea
                        type="text"
                        placeholder="Enter your answer"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <div className="list-btn">
                        <Button onClick={handleConfirmReply}>
                          {isReplyCommentsRequest ? (
                            <Spinner size="12" />
                          ) : (
                            <span>Send reply</span>
                          )}
                        </Button>
                        <Button onClick={handleCloseReply}>Cancel</Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentTour;
