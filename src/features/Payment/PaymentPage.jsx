import { Radio, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useHistory } from "react-router-dom";
import payment from "../../assets/images/payment.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ListProductCart from "../../components/ListProductCart/ListProductCart";
import Menu from "../../components/Menu/Menu";
import useCard from "../../hooks/useCard";
import PropTypes from "prop-types";
import "./PaymentPage.scss";
import cartAPI from "../../api/cartAPI";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

toast.configure();
PaymentPage.propTypes = {
  user: PropTypes.object,
};

function PaymentPage({ user }) {
  const History = useHistory();

  const [selectedValue, setSelectedValue] = useState("");
  const [userShip, setUserShip] = useState(user);
  const [errorPayment, setErrorPayment] = useState(false);

  // const { handleChange, handleFocus, handleSubmit, values, error } = useCard();
  const { handleChange, handleFocus, values, error } = useCard();
  const listProductCart = useSelector((state) => state.listProductCart);

  const handleClickRadio = (event) => {
    setSelectedValue(event.target.value);
    setErrorPayment(true);
  };

  const handleBtnBack = () => {
    History.goBack();
  };

  useEffect(() => {
    setUserShip(user);
  }, [user]);

  const handleSubmit = () => {
    (async () => {
      try {
        const response = await cartAPI.payment({
          listOrderDetail: listProductCart.listIdProductCart,
          name: userShip.name,
          city: userShip.city,
          district: userShip.district,
          ward: userShip.ward,
          street: userShip.street,
          phone: userShip.phone,
        });

        if (response.status === 201) {
          toast.success("Đặt hàng thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          History.push(`${History.location.pathname}/notification`);
        }
      } catch (error) {
        console.log(error);
      }
    })();
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
                {userShip.name}
              </div>
            </div>
            <div className="payment-content-information-customer-phone">
              <div className="payment-content-information-customer-phone-title">
                Số điện thoại
              </div>
              <div className="payment-content-information-customer-phone-phone">
                {userShip.phone}
              </div>
            </div>
            <div className="payment-content-information-customer-address">
              <div className="payment-content-information-customer-address-title">
                Địa chỉ
              </div>
              <div className="payment-content-information-customer-address-address">
                {userShip.street} {userShip.ward} {userShip.district}{" "}
                {userShip.city}
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

          {errorPayment ? (
            ""
          ) : (
            <>
              <div className="error-payment">
                Vui lòng chọn phương thức thanh toán!
              </div>
            </>
          )}

          <div className="payment-content-information-btn">
            <button
              className="payment-content-information-btnback"
              onClick={handleBtnBack}
            >
              <i className="bi bi-arrow-return-left"></i>
              Quay lại
            </button>
            <button
              className={`${"payment-content-information-btnpayment"} ${
                errorPayment ? "" : "active"
              }`}
              disabled={errorPayment ? false : true}
              type="submit"
              onClick={handleSubmit}
            >
              <i className="bi bi-arrow-return-right"></i>
              Thanh toán
            </button>
          </div>
        </div>
        <div className="payment-content-cart">
          <ListProductCart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentPage;
