import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import check from "../../assets/images/check.png";
import "./VerifyAccount.scss";

VerifyAccount.propTypes = {};
function VerifyAccount(props) {
  return (
    <div className="verifyAccount">
      <Header />
      <Menu />
      <div className="verifyAccount-body">
        <div className="verifyAccount-body-header">
          <span className="verifyAccount-body-header-title">
            Xác thực tài khoản
          </span>
        </div>
        <div className="verifyAccount-body-content">
          <div className="verifyAccount-body-content-image">
            <img src={check} alt="" />
          </div>
          <div className="verifyAccount-body-content-success">
            Bạn đã xác thực tài khoản thành công!
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VerifyAccount;
