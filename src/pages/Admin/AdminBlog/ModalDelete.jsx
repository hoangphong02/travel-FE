import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Alert, Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { deleteBlogsRequest, resetDeleteBlogs } from "~/redux/blog/actions";

export const ModalDelete = ({ data, isOpen, handleClose, setCallApi }) => {
  const dispatch = useDispatch();
  const { isDeleteBlogsRequest, isDeleteBlogsSuccess, isDeleteBlogsFailure } =
    useSelector((store) => store.blog);

  useEffect(() => {
    if (isDeleteBlogsSuccess) {
      handleClose();
      setCallApi(true);
      toast.success("Successfully deleted blog post");
      dispatch(resetDeleteBlogs());
    }
  }, [isDeleteBlogsSuccess]);

  const handleDelete = () => {
    dispatch(deleteBlogsRequest(data._id));
  };

  return (
    <Modal
      isOpen={isOpen}
      size="md"
      centered
      backdrop="static"
      toggle={handleClose}
    >
      <ModalBody>
        {isDeleteBlogsFailure && (
          <Alert color="danger">Delete failed blog post</Alert>
        )}
        <h3 className="color-danger">Confirm deletion of blog post</h3>
        <p>You should definitely delete the blog post</p>
      </ModalBody>
      <ModalFooter>
        <div className="d-flex align-content-center justify-content-end flex-grow-1 gap-2">
          <Button
            color="danger"
            disabled={isDeleteBlogsRequest}
            className={`btn-shadow btn-multiple-state ${
              isDeleteBlogsRequest ? "show-spinner disabled" : ""
            }`}
            onClick={handleDelete}
          >
            <span className="spinner d-inline-block">
              <span className="bounce1" />
              <span className="bounce2" />
              <span className="bounce3" />
            </span>
            <span className="label">Confirm</span>
          </Button>
          <Button
            color="danger"
            outline
            disabled={isDeleteBlogsRequest}
            className={`btn-shadow btn-multiple-state ${
              isDeleteBlogsRequest ? "disabled" : ""
            }`}
            style={isDeleteBlogsRequest ? { cursor: "no-drop" } : {}}
            onClick={handleClose}
          >
            Back
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
