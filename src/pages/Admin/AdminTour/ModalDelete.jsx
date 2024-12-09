import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Alert, Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { deleteTourRequest, resetDeleteTour } from "~/redux/tour/actions";

export const ModalDelete = ({ data, isOpen, handleClose, setCallApi }) => {
  const dispatch = useDispatch();

  const { isDeleteTourRequest, isDeleteTourSuccess, isDeleteTourFailure } =
    useSelector((store) => store.tour);
  useEffect(() => {
    if (isDeleteTourSuccess) {
      handleClose();
      setCallApi(true);
      toast.success("Delete Tour successfully");
      dispatch(resetDeleteTour());
    }
  }, [isDeleteTourSuccess]);

  const handleDelete = () => {
    dispatch(deleteTourRequest(data._id));
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
        {isDeleteTourFailure && (
          <Alert color="danger">Delete Failed Tours</Alert>
        )}
        <h3 className="color-danger">Confirm deletion of Tour</h3>
        <p>You must definitely delete the Tour</p>
      </ModalBody>
      <ModalFooter>
        <div className="d-flex align-content-center justify-content-end flex-grow-1 gap-2">
          <Button
            color="danger"
            disabled={isDeleteTourRequest}
            className={`btn-shadow btn-multiple-state ${
              isDeleteTourRequest ? "show-spinner disabled" : ""
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
            disabled={isDeleteTourRequest}
            className={`btn-shadow btn-multiple-state ${
              isDeleteTourRequest ? "disabled" : ""
            }`}
            style={isDeleteTourRequest ? { cursor: "no-drop" } : {}}
            onClick={handleClose}
          >
            Back
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
