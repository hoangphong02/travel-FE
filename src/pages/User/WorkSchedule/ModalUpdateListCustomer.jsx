import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Alert, Button, Modal, ModalBody, ModalFooter } from "reactstrap";

export const ModalUpdateListCustomer = ({
  isOpen,
  handleClose,
  handleConfirm,
  data,
}) => {
  const { isUpdateCheckingRequest, isUpdateCheckingFailure } = useSelector(
    (store) => store.booking
  );
  const [strCustom, setStrCustom] = useState("");

  useEffect(() => {
    if (data) {
      setStrCustom(data?.customer_list);
    }
  }, [data]);
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
          <Alert color="danger">Update list customer on tour failure</Alert>
        )}
        <h3 className="color-danger">Update list customer on tour</h3>
        <div>
          <textarea
            style={{
              width: "100%",
              borderRadius: "8px",
              borderColor: "#CBCBCB",
              outline: "none",
              padding: "8px 12px",
              minHeight: "100px",
              marginTop: "16px",
            }}
            value={strCustom}
            onChange={(e) => setStrCustom(e.target.value)}
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <div className="d-flex align-content-center justify-content-end flex-grow-1 gap-2">
          <Button
            color="primary"
            disabled={isUpdateCheckingRequest}
            className={`btn-shadow btn-multiple-state ${
              isUpdateCheckingRequest ? "show-spinner disabled" : ""
            }`}
            onClick={() => handleConfirm(strCustom)}
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
