import React from "react";
import PropTypes from "prop-types";
import "./Support.scss";

Support.propTypes = {};

function Support(props) {
  return (
    <div className="home-support">
      <div className="home-support-shipping">
        <div className="home-support-shipping-icon">
          <i className="bi bi-truck"></i>
        </div>
        <div className="home-support-shipping-content">
          <p className="home-support-shipping-content-title">
            MIỄN PHÍ GIAO HÀNG
          </p>
          <p className="home-support-shipping-content-context">
            Hóa đơn trên 999.000 VNĐ
          </p>
        </div>
      </div>
      <div className="home-support-call">
        <div className="home-support-call-icon">
          <i className="bi bi-headset"></i>
        </div>
        <div className="home-support-call-content">
          <p className="home-support-call-content-title">HỖ TRỢ 24/7</p>
          <p className="home-support-call-content-context">
            Giúp đỡ khi khách hàng cần
          </p>
        </div>
      </div>
      <div className="home-support-return">
        <div className="home-support-return-icon">
          <i className="bi bi-bootstrap-reboot"></i>
        </div>
        <div className="home-support-return-content">
          <p className="home-support-return-content-title">HOÀN TRẢ 100%</p>
          <p className="home-support-return-content-context">
            Trong vòng 30 ngày
          </p>
        </div>
      </div>
    </div>
  );
}

export default Support;
