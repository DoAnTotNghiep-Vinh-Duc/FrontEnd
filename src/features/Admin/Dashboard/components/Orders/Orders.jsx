import Pagination from "@material-ui/lab/Pagination";
import moment from "moment";
import React, { useEffect, useState } from "react";
import adminAPI from "../../../../../api/adminAPI";
import "./Orders.scss";

Orders.propTypes = {};

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 5,
  });
  const [pagination, setPagination] = useState({
    limit: 5,
    page: 1,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getAllOrder({
          _page: filters._page,
          _limit: filters._limit,
        });
        setOrders(response.data);
        setPagination(response.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filters]);

  const handlePaginationChange = (event, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  return (
    <div className="admin-content-body-lastOrder">
      <div className="admin-content-body-lastOrder-container">
        <div className="admin-content-body-lastOrder-container-header">
          <div className="admin-content-body-lastOrder-container-header-title">
            Đơn hàng gần nhất
          </div>
          <div className="admin-content-body-lastOrder-container-header-search">
            <div className="admin-content-body-lastOrder-container-header-search-container">
              <input type="text" name="" id="" placeholder="Tìm kiếm..." />
              <i className="bi bi-search"></i>
            </div>
          </div>
        </div>
        <div className="admin-content-body-lastOrder-container-body">
          <div className="admin-content-body-lastOrder-container-body-header">
            <div className="admin-content-body-lastOrder-container-body-header-seri">
              MÃ HÓA ĐƠN
            </div>
            <div className="admin-content-body-lastOrder-container-body-header-status">
              TRẠNG THÁI
            </div>
            <div className="admin-content-body-lastOrder-container-body-header-customer">
              KHÁCH HÀNG
            </div>
            <div className="admin-content-body-lastOrder-container-body-header-date">
              NGÀY ĐẶT HÀNG
            </div>
            <div className="admin-content-body-lastOrder-container-body-header-cash">
              SỐ TIỀN
            </div>
          </div>
          <div className="admin-content-body-lastOrder-container-body-orders">
            {orders.map((order) => {
              return (
                <div
                  className="admin-content-body-lastOrder-container-body-orders-order"
                  key={order._id}
                >
                  <div className="admin-content-body-lastOrder-container-body-orders-order-seri">
                    #
                    {order._id.substring(
                      order._id.length - 5,
                      order._id.length
                    )}
                  </div>
                  <div className="admin-content-body-lastOrder-container-body-orders-order-status">
                    <div
                      className={`${"admin-content-body-lastOrder-container-body-orders-order-status-container"} ${
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
                        : order.status === "WAITING"
                        ? "Chờ nhận hàng"
                        : ""}
                    </div>
                  </div>
                  <div className="admin-content-body-lastOrder-container-body-orders-order-customer">
                    {order.account.information.name === ""
                      ? order.account.nameDisplay
                      : order.account.information.name}
                  </div>
                  <div className="admin-content-body-lastOrder-container-body-orders-order-date">
                    {moment(order.createdAt).format("L")}
                  </div>
                  <div className="admin-content-body-lastOrder-container-body-orders-order-cash">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(order.total)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="admin-content-body-lastOrder-container-footer">
          <Pagination
            color="primary"
            count={Math.ceil(pagination.total / pagination.limit)}
            page={pagination.page}
            onChange={handlePaginationChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Orders;
