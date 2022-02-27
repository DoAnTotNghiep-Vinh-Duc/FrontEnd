import React from "react";
import Footer from "../../../component/Footer/Footer";
import Header from "../../../component/Header/Header";
import Menu from "../../../component/Menu/Menu";
import clock from "../../../../assets/images/clock 1.png";
import check from "../../../../assets/images/check.png";
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
          <div className="notification-content-right-btnshopping">
            Tiếp tục mua sắm
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotificationPage;
