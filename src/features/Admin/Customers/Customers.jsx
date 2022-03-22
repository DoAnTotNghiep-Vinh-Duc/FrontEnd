import React from "react";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import "./Customers.scss";

Customers.propTypes = {};

function Customers(props) {
  return (
    <div className="admin-customers">
      <NavBars />
      <div className="admin-customers-content">
        <Header />
        <div className="admin-customers-content-body">
          <div className="admin-customers-content-body-container">
            <div className="admin-customers-content-body-container-header">
              <div className="admin-customers-content-body-container-header-title">
                Danh sách khách hàng
              </div>
              <div className="admin-customers-content-body-container-header-search">
                <div className="admin-customers-content-body-container-header-search-container">
                  <input type="text" placeholder="Tìm kiếm..." name="" id="" />
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
            <div className="admin-customers-content-body-container-body">
              <div className="admin-customers-content-body-container-body-header">
                <div className="admin-customers-content-body-container-body-header-seri">
                  MÃ KHÁCH HÀNG
                </div>
                <div className="admin-customers-content-body-container-body-header-customer">
                  TÊN KHÁCH HÀNG
                </div>
                <div className="admin-customers-content-body-container-body-header-phone">
                  SỐ ĐIỆN THOẠI
                </div>
                <div className="admin-customers-content-body-container-body-header-quantityOrder">
                  SỐ LẦN MUA
                </div>
                <div className="admin-customers-content-body-container-body-header-address">
                  ĐỊA CHỈ
                </div>
                <div className="admin-customers-content-body-container-body-header-action"></div>
              </div>
              <div className="admin-customers-content-body-container-body-customers">
                <div className="admin-customers-content-body-container-body-customers-customer">
                  <div className="admin-customers-content-body-container-body-customers-customer-seri">
                    #32641
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-phone">
                    0359806602
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-quantityOrder">
                    15
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-address">
                    Số nhà 25, Khu phố 3A, Phường Thới Hòa, Thị Xã Bến Cát, Tỉnh
                    Bình Dương
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-customers-content-body-container-body-customers-customer">
                  <div className="admin-customers-content-body-container-body-customers-customer-seri">
                    #32641
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-phone">
                    0359806602
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-quantityOrder">
                    15
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-address">
                    Số nhà 25, Khu phố 3A, Phường Thới Hòa, Thị Xã Bến Cát, Tỉnh
                    Bình Dương
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-customers-content-body-container-body-customers-customer">
                  <div className="admin-customers-content-body-container-body-customers-customer-seri">
                    #32641
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-phone">
                    0359806602
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-quantityOrder">
                    15
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-address">
                    Số nhà 25, Khu phố 3A, Phường Thới Hòa, Thị Xã Bến Cát, Tỉnh
                    Bình Dương
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-customers-content-body-container-body-customers-customer">
                  <div className="admin-customers-content-body-container-body-customers-customer-seri">
                    #32641
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-phone">
                    0359806602
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-quantityOrder">
                    15
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-address">
                    Số nhà 25, Khu phố 3A, Phường Thới Hòa, Thị Xã Bến Cát, Tỉnh
                    Bình Dương
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-customers-content-body-container-body-customers-customer">
                  <div className="admin-customers-content-body-container-body-customers-customer-seri">
                    #32641
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-phone">
                    0359806602
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-quantityOrder">
                    15
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-address">
                    Số nhà 25, Khu phố 3A, Phường Thới Hòa, Thị Xã Bến Cát, Tỉnh
                    Bình Dương
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-customers-content-body-container-body-customers-customer">
                  <div className="admin-customers-content-body-container-body-customers-customer-seri">
                    #32641
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-phone">
                    0359806602
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-quantityOrder">
                    15
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-address">
                    Số nhà 25, Khu phố 3A, Phường Thới Hòa, Thị Xã Bến Cát, Tỉnh
                    Bình Dương
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-customers-content-body-container-body-customers-customer">
                  <div className="admin-customers-content-body-container-body-customers-customer-seri">
                    #32641
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-phone">
                    0359806602
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-quantityOrder">
                    15
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-address">
                    Số nhà 25, Khu phố 3A, Phường Thới Hòa, Thị Xã Bến Cát, Tỉnh
                    Bình Dương
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-customers-content-body-container-body-customers-customer">
                  <div className="admin-customers-content-body-container-body-customers-customer-seri">
                    #32641
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-phone">
                    0359806602
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-quantityOrder">
                    15
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-address">
                    Số nhà 25, Khu phố 3A, Phường Thới Hòa, Thị Xã Bến Cát, Tỉnh
                    Bình Dương
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-customers-content-body-container-body-customers-customer">
                  <div className="admin-customers-content-body-container-body-customers-customer-seri">
                    #32641
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-phone">
                    0359806602
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-quantityOrder">
                    15
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-address">
                    Số nhà 25, Khu phố 3A, Phường Thới Hòa, Thị Xã Bến Cát, Tỉnh
                    Bình Dương
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
                <div className="admin-customers-content-body-container-body-customers-customer">
                  <div className="admin-customers-content-body-container-body-customers-customer-seri">
                    #32641
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-customer">
                    Đỗ Đạt Đức
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-phone">
                    0359806602
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-quantityOrder">
                    15
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-address">
                    Số nhà 25, Khu phố 3A, Phường Thới Hòa, Thị Xã Bến Cát, Tỉnh
                    Bình Dương
                  </div>
                  <div className="admin-customers-content-body-container-body-customers-customer-action">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="admin-customers-content-body-container-footer">
              pagination
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
