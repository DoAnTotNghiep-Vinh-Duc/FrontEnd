import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import userAPI from "../../api/userAPI";
import "./Phone.scss";

Phone.propTypes = {};

function Phone(props) {
  const location = useLocation();
  const History = useHistory();

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);

  const HandlePhone = (event) => {
    const regex = /^(0)[0-9]{9}$/;
    if (regex.test(event.target.value)) {
      setPhone(event.target.value);
      setError("");
      setActiveBtn(true);
    } else if (event.target.value === "") {
      setError("Không được rỗng");
      setActiveBtn(false);
    } else {
      setError(
        "Số điện thoại phải bắt đầu bằng 0 và bao gồm 9 chữ số phía sau!"
      );
      setActiveBtn(false);
    }
  };

  const handleButtonSend = () => {
    if (activeBtn) {
      (async () => {
        try {
          const response = await userAPI.sendOTP({
            phone: phone,
          });
          if (response.status === 200) {
            props.onSendPhoneToPage(phone);
            History.push(`${location.pathname}/verifyPhone`);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

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
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="SỐ ĐIỆN THOẠI"
                  onChange={HandlePhone}
                />
              </div>
              <span className="error-verifyPhone">{error}</span>
            </div>
            <div className="phone-container-footer">
              <button
                className={`${"phone-container-footer-btnSend"} ${
                  activeBtn ? "" : "active"
                }`}
                onClick={handleButtonSend}
              >
                GỬI
              </button>
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
