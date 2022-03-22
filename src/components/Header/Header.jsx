import React from "react";
import "./style.scss";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-phone">
          <a href="tel:0359806602">
            <i className="fas fa-phone-alt"></i>
            (+84) 359 806 602
          </a>
        </div>
        <div className="header-mail">
          <a href="mailto:dvFashion@gmail.com">
            <i className="far fa-envelope"></i>
            lemonFashion@gmail.com
          </a>
        </div>
      </div>
      <div className="header-center">
        <i className="bi bi-truck">
          <div className="free">FREE</div>
        </i>
        <div className="title">MIỄN PHÍ VẬN CHUYỂN</div>
        <div className="sub-title">Đặt hàng từ 1000K</div>
      </div>
      <div className="header-right">
        <div className="header-right-account">
          <i className="far fa-user"></i>
          <a href="/auth">Tài khoản</a>
        </div>
        <div className="line"></div>
        <div className="header-right-languages">
          <a href="/" className="language-vietnam">
            Vietnam <i className="fas fa-angle-down"></i>
          </a>
          <div className="dropdown-languages">
            <a href="/">Tiếng Anh</a>
            <a href="/">Tiếng Trung</a>
          </div>
        </div>
        <div className="header-right-cash">
          <a href="/" className="cash-vietnam">
            VNĐ <i className="fas fa-angle-down"></i>
          </a>
          <div className="dropdown-cash">
            <a href="/">USD</a>
            <a href="/">CNY</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
