import { Radio, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import payment from "../../.././../assets/images/payment.png";
import Footer from "../../../component/Footer/Footer";
import Header from "../../../component/Header/Header";
import Menu from "../../../component/Menu/Menu";
import ListProduct from "../../components/ListProduct";
import "./PaymentPage.scss";
import useCard from "../../../../hooks/useCard";

PaymentPage.propTypes = {};

function PaymentPage(props) {
  const [selectedValue, setSelectedValue] = useState("");
  // const [number, setNumber] = useState("");
  // const [name, setName] = useState("");
  // const [expiry, setExpiry] = useState("");
  // const [cvc, setCvc] = useState("");
  // const [focus, setFocus] = useState("");

  const { handleChange, handleFocus, handleSubmit, values, error } = useCard();

  const handleClickRadio = (event) => {
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
                    onChange={handleClickRadio}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "A" }}
                  />
                </div>
                <div className="payment-content-information-method-card-header-title">
                  Thẻ tín dụng
                </div>
                <div className="payment-content-information-method-card-header-icon">
                  <img src={payment} alt="" />
                </div>
              </div>
              <div className="payment-content-information-method-card-infor">
                <div className="payment-content-information-method-card-infor-top">
                  <Cards
                    number={values.number}
                    name={values.name}
                    expiry={values.expiry}
                    cvc={values.cvc}
                    focused={values.focus}
                  />
                </div>
                <div className="payment-content-information-method-card-infor-seri">
                  <TextField
                    id="outlined-basic"
                    label="Mã thẻ"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="number"
                    value={values.number}
                    onChange={handleChange}
                    onFocus={handleFocus}
                  />
                </div>
                <div className="payment-content-information-method-card-infor-name">
                  <TextField
                    id="outlined-basic"
                    label="Họ và tên"
                    variant="outlined"
                    size="small"
                    fullWidth
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
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
                      name="expiry"
                      value={values.expiry}
                      onChange={handleChange}
                      onFocus={handleFocus}
                    />
                  </div>
                  <div className="payment-content-information-method-card-infor-code">
                    <TextField
                      id="outlined-basic"
                      label="Mã code"
                      variant="outlined"
                      size="small"
                      fullWidth
                      name="cvc"
                      value={values.cvc}
                      onChange={handleChange}
                      onFocus={handleFocus}
                    />
                  </div>
                </div>
                {error.show && (
                  <div className="payment-content-information-method-card-infor-alert">
                    <Alert>{error.message}</Alert>
                  </div>
                )}
              </div>
            </div>
            <div className="payment-content-information-method-cod">
              <div className="payment-content-information-method-cod-radio">
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleClickRadio}
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
          <div className="payment-content-information-btn">
            <button className="payment-content-information-btnback">
              <i className="bi bi-arrow-return-left"></i>
              Quay lại
            </button>
            <button
              className="payment-content-information-btnpayment"
              type="submit"
              onClick={handleSubmit}
            >
              <i className="bi bi-arrow-return-right"></i>
              Thanh toán
            </button>
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
