import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import OtpInput from "react-otp-input";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import icon from "../../assets/images/changepass.png";
import { GlobalContext } from "../../context/context";
import PasswordField from "../../form-control/PasswordField";
import "./ChangePassword.scss";

ChangePassword.propTypes = {};

function ChangePassword(props) {
  const { state } = useContext(GlobalContext);
  const History = useHistory();
  const [OTP, setOTP] = useState("");

  const handleChange = (value) => {
    setOTP(value);
  };

  const schema = yup.object().shape({
    newpassword: yup
      .string()
      .required("Vui lòng nhập mật khẩu mới")
      .min(6, "Mật khẩu ít nhất 6 kí tự!"),
    retypenewpassword: yup
      .string()
      .required("Vui lòng nhập lại mật khẩu mới")
      .oneOf([yup.ref("newpassword")], "Mật khẩu không khớp!"),
  });

  const form = useForm({
    defaultValues: {
      newpassword: "",
      retypenewpassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    if (OTP.length < 6) return;

    console.log(OTP, value);
    History.push("/");
  };

  return (
    <div className="changePassword">
      <div className="changePassword-header">
        <div className="changePassword-header-left">
          <div className="changePassword-header-left-logo">
            <a href="/">Lemon</a>
          </div>
        </div>
        <div className="changePassword-header-right">
          <div className="changePassword-header-right-container">
            <div className="changePassword-header-right-container-logo">
              <img src={icon} alt="" />
            </div>
            <div className="changePassword-header-right-container-otp">
              <div className="changePassword-header-right-container-otp-title">
                <p className="changePassword-header-right-container-otp-title-sub1">
                  Xác thực OTP
                </p>
                <p className="changePassword-header-right-container-otp-title-sub2">
                  Chúng tôi đã gửi mã OTP đến
                  <b style={{ marginLeft: "5px" }}>
                    {state.emailForgotPassword ?? ""}
                  </b>
                </p>
              </div>
              <div className="changePassword-header-right-container-otp-input">
                <OtpInput
                  value={OTP}
                  onChange={handleChange}
                  numInputs={6}
                  inputStyle={{
                    width: "40px",
                    height: "30px",
                    marginRight: "10px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    borderRadius: 4,
                    border: "1px solid #7e33e0",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  }}
                />
              </div>
              <div className="changePassword-header-right-container-otp-resend">
                Không nhận được mã OPT? <span>GỬI LẠI</span>
              </div>
            </div>
            <div className="changePassword-header-right-container-form">
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <PasswordField
                  name="newpassword"
                  label="Mật khẩu mới"
                  form={form}
                />
                <PasswordField
                  name="retypenewpassword"
                  label="Nhập lại mật khẩu mới"
                  form={form}
                />
                <div className="changePassword-header-right-container-form-btn">
                  <button type="submit">Thay đổi mật khẩu</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="changePassword-footer">
        <div className="changePassword-footer-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google-plus-g"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
