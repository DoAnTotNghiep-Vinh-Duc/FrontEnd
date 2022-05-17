import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BlockCustomer from "../BlockCustomer/BlockCustomer";
import UnBlockCustomer from "../UnBlockCustomer/UnBlockCustomer";

Customer.propTypes = {
  customer: PropTypes.object,
};

function Customer({ customer }) {
  const history = useHistory();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [openBlockUser, setOpenBlockUser] = useState(false);
  const [openUnBlockUser, setOpenUnBlockUser] = useState(false);

  const handleClickBlockUser = () => {
    setOpenBlockUser(true);
  };
  const handleCloseBlockUser = () => {
    setOpenBlockUser(false);
  };

  const handleClickUnBlockUser = () => {
    setOpenUnBlockUser(true);
  };
  const handleCloseUnBlockUser = () => {
    setOpenUnBlockUser(false);
  };

  const handleClickViewDetail = () => {
    history.push(`${history.location.pathname}/${customer._id}`);
  };

  return (
    <>
      <div
        className={`${"admin-customers-content-body-container-body-customers-customer"} ${
          customer.status === "CLOSED" ? "block" : ""
        }`}
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
          <i className="bi bi-eye" onClick={handleClickViewDetail}></i>
          <i className="bi bi-lock" onClick={handleClickBlockUser}></i>
        </div>
        <div className="block-container">BỊ KHÓA</div>
        <div className="unblock" onClick={handleClickUnBlockUser}>
          Mở khóa
        </div>
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

      <Dialog
        fullScreen={fullScreen}
        open={openUnBlockUser}
        onClose={handleCloseUnBlockUser}
        aria-labelledby="responsive-dialog-title"
      >
        <UnBlockCustomer
          customerId={customer._id}
          closeUnBlockCustomer={handleCloseUnBlockUser}
        />
      </Dialog>
    </>
  );
}

export default Customer;
