import PropTypes from "prop-types";
import React from "react";

Shipper.propTypes = {
  shipper: PropTypes.object,
};

function Shipper({ shipper }) {
  return (
    <div className="admin-shipper-content-body-container-body-shippers-item">
      <div className="admin-shipper-content-body-container-body-shippers-item-avatar">
        <img src={shipper.information.avatar} alt="" />
      </div>
      <div className="admin-shipper-content-body-container-body-shippers-item-name">
        {shipper.nameDisplay}
      </div>
      <div className="admin-shipper-content-body-container-body-shippers-item-email">
        {shipper.email}
      </div>
      <div className="admin-shipper-content-body-container-body-shippers-item-phone">
        {shipper.information.phone}
      </div>
      <div className="admin-shipper-content-body-container-body-shippers-item-number">
        {shipper.orderQuantity}
      </div>
      <div className="admin-shipper-content-body-container-body-shippers-item-address">
        {shipper.information.street} {shipper.information.ward}{" "}
        {shipper.information.district} {shipper.information.city}
      </div>
      <div className="admin-shipper-content-body-container-body-shippers-item-action">
        <i className="bi bi-eye"></i>
      </div>
    </div>
  );
}

export default Shipper;
