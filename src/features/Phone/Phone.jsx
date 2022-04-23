import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Phone.scss";

Phone.propTypes = {};

function Phone(props) {
  const location = useLocation();
  return (
    <div className="phone">
      <div className="phone-header">
        <div className="phone-left">
          <div className="phone-left-logo">
            <a href="/">Lemon</a>
          </div>
        </div>
        <div className="phone-right">
          <div className="phone-container">
            <div className="phone-container-header">
              <div className="phone-container-header-image">
                <img
                  src="https://thumbs.dreamstime.com/b/otp-one-time-password-secure-transaction-digital-payment-mobile-app-smartphone-screen-step-verification-vector-illustration-244515551.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="phone-container-body">
              <div className="phone-container-body-title">
                XÁC THỰC SỐ ĐIỆN THỌAI
              </div>
              <div className="phone-container-body-text">
                Để có thể đặt hàng, vui lòng hãy nhập số điện thoại của bạn vào
                bên dưới và chúng tôi sẽ gửi cho bạn một mã OTP để giúp bạn xác
                thực số điện thoại.
              </div>
              <div className="phone-container-body-input">
                <input type="email" name="" id="" placeholder="SỐ ĐIỆN THOẠI" />
              </div>
            </div>
            <div className="phone-container-footer">
              <Link
                className="phone-container-footer-btnSend"
                to={`${location.pathname}/verifyPhone`}
              >
                GỬI
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="phone-footer">
        <div className="phone-footer-icons">
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

export default Phone;
