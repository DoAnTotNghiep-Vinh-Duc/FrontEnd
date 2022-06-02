import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

ShipperOrder.propTypes = {
  order: PropTypes.object,
};

function ShipperOrder({ order }) {
  const history = useHistory();

  const handleClickViewDetail = () => {
    history.push(`/admin/orders/${order._id}`);
  };
  return (
    <div className="admin-shipper-detail-list-order">
      <div className="admin-shipper-detail-list-order-header">
        <div className="admin-shipper-detail-list-order-header-id">
          <p>
            Mã hóa đơn: <b>{order._id}</b>
          </p>
        </div>
        <div className="admin-shipper-detail-list-order-header-status">
          <div
            className={`${"admin-shipper-detail-list-order-header-status-container"} ${
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
      {order.listOrderDetail.map((product, index) => {
        return (
          <div className="admin-shipper-detail-list-order-product" key={index}>
            <div className="admin-shipper-detail-list-order-product-image">
              <img src={product.productDetail.image} alt="" />
            </div>
            <div className="admin-shipper-detail-list-order-product-infor">
              <div className="admin-shipper-detail-list-order-product-infor-name">
                {product.productDetail.product.name}
              </div>
              <div className="admin-shipper-detail-list-order-product-infor-size">
                Màu: {product.productDetail.color.name}
              </div>
              <div className="admin-shipper-detail-list-order-product-infor-size">
                Kích cỡ: {product.productDetail.size}
              </div>
              <div className="admin-shipper-detail-list-order-product-infor-name">
                x{product.quantity}
              </div>
            </div>
            <div className="admin-shipper-detail-list-order-product-price">
              {product.price === product.productDetail.product.price ? (
                <>
                  <span className="admin-shipper-detail-list-order-product-price-main-nosale">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.productDetail.product.price)}
                  </span>
                </>
              ) : (
                <>
                  <span className="admin-shipper-detail-list-order-product-price-main">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.productDetail.product.price)}
                  </span>
                  <span className="admin-shipper-detail-list-order-product-price-sale">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price)}
                  </span>
                </>
              )}
            </div>
          </div>
        );
      })}

      <div className="admin-shipper-detail-list-order-footer">
        <div className="admin-shipper-detail-list-order-footer-btn">
          <button onClick={handleClickViewDetail}>Xem chi tiết</button>
        </div>
        <div className="admin-shipper-detail-list-order-footer-total">
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

export default ShipperOrder;
