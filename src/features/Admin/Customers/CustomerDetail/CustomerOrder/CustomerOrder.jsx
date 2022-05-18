import React from "react";
import PropTypes from "prop-types";
import a from "../../../../../assets/product/AiryWTS-black.jpg";
import { useHistory } from "react-router-dom";

CustomerOrder.propTypes = {
  order: PropTypes.object,
};

function CustomerOrder({ order }) {
  const history = useHistory();

  const handleClickViewDetail = () => {
    history.push(`/admin/orders/${order._id}`);
  };

  return (
    <div className="admin-customer-detail-list-order">
      <div className="admin-customer-detail-list-order-header">
        <div className="admin-customer-detail-list-order-header-id">
          <p>
            Mã hóa đơn: <b>{order._id}</b>
          </p>
        </div>
        <div className="admin-customer-detail-list-order-header-status">
          <div
            className={`${"admin-customer-detail-list-order-header-status-container"} ${
              order.status
            }`}
          >
            <p>
              {order.status === "DONE"
                ? "Đã hoàn tất"
                : order.status === "CANCELED"
                ? "Đã bị hủy"
                : order.status === "DELIVERING"
                ? "Đang vận chuyển"
                : order.status === "HANDLING"
                ? "Chờ xử lí"
                : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="admin-customer-detail-list-order-product">
        <div className="admin-customer-detail-list-order-product-image">
          <img src={a} alt="" />
        </div>
        <div className="admin-customer-detail-list-order-product-infor">
          <div className="admin-customer-detail-list-order-product-infor-name">
            áo thun nam tính đầu trâu
          </div>
          <div className="admin-customer-detail-list-order-product-infor-size">
            Màu: Trắng
          </div>
          <div className="admin-customer-detail-list-order-product-infor-size">
            Kích cỡ: M
          </div>
          <div className="admin-customer-detail-list-order-product-infor-name">
            x2
          </div>
        </div>
        <div className="admin-customer-detail-list-order-product-price">
          <span className="admin-customer-detail-list-order-product-price-main">
            198.000 đ
          </span>
          <span className="admin-customer-detail-list-order-product-price-sale">
            198.000 đ
          </span>
        </div>
      </div>
      <div className="admin-customer-detail-list-order-footer">
        <div className="admin-customer-detail-list-order-footer-btn">
          <button onClick={handleClickViewDetail}>Xem chi tiết</button>
        </div>
        <div className="admin-customer-detail-list-order-footer-total">
          <i className="bi bi-coin"></i>
          Tổng số tiền:{" "}
          <span>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(order.total)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CustomerOrder;
