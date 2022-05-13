import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import userAPI from "../../../api/userAPI";
import InputField from "../../../form-control/InputField";
import PasswordField from "../../../form-control/PasswordField";
import ReCAPTCHA from "react-google-recaptcha";

toast.configure();
SignUp.propTypes = {};

function SignUp(props) {
  const History = useHistory();
  const location = useLocation();
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const reCaptcha = useRef();

  const schema = yup.object().shape({
    fullname: yup.string().required("Vui lòng nhập Họ tên"),
    email: yup
      .string()
      .required("Vui lòng nhập Email!")
      .email("Email không chính xác!"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu ít nhất 6 kí tự!"),
    retypePassword: yup
      .string()
      .required("Vui lòng nhập lại mật khẩu")
      .oneOf([yup.ref("password")], "Mật khẩu không khớp!"),
  });

  const form = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    (async () => {
      try {
        if (!token) {
          setError("Chưa xác thực captcha!");
          return;
        }
        setError("");
        const res = await userAPI.signUpWithWebAccount({
          name: value.fullname,
          email: value.email,
          password: value.password,
          token,
        });

        if (res.status === 201) {
          props.sendEmailToVerify(value.email);
          toast.success("Đăng kí thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          form.reset();
          History.push(`${location.pathname}/verify`);
        }
      } catch (error) {
        setError(error.message);
      }
    })();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <h1>Tạo tài khoản</h1>
      <InputField name="fullname" label="Tên hiển thị" form={form} />
      <InputField name="email" label="Email" form={form} />
      <PasswordField name="password" label="Mật khẩu" form={form} />
      <PasswordField
        name="retypePassword"
        label="Nhập lại mật khẩu"
        form={form}
      />
      <span className="error">{error}</span>
      <button className="btn-signin" type="submit">
        Đăng kí
      </button>
      <div className="form-group">
        <ReCAPTCHA
          ref={reCaptcha}
          sitekey={"6Leq9tcfAAAAAOXGY1PngSBAoQzdtk194DhWzp7A"}
          onChange={(token) => setToken(token)}
          onExpired={(e) => setToken("")}
        />
      </div>
    </form>
  );
}

export default SignUp;
