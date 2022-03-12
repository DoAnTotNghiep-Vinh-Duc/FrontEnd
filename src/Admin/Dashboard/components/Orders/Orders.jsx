import React from "react";
import "./Orders.scss";

Orders.propTypes = {};

function Orders(props) {
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
            <div className="admin-content-body-lastOrder-container-body-orders-order">
              <div className="admin-content-body-lastOrder-container-body-orders-order-seri">
                #16512
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-status">
                <div
                  className={`${"admin-content-body-lastOrder-container-body-orders-order-status-container"} ${"waiting"}`}
                >
                  Chờ xử lý
                </div>
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-customer">
                Lê Nguyễn Thành Vinh
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-date">
                12/03/2022
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-cash">
                450.000
              </div>
            </div>
            <div className="admin-content-body-lastOrder-container-body-orders-order">
              <div className="admin-content-body-lastOrder-container-body-orders-order-seri">
                #16512
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-status">
                <div
                  className={`${"admin-content-body-lastOrder-container-body-orders-order-status-container"} ${"cancel"}`}
                >
                  Đã bị hủy
                </div>
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-customer">
                Đỗ Đạt Đức
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-date">
                12/03/2022
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-cash">
                450.000
              </div>
            </div>
            <div className="admin-content-body-lastOrder-container-body-orders-order">
              <div className="admin-content-body-lastOrder-container-body-orders-order-seri">
                #16512
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-status">
                <div
                  className={`${"admin-content-body-lastOrder-container-body-orders-order-status-container"} ${"shipping"}`}
                >
                  Đang vận chuyển
                </div>
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-customer">
                Lê Võ Hửu Thái
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-date">
                12/03/2022
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-cash">
                450.000
              </div>
            </div>
            <div className="admin-content-body-lastOrder-container-body-orders-order">
              <div className="admin-content-body-lastOrder-container-body-orders-order-seri">
                #16512
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-status">
                <div
                  className={`${"admin-content-body-lastOrder-container-body-orders-order-status-container"} ${"waiting"}`}
                >
                  Chờ xử lý
                </div>
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-customer">
                Trần Ngọc Hiển
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-date">
                12/03/2022
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-cash">
                450.000
              </div>
            </div>
            <div className="admin-content-body-lastOrder-container-body-orders-order">
              <div className="admin-content-body-lastOrder-container-body-orders-order-seri">
                #16512
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-status">
                <div
                  className={`${"admin-content-body-lastOrder-container-body-orders-order-status-container"} ${"done"}`}
                >
                  Hoàn tất
                </div>
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-customer">
                Hồ Dương Vũ
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-date">
                12/03/2022
              </div>
              <div className="admin-content-body-lastOrder-container-body-orders-order-cash">
                450.000
              </div>
            </div>
          </div>
        </div>
        <div className="admin-content-body-lastOrder-container-footer">
          pagination
        </div>
      </div>
    </div>
  );
}

export default Orders;
