import React, { useState } from "react";
import "./style.scss";

Header.propTypes = {};

function Header(props) {
  const local = localStorage.getItem("account");
  const account = local && JSON.parse(local);
  const [open, setOpen] = useState(false);

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
          <div className="header-right-account-container">
            <i className="far fa-user"></i>
            {!account ? (
              <a href="/auth">Tài khoản</a>
            ) : (
              <div className="account-name" onClick={() => setOpen((x) => !x)}>
                Xin chào, Đỗ Đạt Đức
                <div
                  className={`${"account-function"} ${open ? "active" : ""}`}
                >
                  <div className="account-item">
                    <i className="bi bi-card-checklist"></i>
                    <p>Thông tin cá nhân</p>
                  </div>
                  <div className="account-item">
                    <i className="bi bi-key"></i>
                    <p>Đổi mật khẩu</p>
                  </div>
                  <div className="account-item">
                    <i className="bi bi-box-arrow-left"></i>
                    <p>Đăng xuất</p>
                  </div>
                </div>
              </div>
            )}
          </div>
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
