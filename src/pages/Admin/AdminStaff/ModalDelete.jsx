import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { deleteUserRequest, resetDeleteUserState } from "~/redux/auth/actions";

export const ModalDelete = ({ data, isOpen, handleClose, setCallApi }) => {
  const { isDeleteUserRequest, isDeleteUserSuccess, isDeleteUserFailure } =
    useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDeleteUserSuccess) {
      setCallApi(true);
      toast.success("Successfully deleted employee");
      handleClose();
      dispatch(resetDeleteUserState());
    }
  }, [isDeleteUserSuccess]);
  useEffect(() => {
    if (isDeleteUserFailure) {
      toast.error("Delete employee failed");
      dispatch(resetDeleteUserState());
    }
  }, [isDeleteUserFailure]);

  const handleDelete = () => {
    dispatch(deleteUserRequest(data._id));
  };

  return (
    <Modal
      isOpen={isOpen}
      size="sm"
      centered
      backdrop="static"
      toggle={handleClose}
    >
      <ModalBody>
        {/* {isDeleteProductFailure && (
          <Alert color="danger">
            {translate("product.noti.delete.failure")}
          </Alert>
        )} */}
        <h3 className="color-danger">Confirm delete employee </h3>
        <p>You must definitely delete the employee</p>
      </ModalBody>
      <ModalFooter>
        <div className="d-flex align-content-center justify-content-between flex-grow-1">
          <Button
            color="danger"
            disabled={isDeleteUserRequest}
            className={`btn-shadow btn-multiple-state ${
              isDeleteUserRequest ? "show-spinner disabled" : ""
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
            disabled={isDeleteUserRequest}
            className={`btn-shadow btn-multiple-state ${
              isDeleteUserRequest ? "disabled" : ""
            }`}
            style={isDeleteUserRequest ? { cursor: "no-drop" } : {}}
            onClick={handleClose}
          >
            Back
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
