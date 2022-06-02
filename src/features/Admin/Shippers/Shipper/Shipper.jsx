import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

Shipper.propTypes = {
  shipper: PropTypes.object,
};

function Shipper({ shipper }) {
  const history = useHistory();

  const handleViewDetail = () => {
    history.push(`${history.location.pathname}/${shipper._id}`);
  };

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
        <i className="bi bi-eye" onClick={handleViewDetail}></i>
      </div>
    </div>
  );
}

export default Shipper;
