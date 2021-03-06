import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import InputField from "../../../form-control/InputField";
import PasswordField from "../../../form-control/PasswordField";
import { signIn } from "../../../redux/userSlice";

toast.configure();
SignIn.propTypes = {};

function SignIn(props) {
  const History = useHistory();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Vui lòng nhập Email!")
      .email("Email không chính xác!"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu ít nhất 6 kí tự!"),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    const fetchSignIn = async () => {
      try {
        const action = signIn({ email: value.email, password: value.password });
        const actionResult = await dispatch(action);
        const result = unwrapResult(actionResult);
        if (result.status === 200) {
          toast.success("Đăng nhập thành công", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
            theme: "light",
          });
          if (result.data.account.role === "Admin") {
            window.location = `${process.env.REACT_APP_BASE_URL}/admin`;
            History.push("/admin");
          } else {
            window.location = process.env.REACT_APP_BASE_URL;
            History.push("/");
          }
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchSignIn();
  };

  const google = () => {
    // window.open("http://localhost:5000/auth/google", "_self");
    // (async () => {
    //   try {
    //     const res = await userAPI.signInWithGoogle();
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
  };

  const facebook = () => {
    // window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <h1>
        <b>Đăng nhập</b>
      </h1>
      <div className="social-container">
        <Link to="" className="social-fb">
          <i className="fab fa-facebook-f">
            <div className="social-fb-login" onClick={facebook}></div>
          </i>
        </Link>
        <Link to="" className="social-gg">
          <i className="fab fa-google-plus-g">
            <div className="social-gg-login" onClick={google}></div>
          </i>
        </Link>
      </div>
      <span className="span-signin">Hoặc sử dụng tài khoản của bạn</span>
      <InputField name="email" label="Email" form={form} />
      <PasswordField name="password" label="Mật khẩu" form={form} />
      <span className="error">{error}</span>
      <Link className="signin-forgot-password" to="/forgotPassword">
        Quên mật khẩu?
      </Link>
      <button className="btn-signin" type="submit">
        Đăng Nhập
      </button>
    </form>
  );
}

export default SignIn;
