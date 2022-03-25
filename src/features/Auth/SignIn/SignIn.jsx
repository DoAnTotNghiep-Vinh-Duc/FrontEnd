import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import userAPI from "../../../api/userAPI";
import InputField from "../../../form-control/InputField";
import PasswordField from "../../../form-control/PasswordField";

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

  const responseGoogle = ({ tokenId }) => {
    console.log(tokenId);
    const fetchSignin = async () => {
      try {
        const res = await userAPI.signin();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSignin();
  };

  const clickFacebook = () => {
    console.log("clicked fb");
  };

  const responseFacebook = ({ accessToken, userID }) => {
    console.log({ accessToken, userID });
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <h1>
        <b>Đăng nhập</b>
      </h1>
      <div className="social-container">
        <Link className="social-fb">
          <i className="fab fa-facebook-f">
            <div className="social-fb-login">
              <FacebookLogin
                appId="710231577005749"
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
      <span className="span-signin">Hoặc sử dụng tài khoản của bạn</span>
      <InputField name="email" label="Email" form={form} />
      <PasswordField name="password" label="Mật khẩu" form={form} />
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
