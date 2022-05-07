import React from "react";
import PropTypes from "prop-types";

Customer.propTypes = {
  customer: PropTypes.object,
};

function Customer({ customer }) {
  return (
    <div className="admin-customers-content-body-container-body-customers-customer">
      <div className="admin-customers-content-body-container-body-customers-customer-seri">
        #{customer._id.substring(customer._id.length - 5, customer._id.length)}
      </div>
      <div className="admin-customers-content-body-container-body-customers-customer-customer">
        {customer.information.name === ""
          ? customer.nameDisplay
          : customer.information.name}
      </div>
      <div className="admin-customers-content-body-container-body-customers-customer-phone">
        {customer.isVerifyPhone ? customer.information.phone : "Chưa xác thực"}
      </div>
      <div className="admin-customers-content-body-container-body-customers-customer-quantityOrder">
        {customer.orderQuantity}
      </div>
      <div className="admin-customers-content-body-container-body-customers-customer-address">
        {customer.information.street === "" &&
        customer.information.ward === "" &&
        customer.information.district === "" &&
        customer.information.city === "" ? (
          "Chưa cập nhập"
        ) : (
          <>
            {customer.information.street}, {customer.information.ward},{" "}
            {customer.information.district}, {customer.information.city}
          </>
        )}
      </div>
      <div className="admin-customers-content-body-container-body-customers-customer-action">
        <i className="bi bi-eye"></i>
      </div>
    </div>
  );
}

export default Customer;
