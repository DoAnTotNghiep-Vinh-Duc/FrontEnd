import React, { useState } from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BlockCustomer from "../BlockCustomer/BlockCustomer";

Customer.propTypes = {
  customer: PropTypes.object,
};

function Customer({ customer }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [openBlockUser, setOpenBlockUser] = useState(false);

  const handleClickBlockUser = () => {
    setOpenBlockUser(true);
  };
  const handleCloseBlockUser = () => {
    setOpenBlockUser(false);
  };

  return (
    <>
      <div
        className={`${"admin-customers-content-body-container-body-customers-customer"} ${""}`}
      >
        <div className="admin-customers-content-body-container-body-customers-customer-seri">
          #
          {customer._id.substring(customer._id.length - 5, customer._id.length)}
        </div>
        <div className="admin-customers-content-body-container-body-customers-customer-customer">
          {customer.information.name === ""
            ? customer.nameDisplay
            : customer.information.name}
        </div>
        <div className="admin-customers-content-body-container-body-customers-customer-phone">
          {customer.isVerifyPhone
            ? customer.information.phone
            : "Chưa xác thực"}
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
          <i className="bi bi-lock" onClick={handleClickBlockUser}></i>
        </div>
        <div className="block-container">BỊ KHÓA</div>
        <div className="unblock">Mở khóa</div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={openBlockUser}
        onClose={handleCloseBlockUser}
        aria-labelledby="responsive-dialog-title"
      >
        <BlockCustomer
          customerId={customer._id}
          closeBlockCustomer={handleCloseBlockUser}
        />
      </Dialog>
    </>
  );
}

export default Customer;
