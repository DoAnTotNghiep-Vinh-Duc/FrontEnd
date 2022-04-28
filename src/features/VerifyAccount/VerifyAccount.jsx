import React from "react";
import { useHistory } from "react-router-dom";
import "./VerifyAccount.scss";

VerifyAccount.propTypes = {};

function VerifyAccount({ email }) {
  const History = useHistory();

  const handleClickSignin = () => {
    History.push("/auth");
  };
  return (
    <div className="verify">
      <div className="verify-container">
        <div className="verify-logo">
          <a href="/">Lemon</a>
        </div>
        <div className="verify-content">
          <div className="verify-icon">
            <span>
              <i className="bi bi-envelope"></i>
            </span>
          </div>
          <div className="verify-title">Xác thực tài khoản</div>
          <div className="verify-text">
            Một yêu cầu xác thực email đã được gửi đến <br />
            <b> {email}</b>
          </div>
          <div className="verify-text">
            Vui lòng kiểm tra email và xác nhận tài khoản của bạn bằng cách nhấn
            vào nút <b>"Xác thực tài khoản"</b>
          </div>
          <div className="verify-text">
            Nếu không nhận được email xác thực, vui lòng kiểm tra hộp thư spam
            hoặc nhấn vào nút bên dưới để gửi lại email xác thực tài khoản của
            bạn. <br /> Nếu bạn tiếp tục gặp vấn đề, vui lòng gửi
            <a href="mailto:thanhvinhplayground@gmail.com">
              <b>
                <i style={{ color: "dodgerblue" }}> email hỗ trợ</i>
              </b>
            </a>
            .
          </div>
          <div className="verify-button">
            <button className="verify-button-resend">GỬI LẠI EMAIL</button>
            <button
              className="verify-button-signin"
              onClick={handleClickSignin}
            >
              ĐĂNG NHẬP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyAccount;
