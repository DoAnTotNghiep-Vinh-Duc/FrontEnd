import React from "react";
import "./Header.scss";
import LinearProgress from "@material-ui/core/LinearProgress";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="admin-content-header">
      <div className="admin-content-header-left">
        {/* <div className="admin-content-header-left-search">
          <input type="text" placeholder="Tìm kiếm..." />
          <i className="bi bi-search"></i>
        </div> */}
        <div className="admin-content-header-left-totalorder">
          <i className="bi bi-grid"></i>
          <span>Đơn hàng</span>
          <div className="admin-content-header-left-totalorder-progress">
            <LinearProgress
              variant="determinate"
              value={33}
              style={{ height: "5px", borderRadius: "10px" }}
            />
          </div>
          <span>Số đơn hàng đã hoàn tất 33%</span>
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
