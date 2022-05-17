import React from "react";
import PropTypes from "prop-types";
import NavBars from "../../components/NavBars/NavBars";
import Header from "../../components/Header/Header";

CustomerDetail.propTypes = {};

function CustomerDetail(props) {
  return (
    <div className="customer-detail">
      <NavBars />
      <div className="admin-customers-content">
        <Header />
      </div>
    </div>
  );
}

export default CustomerDetail;
