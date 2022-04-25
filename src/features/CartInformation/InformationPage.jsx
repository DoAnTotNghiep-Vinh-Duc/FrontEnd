import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import userAPI from "../../api/userAPI";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ListProductCart from "../../components/ListProductCart/ListProductCart";
import Menu from "../../components/Menu/Menu";
import "./InformationPage.scss";

InformationPage.propTypes = {};

function InformationPage(props) {
  const match = useRouteMatch();
  const History = useHistory();

  const userLogIn = useSelector((state) => state.user.currentUser);

  const [userInformation, setUserInformation] = useState({});

  const handleBtnBack = () => {
    History.goBack();
  };

  const handleBtnContinue = () => {
    props.sendUserShip(userInformation);
    History.push(`${match.url}/payment`);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await userAPI.getInformation();
        setUserInformation(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userLogIn._id]);

  const handleName = (event) => {
    setUserInformation({
      ...userInformation,
      name: event.target.value,
    });
  };
  const handleCity = (event) => {
    setUserInformation({
      ...userInformation,
      city: event.target.value,
    });
  };
  const handleDistrict = (event) => {
    setUserInformation({
      ...userInformation,
      district: event.target.value,
    });
  };
  const handleWard = (event) => {
    setUserInformation({
      ...userInformation,
      ward: event.target.value,
    });
  };
  const handleStreet = (event) => {
    setUserInformation({
      ...userInformation,
      street: event.target.value,
    });
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
              id="standard-read-only-input"
              label="Điện thoại"
              fullWidth
              size="small"
              value={userInformation.phone}
              focused
              InputProps={{
                readOnly: true,
              }}
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
                value={userInformation.name}
                focused
                onChange={handleName}
              />
            </div>
            <div className="cart-information-content-information-address-city">
              <TextField
                id="standard-basic"
                label="Thành phố"
                fullWidth
                size="small"
                value={userInformation.city}
                focused
                onChange={handleCity}
              />
            </div>
            <div className="cart-information-content-district-ward">
              <div className="cart-information-content-district">
                <TextField
                  id="standard-basic"
                  label="Quận / Huyện"
                  fullWidth
                  size="small"
                  value={userInformation.district}
                  focused
                  onChange={handleDistrict}
                />
              </div>
              <div className="cart-information-content-ward">
                <TextField
                  id="standard-basic"
                  label="Phường / Xã"
                  fullWidth
                  size="small"
                  value={userInformation.ward}
                  focused
                  onChange={handleWard}
                />
              </div>
            </div>
            <TextField
              id="standard-basic"
              label="Số nhà, đường"
              fullWidth
              size="small"
              value={userInformation.street}
              focused
              onChange={handleStreet}
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
