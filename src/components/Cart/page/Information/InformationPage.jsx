import { TextField } from "@material-ui/core";
import React from "react";
import Footer from "../../../component/Footer/Footer";
import Header from "../../../component/Header/Header";
import Menu from "../../../component/Menu/Menu";
import ListProduct from "../../components/ListProduct";
import "./InformationPage.scss";

InformationPage.propTypes = {};

function InformationPage(props) {
  return (
    <div className="cart-information">
      <Header />
      <Menu />
      <div className="cart-information-title">
        <div className="title">
          <span className="cart-title-cart">Giỏ hàng</span>
          <span className="cart-title-next">{">"}</span>
          <span className="cart-title-infor">Thông tin</span>
          <span className="cart-title-next">{">"}</span>
          <span className="cart-title-payment">Thanh toán</span>
          <span className="cart-title-next">{">"}</span>
          <span className="cart-title-bill">Đơn hàng</span>
        </div>
      </div>
      <div className="cart-information-content">
        <div className="cart-information-content-container">
          <div className="cart-information-content-information">
            <div className="cart-information-content-information-title">
              Thông tin liên hệ
            </div>
            <TextField
              id="standard-basic"
              label="Điện thoại"
              fullWidth
              size="small"
            />
            <div className="cart-information-content-information-address">
              Địa chỉ giao hàng
            </div>
            <div className="cart-information-content-information-address-name">
              <TextField
                id="standard-basic"
                label="Họ và tên"
                fullWidth
                size="small"
              />
            </div>
            <div className="cart-information-content-information-address-city">
              <TextField
                id="standard-basic"
                label="Thành phố"
                fullWidth
                size="small"
              />
            </div>
            <div className="cart-information-content-district-ward">
              <div className="cart-information-content-district">
                <TextField
                  id="standard-basic"
                  label="Quận / Huyện"
                  fullWidth
                  size="small"
                />
              </div>
              <div className="cart-information-content-ward">
                <TextField
                  id="standard-basic"
                  label="Phường / Xã"
                  fullWidth
                  size="small"
                />
              </div>
            </div>
            <TextField
              id="standard-basic"
              label="Số nhà, đường"
              fullWidth
              size="small"
            />
          </div>
          <div className="cart-information-content-btnback">
            <i className="bi bi-arrow-return-left"></i>
            Tiếp tục mua sắm
          </div>
        </div>
        <div className="cart-information-content-cart">
          <ListProduct />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InformationPage;
