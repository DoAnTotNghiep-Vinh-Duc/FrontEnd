import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import icon from "../../assets/images/forgotpass.png";
import "./ForgotPassword.scss";
import userAPI from "../../api/userAPI";

toast.configure();
ForgotPassword.propTypes = {};

function ForgotPassword(props) {
  const History = useHistory();
  const reCaptcha = useRef();

  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [btnSend, setBtnSend] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClickSend = () => {
    if (!email) {
      setError("Chưa nhập email!");
    }

    if (!token) {
      setError("Chưa xác thực captcha!");
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("");
      (async () => {
        try {
          const response = await userAPI.forgotPassword({ email });
          if (response.status === 200) {
            toast.info("Đã gửi email cho bạn!", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: false,
              theme: "dark",
            });
          }
          History.push("/auth");
        } catch (error) {
          console.log(error);
          toast.error(error, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: false,
            theme: "dark",
          });
        }
      })();
    } else {
      setError("Email không hợp lệ!");
    }
  };

  useEffect(() => {
    if (!email || !token) {
      setBtnSend(false);
    } else {
      setBtnSend(true);
    }
  }, [email, token]);

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
                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  placeholder="EMAIL CỦA BẠN"
                  onChange={handleChangeEmail}
                />
              </div>
            </div>
            <div className="forgotpassword-recaptcha">
              <ReCAPTCHA
                ref={reCaptcha}
                sitekey={"6Leq9tcfAAAAAOXGY1PngSBAoQzdtk194DhWzp7A"}
                onChange={(token) => setToken(token)}
                onExpired={(e) => setToken("")}
              />
            </div>
            <div className="forgotpassword-error">
              <span>{error}</span>
            </div>
            <div className="forgotpassword-container-footer">
              <button
                className={`${"forgotpassword-container-footer-btnSend"} ${
                  btnSend ? "" : "notSend"
                }`}
                disabled={btnSend ? false : true}
                onClick={handleClickSend}
              >
                GỬI
              </button>
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
