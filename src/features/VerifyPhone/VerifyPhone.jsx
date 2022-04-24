import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import userAPI from "../../api/userAPI";
import "./VerifyPhone.scss";

toast.configure();
VerifyPhone.propTypes = {
  phoneReceive: PropTypes.string,
};

function VerifyPhone({ phoneReceive }) {
  const History = useHistory();

  const [OTP, setOTP] = useState("");
  const [phone, setPhone] = useState(phoneReceive);

  useEffect(() => {
    setPhone(phoneReceive);
  }, [phoneReceive]);

  const handleChange = (value) => {
    setOTP(value);
  };

  const handleVerifyOTP = () => {
    (async () => {
      try {
        const response = await userAPI.verifyOTP({
          phone: phone,
          otp: OTP,
        });
        if (response.status === 201) {
          toast.success("Xác thực thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          History.push("/userInformation");
        }
      } catch (error) {
        console.log(error);
      }
    })();
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
                  <b style={{ marginLeft: "5px" }}>{phone}</b>
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
              <button onClick={handleVerifyOTP}>XÁC THỰC</button>
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
