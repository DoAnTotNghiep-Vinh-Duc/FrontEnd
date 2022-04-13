import React from "react";
import check from "../../assets/images/check.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./SuccessVerify.scss";

SuccessVerify.propTypes = {};
function SuccessVerify(props) {
  return (
    <div className="SuccessVerify">
      <Header />
      <Menu />
      <div className="SuccessVerify-body">
        <div className="SuccessVerify-body-header">
          <span className="SuccessVerify-body-header-title">
            Xác thực tài khoản
          </span>
        </div>
        <div className="SuccessVerify-body-content">
          <div className="SuccessVerify-body-content-image">
            <img src={check} alt="" />
          </div>
          <div className="SuccessVerify-body-content-success">
            Bạn đã xác thực tài khoản thành công!
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SuccessVerify;
