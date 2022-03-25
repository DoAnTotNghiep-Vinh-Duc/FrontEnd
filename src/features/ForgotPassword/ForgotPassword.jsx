import React from "react";
import { Link, useLocation } from "react-router-dom";
import icon from "../../assets/images/forgotpass.png";
import "./ForgotPassword.scss";

ForgotPassword.propTypes = {};

function ForgotPassword(props) {
  const location = useLocation();

  return (
    <div className="forgotpassword">
      <div className="forgotpassword-header">
        <div className="forgotpassword-left">
          <div className="forgotpassword-left-logo">
            <a href="/">Lemon</a>
          </div>
        </div>
        <div className="forgotpassword-right">
          <div className="forgotpassword-container">
            <div className="forgotpassword-container-header">
              <div className="forgotpassword-container-header-image">
                <img src={icon} alt="" />
              </div>
            </div>
            <div className="forgotpassword-container-body">
              <div className="forgotpassword-container-body-title">
                QUÊN MẬT KHẨU?
              </div>
              <div className="forgotpassword-container-body-text">
                Đừng lo lắng! Hãy nhập email của bạn vào bên dưới và chúng tôi
                sẽ gửi cho bạn một mã OTP để giúp bạn lấy lại mật khẩu.
              </div>
              <div className="forgotpassword-container-body-input">
                <input type="email" name="" id="" placeholder="EMAIL CỦA BẠN" />
              </div>
            </div>
            <div className="forgotpassword-container-footer">
              <Link
                className="forgotpassword-container-footer-btnSend"
                to={`${location.pathname}/changePassword`}
              >
                GỬI
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="forgotpassword-footer">
        <div className="forgotpassword-footer-icons">
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

export default ForgotPassword;
