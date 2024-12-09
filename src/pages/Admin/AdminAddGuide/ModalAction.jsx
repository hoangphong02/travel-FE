import { Field, Form, Formik } from "formik";
import moment from "moment";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  Button,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import * as Yup from "yup";
import { addGuideBookingRequest } from "~/redux/booking/actions";

export const PHONE_REGEX = /((0)+([1-9]{1})+([0-9]{8})\b)/g;

const SignupSchema = Yup.object().shape({
  tour_guide: Yup.mixed()
    .test("is-not-empty", "Tour guide cannot be left blank", (value) => {
      if (typeof value === "object" && value !== null) {
        return Object.keys(value).length > 0;
      }
      if (typeof value === "array") {
        return Object.keys(value).length > 0;
      }
      return false;
    })
    .required("Tour guide cannot be left blank"),
});

export const ModalActions = ({
  isOpen,
  type,
  handleClose,
  data,
  isShowModalConfirm,
  setIsShowModalConfirm,
}) => {
  const { getAllTourState } = useSelector((store) => store.tour);

  const {
    getUserGuideBookingState,
    isAddGuideBookingRequest,
    isAddGuideBookingFailure,
  } = useSelector((store) => store.booking);

  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState(null);
  const onSubmit = (values) => {
    setDataForm(values);
    setIsShowModalConfirm(true);
  };

  const handleSubmit = () => {
    const { tour_id, tour_guide, group_number, start_date, end_date } =
      dataForm;

    const payload = {
      tour_id: tour_id[0]?.value,
      tour_guide_id: tour_guide?.value,
      start_date: new Date(start_date).toISOString(),
      end_date: new Date(end_date).toISOString(),
      group_number,
    };

    dispatch(addGuideBookingRequest(payload));
  };

  return (
    <>
      <Modal
        centered
        isOpen={isOpen}
        size="xl"
        className="modal-actions-product"
      >
        <ModalHeader>{`${type === "add" ? "Add" : "Add"} tour guide`}</ModalHeader>
        <Formik
          initialValues={{
            tour_id:
              type === "add"
                ? {}
                : getAllTourState?.data
                    ?.filter(
                      (item) => item._id === data?.bookings[0]?.tour_id?._id
                    )
                    ?.map((tour) => {
                      return {
                        value: tour?._id,
                        label: tour?.name,
                      };
                    }) || {},
            group_number: type === "add" ? "" : data?.group_number || "",
            start_date:
              type === "add"
                ? ""
                : moment(data?.start_date).format("YYYY-MM-DDTHH:mm") || "",
            end_date:
              type === "add"
                ? ""
                : moment(data?.end_date).format("YYYY-MM-DDTHH:mm") || "",
            tour_guide:
              type === "add"
                ? {}
                : getUserGuideBookingState?.data?.availableEmployees
                    ?.filter(
                      (item) => item._id === data?.bookings[0]?.tour_guide?._id
                    )
                    ?.map((user) => {
                      return {
                        value: user?._id,
                        label: user?.name,
                      };
                    }) || {},
            user: data?.bookings[0]?.tour_guide?.name || "",
          }}
          validationSchema={SignupSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, setFieldTouched, values, errors, touched }) => {
            return (
              <Form className="av-tooltip">
                <ModalBody>
                  {isAddGuideBookingFailure && (
                    <Alert color="danger">
                      {type === "add"
                        ? "Add tour guide failure"
                        : "Add tour guide failure"}
                    </Alert>
                  )}
                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Tour:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Select
                        isDisabled={type !== "add"}
                        options={getAllTourState?.data?.map((item) => {
                          return {
                            value: item?._id,
                            label: item?.name,
                          };
                        })}
                        onChange={(e) => setFieldValue("tour_id", e)}
                        value={values.tour_id}
                        placeholder="Choose a tour"
                      ></Select>
                    </FormGroup>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Tour guide:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      {data?.bookings[0]?.tour_guide?._id ? (
                        <Field
                          disabled
                          className="form-control"
                          placeholder="Enter the start date"
                          name="user"
                        />
                      ) : (
                        <>
                          <Select
                            options={getUserGuideBookingState?.data?.availableEmployees?.map(
                              (item) => {
                                return {
                                  value: item?._id,
                                  label: item?.name,
                                };
                              }
                            )}
                            onChange={(e) => setFieldValue("tour_guide", e)}
                            value={values.tour_guide}
                            placeholder="Choose tour guide"
                            onBlur={() => setFieldTouched("tour_guide", true)}
                          ></Select>
                          {errors.tour_guide && touched.tour_guide ? (
                            <div className="invalid-feedback d-block">
                              {errors.tour_guide}
                            </div>
                          ) : null}
                        </>
                      )}
                    </FormGroup>
                  </div>

                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Start date:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Field
                        disabled
                        type="datetime-local"
                        className="form-control"
                        name="start_date"
                        placeholder="Enter the start date"
                      />
                    </FormGroup>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        End date:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Field
                        disabled
                        type="datetime-local"
                        className="form-control"
                        name="end_date"
                        placeholder="Enter the end date"
                      />
                    </FormGroup>
                  </div>
                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Group name:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Field
                        disabled
                        className="form-control"
                        name="group_number"
                        placeholder="Enter group name"
                      />
                    </FormGroup>
                  </div>
                </ModalBody>
                <ModalFooter>
                  {type === "edit" && (
                    <Button
                      color="primary"
                      style={{
                        color: "#fff",
                        background: "#08428c",
                        border: "none",
                        padding: "8px 24px",
                        display: data?.bookings[0]?.tour_guide?.name
                          ? "none"
                          : "block",
                      }}
                      className="btn-shadow btn-multiple-state "
                      type="submit"
                    >
                      <span className="label">Update</span>
                    </Button>
                  )}
                  {type !== "edit" && (
                    <Button
                      color="primary"
                      style={{
                        color: "#fff",
                        background: "#08428c",
                        border: "none",
                        padding: "8px 24px",
                      }}
                      type="submit"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">Add</span>
                    </Button>
                  )}
                  <Button
                    color="primary"
                    outline
                    className="btn-shadow btn-multiple-state"
                    onClick={handleClose}
                  >
                    Back
                  </Button>
                </ModalFooter>
              </Form>
            );
          }}
        </Formik>
      </Modal>

      <Modal
        isOpen={isShowModalConfirm}
        size="sm"
        centered
        backdrop="static"
        toggle={() => setIsShowModalConfirm(false)}
      >
        <ModalBody>
          <h3>{`Confirm additional tour guides`}</h3>
          <p>You must definitely add a tour guide to the group</p>
        </ModalBody>

        <ModalFooter>
          <div className="d-flex align-content-center justify-content-between flex-grow-1">
            <Button
              color="primary"
              disabled={isAddGuideBookingRequest}
              className={`btn-shadow btn-multiple-state ${
                isAddGuideBookingRequest ? "show-spinner disabled" : ""
              }`}
              style={{
                background: "rgb(8, 66, 140)",
                border: "none",
              }}
              onClick={handleSubmit}
            >
              <span className="spinner d-inline-block">
                <span className="bounce1" />
                <span className="bounce2" />
                <span className="bounce3" />
              </span>
              <span className="label">Confirm</span>
            </Button>
            <Button
              color="primary"
              outline
              disabled={isAddGuideBookingRequest}
              className={`btn-shadow btn-multiple-state ${
                isAddGuideBookingRequest ? "disabled" : ""
              }`}
              style={isAddGuideBookingRequest ? { cursor: "no-drop" } : {}}
              onClick={() => setIsShowModalConfirm(false)}
            >
              Back
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};
