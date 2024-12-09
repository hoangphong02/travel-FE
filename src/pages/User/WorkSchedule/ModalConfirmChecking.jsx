import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Alert, Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export const ModalConfirmChecking = ({
  isOpen,
  handleClose,
  handleConfirm,
}) => {
  const { isUpdateCheckingRequest, isUpdateCheckingFailure } = useSelector(
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
        {isUpdateCheckingFailure && (
          <Alert color="danger">Update checked in failure</Alert>
        )}
        <h3 className="color-danger">Update status checked in booking</h3>
        <p>You definitely want to update status checked in booking</p>
      </ModalBody>
      <ModalFooter>
        <div className="d-flex align-content-center justify-content-end flex-grow-1 gap-2">
          <Button
            color="primary"
            disabled={isUpdateCheckingRequest}
            className={`btn-shadow btn-multiple-state ${
              isUpdateCheckingRequest ? "show-spinner disabled" : ""
            }`}
            onClick={handleConfirm}
          >
            <span className="spinner d-inline-block">
              <span className="bounce1" />
              <span className="bounce2" />
              <span className="bounce3" />
            </span>
            {isUpdateCheckingRequest ? (
              <Spinner size="12" />
            ) : (
              <span className="label">Confirm</span>
            )}
          </Button>
          <Button
            outline
            disabled={isUpdateCheckingRequest}
            className={`btn-shadow btn-multiple-state ${
              isUpdateCheckingRequest ? "disabled" : ""
            }`}
            style={isUpdateCheckingRequest ? { cursor: "no-drop" } : {}}
            onClick={handleClose}
          >
            Back
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
