import React from "react";
import PropTypes from "prop-types";
import NavBars from "../components/NavBars/NavBars";
import Header from "../components/Header/Header";
import "./Orders.scss";

Orders.propTypes = {};

function Orders(props) {
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
                <div className="admin-orders-content-body-container-body-orders-order">
                  <div className="admin-orders-content-body-container-body-orders-order-seri">
                    #32641
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-cash">
                    1.350.000
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-date">
                    14/03/2022
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-status">
                    <div
                      className={`${"admin-orders-content-body-container-body-orders-order-status-container"} ${"waiting"}`}
                    >
                      Chờ xử lí
                    </div>
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-orders-order">
                  <div className="admin-orders-content-body-container-body-orders-order-seri">
                    #32641
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-cash">
                    1.350.000
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-date">
                    14/03/2022
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-status">
                    <div
                      className={`${"admin-orders-content-body-container-body-orders-order-status-container"} ${"shipping"}`}
                    >
                      Đang vận chuyển
                    </div>
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-orders-order">
                  <div className="admin-orders-content-body-container-body-orders-order-seri">
                    #32641
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-cash">
                    1.350.000
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-date">
                    14/03/2022
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-status">
                    <div
                      className={`${"admin-orders-content-body-container-body-orders-order-status-container"} ${"shipping"}`}
                    >
                      Đang vận chuyển
                    </div>
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-orders-order">
                  <div className="admin-orders-content-body-container-body-orders-order-seri">
                    #32641
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-cash">
                    1.350.000
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-date">
                    14/03/2022
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-status">
                    <div
                      className={`${"admin-orders-content-body-container-body-orders-order-status-container"} ${"done"}`}
                    >
                      Hoàn tất
                    </div>
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-orders-order">
                  <div className="admin-orders-content-body-container-body-orders-order-seri">
                    #32641
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-cash">
                    1.350.000
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-date">
                    14/03/2022
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-status">
                    <div
                      className={`${"admin-orders-content-body-container-body-orders-order-status-container"} ${"cancel"}`}
                    >
                      Đã bị hủy
                    </div>
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-orders-order">
                  <div className="admin-orders-content-body-container-body-orders-order-seri">
                    #32641
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-cash">
                    1.350.000
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-date">
                    14/03/2022
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-status">
                    <div
                      className={`${"admin-orders-content-body-container-body-orders-order-status-container"} ${"shipping"}`}
                    >
                      Đang vận chuyển
                    </div>
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-orders-order">
                  <div className="admin-orders-content-body-container-body-orders-order-seri">
                    #32641
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-cash">
                    1.350.000
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-date">
                    14/03/2022
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-status">
                    <div
                      className={`${"admin-orders-content-body-container-body-orders-order-status-container"} ${"waiting"}`}
                    >
                      Chờ xử lí
                    </div>
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-orders-order">
                  <div className="admin-orders-content-body-container-body-orders-order-seri">
                    #32641
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-cash">
                    1.350.000
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-date">
                    14/03/2022
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-status">
                    <div
                      className={`${"admin-orders-content-body-container-body-orders-order-status-container"} ${"shipping"}`}
                    >
                      Đang vận chuyển
                    </div>
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-orders-order">
                  <div className="admin-orders-content-body-container-body-orders-order-seri">
                    #32641
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-cash">
                    1.350.000
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-date">
                    14/03/2022
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-status">
                    <div
                      className={`${"admin-orders-content-body-container-body-orders-order-status-container"} ${"shipping"}`}
                    >
                      Đang vận chuyển
                    </div>
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-orders-order">
                  <div className="admin-orders-content-body-container-body-orders-order-seri">
                    #32641
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-cash">
                    1.350.000
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-date">
                    14/03/2022
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-status">
                    <div
                      className={`${"admin-orders-content-body-container-body-orders-order-status-container"} ${"shipping"}`}
                    >
                      Đang vận chuyển
                    </div>
                  </div>
                  <div className="admin-orders-content-body-container-body-orders-order-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="admin-orders-content-body-container-footer">
              pagination
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
