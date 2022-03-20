import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../components/form-control/InputField";
import PasswordField from "../../components/form-control/PasswordField";

SignUp.propTypes = {};

function SignUp(props) {
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
    console.log(value);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <h1>Tạo tài khoản</h1>
      <InputField name="fullname" label="Họ Tên" form={form} />
      <InputField name="email" label="Email" form={form} />
      <PasswordField name="password" label="Mật khẩu" form={form} />
      <PasswordField
        name="retypePassword"
        label="Nhập lại mật khẩu"
        form={form}
      />
      <button className="btn-signin" type="submit">
        Đăng kí
      </button>
    </form>
  );
}

export default SignUp;
