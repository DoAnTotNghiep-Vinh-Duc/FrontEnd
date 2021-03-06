import { Radio } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import cartAPI from "../../api/cartAPI";
import orderAPI from "../../api/orderAPI";
import payment from "../../assets/images/payment.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ListProductCart from "../../components/ListProductCart/ListProductCart";
import Loading from "../../components/Loading/Loading";
import Menu from "../../components/Menu/Menu";
import FormPayPal from "../PayPal/FormPayPal";
import "./PaymentPage.scss";

toast.configure();
PaymentPage.propTypes = {
  user: PropTypes.object,
};

function PaymentPage({ user }) {
  const History = useHistory();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [openFormPayPal, setOpenFormPayPal] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [userShip, setUserShip] = useState(user);
  const [errorPayment, setErrorPayment] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    if (selectedValue === "ONLINE") {
      (async () => {
        try {
          const response = await orderAPI.paymentPaypal({
            listOrderDetail: listProductCart.listIdProductCart,
            name: userShip.name,
            city: userShip.city,
            district: userShip.district,
            ward: userShip.ward,
            street: userShip.street,
            phone: userShip.phone,
          });
          if (response) {
            window.location = response.data;
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
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
          setTimeout(() => {
            setLoading(false);
          }, 300);
          if (response.status === 201) {
            toast.success("?????t h??ng th??nh c??ng", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000,
              theme: "dark",
            });
            History.push(`${History.location.pathname}/notification`);
          }
        } catch (error) {
          toast.error(error, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: false,
            theme: "dark",
          });
        }
      })();
    }
  };

  const handleCloseFormPayPal = () => {
    setOpenFormPayPal(false);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="payment">
        <Header />
        <Menu />
        <div className="payment-title">
          <div className="title">
            <span className="cart-title-cart">Gi??? h??ng</span>
            <span className="cart-title-next">{">"}</span>
            <span className="cart-title-infor">Th??ng tin</span>
            <span className="cart-title-next">{">"}</span>
            <span className="cart-title-payment">Thanh to??n</span>
            <span className="cart-title-next">{">"}</span>
            <span className="cart-title-bill">????n h??ng</span>
          </div>
        </div>
        <div className="payment-content">
          <div className="payment-content-information">
            <div className="payment-content-information-customer">
              <div className="payment-content-information-customer-name">
                <div className="payment-content-information-customer-name-title">
                  Kh??ch h??ng
                </div>
                <div className="payment-content-information-customer-name-name">
                  {userShip.name}
                </div>
              </div>
              <div className="payment-content-information-customer-phone">
                <div className="payment-content-information-customer-phone-title">
                  S??? ??i???n tho???i
                </div>
                <div className="payment-content-information-customer-phone-phone">
                  {userShip.phone}
                </div>
              </div>
              <div className="payment-content-information-customer-address">
                <div className="payment-content-information-customer-address-title">
                  ?????a ch???
                </div>
                <div className="payment-content-information-customer-address-address">
                  {userShip.street} Ph?????ng {userShip.ward} {userShip.district}{" "}
                  {userShip.city}
                </div>
              </div>
            </div>
            <div className="payment-content-information-title-method">
              Ph????ng th???c thanh to??n
            </div>
            <div className="payment-content-information-method">
              <div className="payment-content-information-method-card">
                <div className="payment-content-information-method-card-header">
                  <div className="payment-content-information-method-card-header-radio">
                    <Radio
                      checked={selectedValue === "ONLINE"}
                      onChange={handleClickRadio}
                      value="ONLINE"
                      name="radio-button-demo"
                      inputProps={{ "aria-label": "A" }}
                    />
                  </div>
                  <div className="payment-content-information-method-card-header-title">
                    Thanh to??n online
                  </div>
                  <div className="payment-content-information-method-card-header-icon">
                    <img src={payment} alt="" />
                  </div>
                </div>
              </div>
              <div className="payment-content-information-method-cod">
                <div className="payment-content-information-method-cod-radio">
                  <Radio
                    checked={selectedValue === "CASH"}
                    onChange={handleClickRadio}
                    value="CASH"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "B" }}
                    label="End"
                  />
                </div>
                <div className="payment-content-information-method-cod-title">
                  Thanh to??n khi nh???n h??ng
                </div>
              </div>
            </div>

            {errorPayment ? (
              ""
            ) : (
              <>
                <div className="error-payment">
                  Vui l??ng ch???n ph????ng th???c thanh to??n!
                </div>
              </>
            )}

            <div className="payment-content-information-btn">
              <button
                className="payment-content-information-btnback"
                onClick={handleBtnBack}
              >
                <i className="bi bi-arrow-return-left"></i>
                Quay l???i
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
                Thanh to??n
              </button>
            </div>
          </div>
          <div className="payment-content-cart">
            <ListProductCart />
          </div>
        </div>
        <Footer />
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={openFormPayPal}
        onClose={handleCloseFormPayPal}
        aria-labelledby="responsive-dialog-title"
      >
        <FormPayPal closeFormPayPal={handleCloseFormPayPal} />
      </Dialog>
    </>
  );
}

export default PaymentPage;
