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
import { Switch } from "~/components/common";
import {
  LIST_OPTION_RANK_HOTEL,
  ListNameBooking,
  ListStatusBooking,
} from "~/constants";
import {
  createBookingRequest,
  updateBookingRequest,
} from "~/redux/booking/actions";

export const PHONE_REGEX = /((0)+([1-9]{1})+([0-9]{8})\b)/g;

const SignupSchema = Yup.object().shape({
  tour_id: Yup.mixed()
    .test("is-object-or-array", "Tour cannot be empty", (value) => {
      if (Array.isArray(value)) {
        return (
          value.length > 0 &&
          typeof value[0] === "object" &&
          Object.keys(value[0]).length > 0
        );
      }
      return (
        typeof value === "object" &&
        value !== null &&
        Object.keys(value).length > 0
      );
    })
    .required("Tour cannot be empty"),
  fullname: Yup.string().required("The person's name cannot be left blank"),
  address: Yup.string().required("The ordering address cannot be left blank"),
  email: Yup.string().required("The person's email cannot be left blank"),
  phone: Yup.string().required("The person's phone cannot be left blank"),
  adult_ticket: Yup.number().min(
    1,
    "The adult ticket number must be greater than 0"
  ),
  start_date: Yup.string().required("Start date cannot be blank"),
  end_date: Yup.string().required("End date cannot be blank"),
  hotel_level: Yup.object()
    .test(
      "is-not-empty",
      "Hotel type cannot be left blank",
      (value) => value && Object.keys(value).length > 0
    )
    .required("Hotel type cannot be left blank"),
  total_price: Yup.number().min(1, "Tour price must be greater than 0"),
  payment_status: Yup.object()
    .test(
      "is-not-empty",
      "Payment status cannot be empty",
      (value) => value && Object.keys(value).length > 0
    )
    .required("Payment status cannot be empty"),
  payment_method_name: Yup.object()
    .test(
      "is-not-empty",
      "Payment method name cannot be empty",
      (value) => value && Object.keys(value).length > 0
    )
    .required("Payment method name cannot be empty"),
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
  const { getAllUsersState } = useSelector((store) => store.user);
  const {
    isCreateBookingRequest,
    isCreateBookingFailure,
    isUpdateBookingRequest,
    isUpdateBookingFailure,
  } = useSelector((store) => store.booking);

  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState(null);
  const onSubmit = (values) => {
    setDataForm(values);
    setIsShowModalConfirm(true);
  };

  const handleSubmit = () => {
    const {
      tour_id,
      hotel_level,
      email,
      phone,
      fullname,
      adult_ticket,
      child_ticket,
      total_price,
      transactionId,
      payment_status,
      payment_method_name,
      tour_guide,
      group_number,
      start_date,
      end_date,
      note,
      address,
      is_cancel,
      is_checking,
      customer_list,
    } = dataForm;

    const payload = {
      tour_id: tour_id?.value,
      hotel_level: hotel_level?.value,
      email,
      phone,
      fullname,
      adult_ticket,
      child_ticket,
      total_price,
      transactionId,
      payment_status: payment_status?.value,
      payment_method_name: payment_method_name?.value,
      tour_guide: tour_guide?.value,
      group_number,
      start_date: new Date(start_date).toISOString(),
      end_date: new Date(end_date).toISOString(),
      note,
      address,
      is_cancel,
      is_checking,
      customer_list,
    };

    const payloadUpdate = {
      start_date: new Date(start_date).toISOString(),
      end_date: new Date(end_date).toISOString(),
      address,
      payment_status: payment_status?.value,
      payment_method_name: payment_method_name?.value,
      is_cancel,
      is_checking,
      customer_list,
    };

    if (type === "add") {
      dispatch(createBookingRequest(payload));
    } else {
      dispatch(updateBookingRequest({ id: data._id, body: payloadUpdate }));
    }
  };

  return (
    <>
      <Modal
        centered
        isOpen={isOpen}
        size="xl"
        className="modal-actions-product"
      >
        <ModalHeader>{`${type === "add" ? "Add" : "Update"} book tour`}</ModalHeader>
        <Formik
          initialValues={{
            tour_id:
              type === "add"
                ? {}
                : getAllTourState?.data
                    ?.filter((item) => item._id === data?.tour_id?._id)
                    ?.map((tour) => {
                      return {
                        value: tour?._id,
                        label: tour?.name,
                      };
                    }) || {},
            fullname: type === "add" ? "" : data?.fullname || "",
            email: type === "add" ? "" : data?.email || "",
            phone: type === "add" ? "" : data?.phone || "",
            adult_ticket: type === "add" ? 0 : data?.adult_ticket || 0,
            child_ticket: type === "add" ? 0 : data?.child_ticket || 0,
            start_date:
              type === "add"
                ? ""
                : moment(data?.start_date).format("YYYY-MM-DDTHH:mm") || "",
            end_date:
              type === "add"
                ? ""
                : moment(data?.end_date).format("YYYY-MM-DDTHH:mm") || "",
            hotel_level:
              type === "add"
                ? ""
                : LIST_OPTION_RANK_HOTEL.find(
                    (item) => item.value === data?.hotel_level
                  ) || "",
            group_number: type === "add" ? 0 : data?.group_number || 0,
            address: type === "add" ? "" : data?.address || "",
            total_price: type === "add" ? 0 : data?.total_price || 0,
            transactionId:
              type === "add" ? "pending" : data?.transactionId || "",
            payment_status:
              type === "add"
                ? ""
                : ListStatusBooking.find(
                    (item) => item.value === data?.payment_status
                  ) || "",
            payment_method_name:
              type === "add"
                ? ""
                : ListNameBooking.find(
                    (item) => item.value === data?.payment_method_name
                  ) || "",
            tour_guide:
              type === "add"
                ? {}
                : getAllUsersState?.data
                    ?.filter((item) => item._id === data?.tour_guide?._id)
                    ?.map((user) => {
                      return {
                        value: user?._id,
                        label: user?.name,
                      };
                    }) || {},
            note: type === "add" ? "" : data?.note || "",
            is_cancel: type === "add" ? false : data?.is_cancel || false,
            is_checking: type === "add" ? false : data?.is_checking || false,
            customer_list: type === "add" ? "" : data?.customer_list || "",
          }}
          validationSchema={SignupSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, setFieldTouched, values, errors, touched }) => {
            return (
              <Form className="av-tooltip">
                <ModalBody>
                  {(isCreateBookingFailure || isUpdateBookingFailure) && (
                    <Alert color="danger">
                      {type === "add"
                        ? "Booking tour successfully"
                        : "Update booking tour failure"}
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
                        onBlur={() => setFieldTouched("tour_id", true)}
                      ></Select>
                      {errors.tour_id && touched.tour_id ? (
                        <div className="invalid-feedback d-block">
                          {errors.tour_id}
                        </div>
                      ) : null}
                    </FormGroup>
                    {type !== "add" ? (
                      <FormGroup className="w-100 error-l-100">
                        <Label>
                          Tour guide:{" "}
                          <span style={{ color: "red", fontWeight: "600" }}>
                            *
                          </span>
                        </Label>
                        <Select
                          isDisabled={type !== "add"}
                          options={getAllUsersState?.data?.map((item) => {
                            return {
                              value: item?._id,
                              label: item?.name,
                            };
                          })}
                          onChange={(e) => setFieldValue("tour_guide", e)}
                          value={values.tour_guide}
                          placeholder="Choose a tour guide"
                        ></Select>
                      </FormGroup>
                    ) : null}
                  </div>
                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Name of person booking tour:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Field
                        disabled={type !== "add"}
                        className="form-control"
                        name="fullname"
                        placeholder="Enter the name of the person booking the tour"
                      />
                      {errors.fullname && touched.fullname ? (
                        <div className="invalid-feedback d-block">
                          {errors.fullname}
                        </div>
                      ) : null}
                    </FormGroup>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Address of the person booking the tour:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Field
                        className="form-control"
                        name="address"
                        placeholder="Enter the orderer's address"
                      />
                      {errors.address && touched.address ? (
                        <div className="invalid-feedback d-block">
                          {errors.address}
                        </div>
                      ) : null}
                    </FormGroup>
                  </div>

                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Email:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Field
                        disabled={type !== "add"}
                        className="form-control"
                        name="email"
                        placeholder="Enter the tour booking person's email"
                      />
                      {errors.email && touched.email ? (
                        <div className="invalid-feedback d-block">
                          {errors.email}
                        </div>
                      ) : null}
                    </FormGroup>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Phone:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Field
                        disabled={type !== "add"}
                        className="form-control"
                        name="phone"
                        placeholder="Enter the orderer's phone number"
                      />
                      {errors.phone && touched.phone ? (
                        <div className="invalid-feedback d-block">
                          {errors.phone}
                        </div>
                      ) : null}
                    </FormGroup>
                  </div>
                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Adult ticket:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Field
                        disabled={type !== "add"}
                        className="form-control"
                        name="adult_ticket"
                        placeholder="Enter the number of adult tickets"
                      />
                      {errors.adult_ticket && touched.adult_ticket ? (
                        <div className="invalid-feedback d-block">
                          {errors.adult_ticket}
                        </div>
                      ) : null}
                    </FormGroup>
                    <FormGroup className="w-100 error-l-100">
                      <Label>Child tickets: </Label>
                      <Field
                        disabled={type !== "add"}
                        className="form-control"
                        name="child_ticket"
                        placeholder="Enter the number of child tickets"
                      />
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
                        type="datetime-local"
                        className="form-control"
                        name="start_date"
                        placeholder="Enter the start date"
                      />
                      {errors.start_date && touched.start_date ? (
                        <div className="invalid-feedback d-block">
                          {errors.start_date}
                        </div>
                      ) : null}
                    </FormGroup>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        End date:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Field
                        type="datetime-local"
                        className="form-control"
                        name="end_date"
                        placeholder="Enter the end date"
                      />
                      {errors.end_date && touched.end_date ? (
                        <div className="invalid-feedback d-block">
                          {errors.end_date}
                        </div>
                      ) : null}
                    </FormGroup>
                  </div>

                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Hotel:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Select
                        isDisabled={type !== "add"}
                        options={LIST_OPTION_RANK_HOTEL}
                        onChange={(e) => setFieldValue("hotel_level", e)}
                        value={values.hotel_level}
                        onBlur={() => setFieldTouched("hotel_level", true)}
                      ></Select>
                      {errors.hotel_level && touched.hotel_level ? (
                        <div className="invalid-feedback d-block">
                          {errors.hotel_level}
                        </div>
                      ) : null}
                    </FormGroup>
                    {type !== "add" ? (
                      <FormGroup className="w-100 error-l-100">
                        <Label>
                          Group:{" "}
                          <span style={{ color: "red", fontWeight: "600" }}>
                            *
                          </span>
                        </Label>
                        <Field
                          disabled
                          className="form-control"
                          name="group_number"
                          placeholder="Enter the number of people/group"
                        />
                      </FormGroup>
                    ) : null}
                  </div>

                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Total price tour:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Field
                        disabled={type !== "add"}
                        className="form-control"
                        name="total_price"
                        placeholder="Enter the total tour price"
                      />
                      {errors.total_price && touched.total_price ? (
                        <div className="invalid-feedback d-block">
                          {errors.total_price}
                        </div>
                      ) : null}
                    </FormGroup>
                    {type !== "add" ? (
                      <FormGroup className="w-100 error-l-100">
                        <Label>
                          Payment code:{" "}
                          <span style={{ color: "red", fontWeight: "600" }}>
                            *
                          </span>
                        </Label>
                        <Field
                          disabled={type !== "add"}
                          className="form-control"
                          name="transactionId"
                          placeholder="Enter the payment code"
                        />
                      </FormGroup>
                    ) : null}
                  </div>
                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Payment status:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Select
                        options={ListStatusBooking}
                        onChange={(e) => setFieldValue("payment_status", e)}
                        value={values.payment_status}
                        onBlur={() => setFieldTouched("payment_status", true)}
                      ></Select>
                      {errors.payment_status && touched.payment_status ? (
                        <div className="invalid-feedback d-block">
                          {errors.payment_status}
                        </div>
                      ) : null}
                    </FormGroup>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Payment method name:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>

                      <Select
                        options={ListNameBooking}
                        onChange={(e) =>
                          setFieldValue("payment_method_name", e)
                        }
                        value={values.payment_method_name}
                        onBlur={() =>
                          setFieldTouched("payment_method_name", true)
                        }
                      ></Select>
                      {errors.payment_method_name &&
                      touched.payment_method_name ? (
                        <div className="invalid-feedback d-block">
                          {errors.payment_method_name}
                        </div>
                      ) : null}
                    </FormGroup>
                  </div>
                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>Note: </Label>
                      <textarea
                        disabled={type !== "add"}
                        className="form-control"
                        name="note"
                        value={values.note}
                        onChange={(e) => setFieldValue("note", e.target.value)}
                        placeholder="Enter note"
                      />
                    </FormGroup>
                  </div>
                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>List customer: </Label>
                      <textarea
                        className="form-control"
                        name="customer_list"
                        value={values.customer_list}
                        onChange={(e) =>
                          setFieldValue("customer_list", e.target.value)
                        }
                        placeholder="Customer list"
                      />
                    </FormGroup>
                  </div>
                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100 d-flex gap-4">
                      <Label>Checked in: </Label>
                      <Switch
                        checked={values.is_checking}
                        onChange={(e) =>
                          setFieldValue("is_checking", e.target.checked)
                        }
                      />
                    </FormGroup>
                    <FormGroup className="w-100 error-l-100 d-flex gap-4">
                      <Label>Canceled: </Label>
                      <Switch
                        checked={values.is_cancel}
                        onChange={(e) =>
                          setFieldValue("is_cancel", e.target.checked)
                        }
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
          <h3>{`Confirm ${type === "add" ? "add" : "update"} book tour`}</h3>
          <p>{`you are sure ${type === "add" ? "add" : "update"} book tour`}</p>
        </ModalBody>

        <ModalFooter>
          <div className="d-flex align-content-center justify-content-between flex-grow-1">
            <Button
              color="primary"
              disabled={isCreateBookingRequest || isUpdateBookingRequest}
              className={`btn-shadow btn-multiple-state ${
                isCreateBookingRequest || isUpdateBookingRequest
                  ? "show-spinner disabled"
                  : ""
              }`}
              style={{ background: "rgb(8, 66, 140)", border: "none" }}
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
              disabled={isCreateBookingRequest || isUpdateBookingRequest}
              className={`btn-shadow btn-multiple-state ${
                isCreateBookingRequest || isUpdateBookingRequest
                  ? "disabled"
                  : ""
              }`}
              style={
                isCreateBookingRequest || isUpdateBookingRequest
                  ? { cursor: "no-drop" }
                  : {}
              }
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
