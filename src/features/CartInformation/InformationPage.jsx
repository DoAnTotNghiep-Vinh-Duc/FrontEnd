import { TextField } from "@material-ui/core";
import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ListProductCart from "../../components/ListProductCart/ListProductCart";
import Menu from "../../components/Menu/Menu";
import "./InformationPage.scss";

InformationPage.propTypes = {};

function InformationPage(props) {
  const match = useRouteMatch();
  const History = useHistory();

  const handleBtnBack = () => {
    History.goBack();
  };

  const handleBtnContinue = () => {
    History.push(`${match.url}/payment`);
  };

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
          <div className="payment-content-information-btn">
            <div
              className="payment-content-information-btnback"
              onClick={handleBtnBack}
            >
              <i className="bi bi-arrow-return-left"></i>
              Quay lại
            </div>
            <div
              className="payment-content-information-btnpayment"
              onClick={handleBtnContinue}
            >
              <i className="bi bi-arrow-return-right"></i>
              Tiếp tục
            </div>
          </div>
        </div>
        <div className="cart-information-content-cart">
          <ListProductCart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InformationPage;