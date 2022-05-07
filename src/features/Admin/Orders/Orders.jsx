import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import adminAPI from "../../../api/adminAPI";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import Order from "./Order/Order";
import "./Orders.scss";

Orders.propTypes = {};

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
  });

  const handlePaginationChange = (event, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

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

  return (
    <div className="admin-orders">
      <NavBars />
      <div className="admin-orders-content">
        <Header />
        <div className="admin-orders-content-body">
          <div className="admin-orders-content-body-container">
            <div className="admin-orders-content-body-container-header">
              <div className="admin-orders-content-body-container-header-title">
                Danh sách hóa đơn
              </div>
              <div className="admin-orders-content-body-container-header-search">
                <div className="admin-orders-content-body-container-header-search-container">
                  <input type="text" placeholder="Tìm kiếm..." name="" id="" />
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
            <div className="admin-orders-content-body-container-body">
              <div className="admin-orders-content-body-container-body-header">
                <div className="admin-orders-content-body-container-body-header-seri">
                  MÃ HÓA ĐƠN
                </div>
                <div className="admin-orders-content-body-container-body-header-customer">
                  KHÁCH HÀNG
                </div>
                <div className="admin-orders-content-body-container-body-header-cash">
                  TỔNG TIỀN
                </div>
                <div className="admin-orders-content-body-container-body-header-date">
                  NGÀY ĐẶT HÀNG
                </div>
                <div className="admin-orders-content-body-container-body-header-status">
                  TÌNH TRẠNG
                </div>
                <div className="admin-orders-content-body-container-body-header-action"></div>
              </div>
              <div className="admin-orders-content-body-container-body-orders">
                {orders.map((order) => {
                  return <Order key={order._id} order={order} />;
                })}
              </div>
            </div>
            <div className="admin-orders-content-body-container-footer">
              <Pagination
                color="primary"
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination.page}
                onChange={handlePaginationChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
