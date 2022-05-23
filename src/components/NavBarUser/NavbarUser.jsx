import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBarUser.scss";

NavbarUser.propTypes = {};

function NavbarUser(props) {
  const location = useLocation();

  return (
    <div className="userInformation-navbar">
      <div className="userInformation-navbar-logo">
        <Link to="/">
          <p>Lemon</p>
        </Link>
      </div>
      <div className="userInformation-navbar-menu">
        <Link className="userInformation-navbar-menu-home" to="/">
          <i className="bi bi-house"></i>
          <p>Trang chủ</p>
        </Link>
        <Link
          className={`${"userInformation-navbar-menu-infor"} ${
            location.pathname === "/userInformation" ? "active-infor" : ""
          }`}
          to="/userInformation"
        >
          <i className="bi bi-person-lines-fill"></i>
          <p>Thông tin cá nhân</p>
        </Link>
        <Link
          className={`${"userInformation-navbar-menu-order"} ${
            location.pathname === "/userInformation/myOrders"
              ? "active-order"
              : ""
          }`}
          to="/userInformation/myOrders"
        >
          <i className="bi bi-journal-text"></i>
          <p>Đơn hàng của tôi</p>
        </Link>
        <Link
          className={`${"userInformation-navbar-menu-rated"} ${
            location.pathname === "/userInformation/rated" ? "active-rated" : ""
          }`}
          to="/userInformation/rated"
        >
          <i className="bi bi-card-text"></i>
          <p>Đã đánh giá</p>
        </Link>
        <Link
          className={`${"userInformation-navbar-menu-password"} ${
            location.pathname === "/userInformation/changePassword"
              ? "active-password"
              : ""
          }`}
          to="/userInformation/changePassword"
        >
          <i className="bi bi-key"></i>
          <p>Đổi mật khẩu</p>
        </Link>
      </div>
    </div>
  );
}

export default NavbarUser;
