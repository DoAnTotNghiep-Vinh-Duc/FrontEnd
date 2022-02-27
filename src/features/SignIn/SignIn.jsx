import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import InputField from "../../components/form-control/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PasswordField from "../../components/form-control/PasswordField";

SignIn.propTypes = {};

function SignIn(props) {
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
    console.log(value);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <h1>
        <b>Đăng nhập</b>
      </h1>
      <div className="social-container">
        <Link to="/" className="social-fb">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link to="/" className="social-gg">
          <i className="fab fa-google-plus-g"></i>
        </Link>
      </div>
      <span className="span-signin">Hoặc sử dụng tài khoản của bạn</span>
      <InputField name="email" label="Email" form={form} />
      <PasswordField name="password" label="Mật khẩu" form={form} />
      <Link className="signin-forgot-password" to="/">
        Quên mật khẩu?
      </Link>
      <button className="btn-signin" type="submit">
        Đăng Nhập
      </button>
    </form>
  );
}

export default SignIn;
