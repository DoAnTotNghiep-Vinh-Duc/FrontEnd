import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { useHistory } from "react-router-dom";

Order.propTypes = {
  order: PropTypes.object,
};

function Order({ order }) {
  const history = useHistory();

  const handleClickViewDetail = () => {
    history.push(`${history.location.pathname}/${order._id}`);
  };

  return (
    <div className="admin-orders-content-body-container-body-orders-order">
      <div className="admin-orders-content-body-container-body-orders-order-seri">
        #{order._id.substring(order._id.length - 5, order._id.length)}
      </div>
      <div className="admin-orders-content-body-container-body-orders-order-customer">
        {order.name}
      </div>
      <div className="admin-orders-content-body-container-body-orders-order-cash">
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(order.total)}
      </div>
      <div className="admin-orders-content-body-container-body-orders-order-date">
        {moment(order.createdAt).format("L")}
      </div>
      <div className="admin-orders-content-body-container-body-orders-order-status">
        <div
          className={`${"admin-orders-content-body-container-body-orders-order-status-container"} ${
            order.status
          }`}
        >
          {order.status === "DONE"
            ? "Đã hoàn tất"
            : order.status === "CANCELED"
            ? "Đã bị hủy"
            : order.status === "DELIVERING"
            ? "Đang vận chuyển"
            : order.status === "HANDLING"
            ? "Chờ xử lí"
            : ""}
        </div>
      </div>
      <div className="admin-orders-content-body-container-body-orders-order-action">
        <i className="bi bi-eye" onClick={handleClickViewDetail}></i>
      </div>
    </div>
  );
}

export default Order;
