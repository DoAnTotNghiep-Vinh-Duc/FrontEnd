import React from "react";
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="admin-content-header">
      <div className="admin-content-header-left">
        <div className="admin-content-header-left-search">
          <input type="text" placeholder="Tìm kiếm..." />
          <i className="bi bi-search"></i>
        </div>
      </div>
      <div className="admin-content-header-right">
        <div className="admin-content-header-right-notifications">
          <i className="bi bi-bell"></i>
        </div>
        <div className="admin-content-header-right-user">
          <div className="admin-content-header-right-user-avatar">
            <img
              src="https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top"
              alt=""
            />
          </div>
          <div className="admin-content-header-right-user-name">Đỗ Đạt Đức</div>
        </div>
        <div className="admin-content-header-right-function">
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
