import React from "react";
import "./Customers.scss";

Customers.propTypes = {};

function Customers(props) {
  return (
    <div className="admin-content-body-customers">
      <div className="admin-content-body-customers-header">Top khách hàng</div>
      <div className="admin-content-body-customers-body">
        <div className="admin-content-body-customers-body-header">
          <div className="admin-content-body-customers-body-header-customers">
            KHÁCH HÀNG
          </div>
          <div className="admin-content-body-customers-body-header-orders">
            SỐ HÓA ĐƠN
          </div>
          <div className="admin-content-body-customers-body-header-cash">
            DOANH THU
          </div>
        </div>
        <div className="admin-content-body-customers-body-customers">
          <div className="admin-content-body-customers-body-customers-customer">
            <div className="admin-content-body-customers-body-customers-customer-name">
              Đỗ Đạt Đức
            </div>
            <div className="admin-content-body-customers-body-customers-customer-orders">
              12
            </div>
            <div className="admin-content-body-customers-body-customers-customer-cash">
              6.785.000
            </div>
          </div>
          <div className="admin-content-body-customers-body-customers-customer">
            <div className="admin-content-body-customers-body-customers-customer-name">
              Lê Nguyễn Thành Vinh
            </div>
            <div className="admin-content-body-customers-body-customers-customer-orders">
              12
            </div>
            <div className="admin-content-body-customers-body-customers-customer-cash">
              6.785.000
            </div>
          </div>
          <div className="admin-content-body-customers-body-customers-customer">
            <div className="admin-content-body-customers-body-customers-customer-name">
              Đỗ Đạt Đức
            </div>
            <div className="admin-content-body-customers-body-customers-customer-orders">
              12
            </div>
            <div className="admin-content-body-customers-body-customers-customer-cash">
              6.785.000
            </div>
          </div>
          <div className="admin-content-body-customers-body-customers-customer">
            <div className="admin-content-body-customers-body-customers-customer-name">
              Đỗ Đạt Đức
            </div>
            <div className="admin-content-body-customers-body-customers-customer-orders">
              12
            </div>
            <div className="admin-content-body-customers-body-customers-customer-cash">
              6.785.000
            </div>
          </div>
          <div className="admin-content-body-customers-body-customers-customer">
            <div className="admin-content-body-customers-body-customers-customer-name">
              Đỗ Đạt Đức
            </div>
            <div className="admin-content-body-customers-body-customers-customer-orders">
              12
            </div>
            <div className="admin-content-body-customers-body-customers-customer-cash">
              6.785.000
            </div>
          </div>
        </div>
      </div>
      <div className="admin-content-body-customers-footer">pagination</div>
    </div>
  );
}

export default Customers;
