import { Radio, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Footer from "../../../component/Footer/Footer";
import Header from "../../../component/Header/Header";
import Menu from "../../../component/Menu/Menu";
import ListProduct from "../../components/ListProduct";
import "./PaymentPage.scss";

PaymentPage.propTypes = {};

function PaymentPage(props) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="payment">
      <Header />
      <Menu />
      <div className="payment-title">
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
      <div className="payment-content">
        <div className="payment-content-information">
          <div className="payment-content-information-customer">
            <div className="payment-content-information-customer-name">
              <div className="payment-content-information-customer-name-title">
                Khách hàng
              </div>
              <div className="payment-content-information-customer-name-name">
                Đỗ Đạt Đức
              </div>
            </div>
            <div className="payment-content-information-customer-phone">
              <div className="payment-content-information-customer-phone-title">
                Số điện thoại
              </div>
              <div className="payment-content-information-customer-phone-phone">
                0359806602
              </div>
            </div>
            <div className="payment-content-information-customer-address">
              <div className="payment-content-information-customer-address-title">
                Địa chỉ
              </div>
              <div className="payment-content-information-customer-address-address">
                12 Nguyễn Văn Bảo, phường 15, quận Gò Vấp, Tp.HCM
              </div>
            </div>
          </div>
          <div className="payment-content-information-title-method">
            Phương thức thanh toán
          </div>
          <div className="payment-content-information-method">
            <div className="payment-content-information-method-card">
              <div className="payment-content-information-method-card-header">
                <div className="payment-content-information-method-card-header-radio">
                  <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "A" }}
                  />
                </div>
                <div className="payment-content-information-method-card-header-title">
                  Thẻ tín dụng
                </div>
                <div className="payment-content-information-method-card-header-icon">
                  icon
                </div>
              </div>
              <div className="payment-content-information-method-card-infor">
                <div className="payment-content-information-method-card-infor-name">
                  <TextField
                    id="outlined-basic"
                    label="Họ tên chủ thẻ"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </div>
                <div className="payment-content-information-method-card-infor-seri">
                  <TextField
                    id="outlined-basic"
                    label="Mã thẻ"
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </div>
                <div className="payment-content-information-method-card-infor-date-code">
                  <div className="payment-content-information-method-card-infor-date">
                    <TextField
                      id="outlined-basic"
                      label="Ngày hết hạn"
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </div>
                  <div className="payment-content-information-method-card-infor-code">
                    <TextField
                      id="outlined-basic"
                      label="Mã code"
                      variant="outlined"
                      size="small"
                      fullWidth
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-content-information-method-cod">
              <div className="payment-content-information-method-cod-radio">
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ "aria-label": "B" }}
                  label="End"
                />
              </div>
              <div className="payment-content-information-method-cod-title">
                Thanh toán khi nhận hàng
              </div>
            </div>
          </div>
          <div className="payment-content-information-btnback">
            <i className="bi bi-arrow-return-left"></i>
            Tiếp tục mua sắm
          </div>
        </div>
        <div className="payment-content-cart">
          <ListProduct />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentPage;
