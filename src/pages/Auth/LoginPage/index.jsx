import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Form } from "react-bootstrap";
import { loginRequest, resetAuthState } from "~/redux/auth/actions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { routesUser } from "~/configs";
import { toast } from "react-toastify";
import {
  CSEyeOffOutline,
  CSEyeOutline,
} from "~/components/iconography/Outline";

const LoginPage = () => {
  const { isGetProfileSuccess, profileResponse, isGetProfileFailure } =
    useSelector((store) => store.user);
  const { isLoginRequest, isLoginFailure, isLoginSuccess } = useSelector(
    (store) => store.auth
  );
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("input.email.error.required")
        .matches(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "input.email.matches.error.required"
        ),
      password: Yup.string().trim().required("input.password.error.required"),
    }),
    onSubmit: (values) => {
      dispatch(
        loginRequest({ email: values.email, password: values.password })
      );
    },
  });

  useEffect(() => {
    if (profileResponse?.data) {
      history.push(routesUser.home);
    }
  }, [profileResponse]);
  useEffect(() => {
    if (isLoginSuccess) {
      history.push(routesUser.home);
      toast.success("Sign in successfully", {
        position: "top-center",
      });
      dispatch(resetAuthState());
    }
  }, [isLoginSuccess]);

  return (
    <div className="login-page">
      <div className="body">
        <div className="heading">LOGIN</div>
        <Form noValidate onSubmit={formik.handleSubmit}>
          {isLoginFailure && (
            <Alert variant="danger">
              Login failed. Please check your login information
            </Alert>
          )}
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={(e) =>
              formik.setFieldValue("email", e.target.value.toString())
            }
          />
          <div className="password">
            <input
              className="input"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) =>
                formik.setFieldValue("password", e.target.value.toString())
              }
            />
            {showPassword ? (
              <span onClick={() => setShowPassword(false)}>
                <CSEyeOutline />
              </span>
            ) : (
              <span onClick={() => setShowPassword(true)}>
                <CSEyeOffOutline />
              </span>
            )}
          </div>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
