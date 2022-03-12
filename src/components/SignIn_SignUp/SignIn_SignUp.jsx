import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../../features/SignIn/SignIn";
import SignUp from "../../features/SignUp/SignUp";
import Header from "../component/Header/Header";
import "./SignIn_SignUp.scss";

SignIn_SignUp.propTypes = {};

function SignIn_SignUp(props) {
  const [open, setOpen] = useState(false);

  const openSignInHandler = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <div className="background-signin-signup">
        <Header />
        <div className="container-signin-signup">
          <Link to="/" className="signin-signup-logo">
            Lemon
          </Link>
          <div
            className={`${"frame-signin-signup"} ${
              open ? "right-panel-active" : ""
            }`}
            id="container"
          >
            <div className="form-container sign-up-container">
              <SignUp />
            </div>
            <div className="form-container sign-in-container">
              <SignIn />
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="signup-title">Chào mừng bạn!</h1>
                  <p className="signup-content">
                    Để tiếp tục mua sắm cùng chúng tôi, vui lòng đăng nhập tài
                    khoản cá nhân!
                  </p>
                  <button
                    className="btn-signin ghost"
                    id="signIn"
                    onClick={openSignInHandler}
                  >
                    Đăng nhập
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="signin-title">Xin chào!</h1>
                  <p className="signin-content">
                    Đăng kí tài khoản cá nhân để bắt đầu mua sắm cùng chúng tôi
                    nhé!
                  </p>
                  <button
                    className="btn-signin ghost"
                    id="signUp"
                    onClick={openSignInHandler}
                  >
                    Đăng kí
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blur"></div>
    </Fragment>
  );
}

export default SignIn_SignUp;
