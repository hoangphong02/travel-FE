import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Alert, Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export const ModalConfirmPaymentCash = ({
  isOpen,
  handleClose,
  handleConfirmPaymentCash,
}) => {
  const { isUpdateBookingRequest, isUpdateBookingFailure } = useSelector(
    (store) => store.booking
  );

  return (
    <Modal
      isOpen={isOpen}
      size="md"
      centered
      backdrop="static"
      toggle={handleClose}
    >
      <ModalBody>
        {isUpdateBookingFailure && (
          <Alert color="danger">Cash payment confirmation failed</Alert>
        )}
        <h3 className="color-danger">Confirm payment in cash</h3>
        <p>You definitely want to pay in cash</p>
      </ModalBody>
      <ModalFooter>
        <div className="d-flex align-content-center justify-content-end flex-grow-1 gap-2">
          <Button
            color="primary"
            disabled={isUpdateBookingRequest}
            className={`btn-shadow btn-multiple-state ${
              isUpdateBookingRequest ? "show-spinner disabled" : ""
            }`}
            onClick={handleConfirmPaymentCash}
          >
            <span className="spinner d-inline-block">
              <span className="bounce1" />
              <span className="bounce2" />
              <span className="bounce3" />
            </span>
            {isUpdateBookingRequest ? (
              <Spinner size="12" />
            ) : (
              <span className="label">Confirm</span>
            )}
          </Button>
          <Button
            outline
            disabled={isUpdateBookingRequest}
            className={`btn-shadow btn-multiple-state ${
              isUpdateBookingRequest ? "disabled" : ""
            }`}
            style={isUpdateBookingRequest ? { cursor: "no-drop" } : {}}
            onClick={handleClose}
          >
            Back
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
