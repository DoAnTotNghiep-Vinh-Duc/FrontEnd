import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./VerifyPhone.scss";

VerifyPhone.propTypes = {};

function VerifyPhone(props) {
  const [OTP, setOTP] = useState("");

  const handleChange = (value) => {
    setOTP(value);
  };
  return (
    <div className="verifyPhone">
      <div className="verifyPhone-header">
        <div className="verifyPhone-header-left">
          <div className="verifyPhone-header-left-logo">
            <a href="/">Lemon</a>
          </div>
        </div>
        <div className="verifyPhone-header-right">
          <div className="verifyPhone-header-right-container">
            <div className="verifyPhone-header-right-container-logo">
              <img src="https://office24by7.com/assets/img/Email.png" alt="" />
            </div>
            <div className="verifyPhone-header-right-container-otp">
              <div className="verifyPhone-header-right-container-otp-title">
                <p className="verifyPhone-header-right-container-otp-title-sub1">
                  Xác thực OTP
                </p>
                <p className="verifyPhone-header-right-container-otp-title-sub2">
                  Chúng tôi đã gửi mã OTP đến
                  <b style={{ marginLeft: "5px" }}>0359806602</b>
                </p>
              </div>
              <div className="verifyPhone-header-right-container-otp-input">
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
              <div className="verifyPhone-header-right-container-otp-resend">
                Không nhận được mã OPT? <span>GỬI LẠI</span>
              </div>
            </div>
            <div className="verifyPhone-header-right-button">
              <button>XÁC THỰC</button>
            </div>
          </div>
        </div>
      </div>
      <div className="verifyPhone-footer">
        <div className="verifyPhone-footer-icons">
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

export default VerifyPhone;
