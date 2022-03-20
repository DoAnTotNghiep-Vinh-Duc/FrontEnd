import React from "react";
import { Link } from "react-router-dom";
import InputField from "../../components/form-control/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import PasswordField from "../../components/form-control/PasswordField";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

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

  const responseGoogle = ({ tokenId }) => {
    console.log(tokenId);
  };

  const clickFacebook = () => {
    console.log("clicked fb");
  };

  const responseFacebook = ({ accessToken, userID }) => {
    console.log({ accessToken, userID });
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <h1>Tạo tài khoản</h1>
      <div className="social-container">
        <Link className="social-fb">
          <i className="fab fa-facebook-f">
            <div className="social-fb-login">
              <FacebookLogin
                appId="484133043279715"
                fields="name,email,picture"
                callback={responseFacebook}
                onClick={clickFacebook}
                textButton=""
              />
            </div>
          </i>
        </Link>
        <Link className="social-gg">
          <i className="fab fa-google-plus-g">
            <div className="social-gg-login">
              <GoogleLogin
                clientId="470652201368-ordd9phkfdtrd8u44pmubg41t3vnm8mi.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                buttonText=""
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </i>
        </Link>
      </div>
      <span>Hoặc sử dụng email để đăng kí</span>
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
