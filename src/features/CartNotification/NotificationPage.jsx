import React from "react";
import { Link } from "react-router-dom";
import check from "../../assets/images/check.png";
import clock from "../../assets/images/clock 1.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./NotificationPage.scss";

NotificationPage.propTypes = {};

function NotificationPage(props) {
  return (
    <div className="notification">
      <Header />
      <Menu />
      <div className="notification-title">
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
      <div className="notification-content">
        <div className="notification-content-left">
          <div className="notification-content-left-image">
            <img src={clock} alt="" />
          </div>
        </div>
        <div className="notification-content-right">
          <div className="notification-content-right-check">
            <div className="notification-content-right-check-image">
              <img src={check} alt="" />
            </div>
          </div>
          <div className="notification-content-right-title">
            Bạn đã đặt hàng thành công
          </div>
          <div className="notification-content-right-descrip">
            Cám ơn vì đã mua hàng tại shop của chúng tôi. Đơn hàng của bạn đang
            trong quá trình xử lý và sẽ được hoàn thành trong trong 3 - 6 giờ.
            Bạn sẽ nhận được email thông báo khi đơn hàng của bạn đã được hoàn
            thành!
          </div>
          <Link to="/" className="notification-content-right-btnshopping">
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotificationPage;
