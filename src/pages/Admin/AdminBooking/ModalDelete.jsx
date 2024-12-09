import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Alert, Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import {
  deleteBookingRequest,
  resetDeleteBooking,
} from "~/redux/booking/actions";

export const ModalDelete = ({ data, isOpen, handleClose, setCallApi }) => {
  const dispatch = useDispatch();

  const {
    isDeleteBookingRequest,
    isDeleteBookingSuccess,
    isDeleteBookingFailure,
  } = useSelector((store) => store.booking);
  useEffect(() => {
    if (isDeleteBookingSuccess) {
      handleClose();
      setCallApi(true);
      toast.success("Deleted tour booking successfully");
      dispatch(resetDeleteBooking());
    }
  }, [isDeleteBookingSuccess]);

  const handleDelete = () => {
    dispatch(deleteBookingRequest(data._id));
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
        {isDeleteBookingFailure && (
          <Alert color="danger">Delete failed tour bookings</Alert>
        )}
        <h3 className="color-danger">Confirm deletion of tour booking</h3>
        <p>You must definitely delete your tour booking</p>
      </ModalBody>
      <ModalFooter>
        <div className="d-flex align-content-center justify-content-end flex-grow-1 gap-2">
          <Button
            color="danger"
            disabled={isDeleteBookingRequest}
            className={`btn-shadow btn-multiple-state ${
              isDeleteBookingRequest ? "show-spinner disabled" : ""
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
            disabled={isDeleteBookingRequest}
            className={`btn-shadow btn-multiple-state ${
              isDeleteBookingRequest ? "disabled" : ""
            }`}
            style={isDeleteBookingRequest ? { cursor: "no-drop" } : {}}
            onClick={handleClose}
          >
            Back
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
