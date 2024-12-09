import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import * as Yup from "yup";
import {
  createCategoryRequest,
  updateCategoryRequest,
} from "~/redux/categoryBlog/actions";

export const PHONE_REGEX = /((0)+([1-9]{1})+([0-9]{8})\b)/g;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name cannot be blank")
    .max(200, "Name must not exceed 200 characters".replace("$x", 200)),
});

export const ModalActions = ({
  isOpen,
  type,
  handleClose,
  data,
  isShowModalConfirm,
  setIsShowModalConfirm,
}) => {
  const {
    isCreateCategoryRequest,
    isCreateCategoryFailure,
    isUpdateCategoryRequest,
    isUpdateCategoryFailure,
  } = useSelector((store) => store.categoryBlog);
  const dispatch = useDispatch();
  const [urlImage, setUrlImage] = useState();
  const [dataForm, setDataForm] = useState(null);

  useEffect(() => {
    if (data?.thumbnail) {
      setUrlImage(data?.thumbnail);
    }
  }, [data]);

  const uploadToCloudinary = async (file, uploadPreset, uploadUrl) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.secure_url) {
        return data.secure_url;
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };
  const handleImageUpload = async (file) => {
    const uploadPreset = "vr8eratg"; // Thay bằng upload preset của bạn
    const uploadUrl = "https://api.cloudinary.com/v1_1/disrx4gzn/image/upload"; // Thay bằng URL Cloudinary của bạn

    const imageUrl = await uploadToCloudinary(file, uploadPreset, uploadUrl);

    if (imageUrl) {
      setUrlImage(imageUrl);
    }
  };

  const onSubmit = (values) => {
    setDataForm(values);
    setIsShowModalConfirm(true);
  };

  const handleSubmit = () => {
    const { name, description } = dataForm;

    if (type === "add") {
      const payload = {
        name,
        description,
        thumbnail: urlImage,
      };

      dispatch(createCategoryRequest(payload));
    } else {
      const payload = {
        name,
        description,
        thumbnail: urlImage,
      };
      dispatch(updateCategoryRequest({ id: data._id, body: payload }));
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
        <ModalHeader>{`${type === "add" ? "Add" : "Update"} category blog`}</ModalHeader>
        <Formik
          initialValues={{
            name: type === "add" ? "" : data?.name || "",
            description: type === "add" ? "" : data?.description || "",
          }}
          validationSchema={SignupSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, setFieldTouched, values, errors, touched }) => {
            return (
              <Form className="av-tooltip">
                <ModalBody>
                  {(isCreateCategoryFailure || isUpdateCategoryFailure) && (
                    <Alert color="danger">
                      {type === "add"
                        ? "Add category blog"
                        : "Update category blog"}
                    </Alert>
                  )}
                  <div className="d-flex" style={{ gap: "12px" }}>
                    <FormGroup className="w-100 error-l-100">
                      <Label>
                        Category name:{" "}
                        <span style={{ color: "red", fontWeight: "600" }}>
                          *
                        </span>
                      </Label>
                      <Field
                        className="form-control"
                        name="name"
                        placeholder="Enter name"
                      />
                      {errors.name && touched.name ? (
                        <div className="invalid-feedback d-block">
                          {errors.name}
                        </div>
                      ) : null}
                    </FormGroup>
                  </div>
                  <FormGroup className="w-100 error-l-100">
                    <Label>Description: </Label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={values.description}
                      onChange={(e) =>
                        setFieldValue("description", e.target.value)
                      }
                      placeholder="Enter description"
                    />
                  </FormGroup>

                  <FormGroup className="error-l-100">
                    <Label>
                      Image:{" "}
                      <span style={{ color: "red", fontWeight: "600" }}>*</span>
                    </Label>
                    <Input
                      type="file"
                      id="exampleCustomFileBrowser1"
                      name="image"
                      onChange={(e) => handleImageUpload(e.target.files[0])}
                    />

                    {urlImage && (
                      <div
                        className="image-preview"
                        style={{
                          marginTop: "40px",
                        }}
                      >
                        <img
                          src={urlImage}
                          alt=""
                          style={{ height: "100px", width: "auto" }}
                        />
                        <div
                          className="image-preview-remove"
                          onClick={() => {
                            setUrlImage("");
                          }}
                        >
                          x
                        </div>
                      </div>
                    )}
                  </FormGroup>
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
                      className={`btn-shadow btn-multiple-state ${
                        isCreateCategoryRequest || isUpdateCategoryRequest
                          ? "show-spinner cursor-none"
                          : ""
                      } `}
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
          <h3>{`Confirm ${type === "add" ? "add" : "update"} category blog`}</h3>
          <p>{`You are sure ${type === "add" ? "add" : "update"} category blog`}</p>
        </ModalBody>
        <ModalFooter>
          <div className="d-flex align-content-center justify-content-between flex-grow-1">
            <Button
              color="primary"
              disabled={isCreateCategoryRequest || isUpdateCategoryRequest}
              className={`btn-shadow btn-multiple-state ${
                isCreateCategoryRequest || isUpdateCategoryRequest
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
              disabled={isCreateCategoryRequest || isUpdateCategoryRequest}
              className={`btn-shadow btn-multiple-state ${
                isCreateCategoryRequest || isUpdateCategoryRequest
                  ? "disabled"
                  : ""
              }`}
              style={
                isCreateCategoryRequest || isUpdateCategoryRequest
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
