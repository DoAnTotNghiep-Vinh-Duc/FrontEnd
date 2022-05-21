import Dialog from "@material-ui/core/Dialog";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import LogOut from "../LogOut/LogOut";
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
  const userLogIn = useSelector((state) => state.user.currentUser);

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
          <div className="admin-content-header-right-infor">
            <div className="admin-content-header-right-notifications">
              <i className="bi bi-bell"></i>
            </div>
            <div className="admin-content-header-right-user">
              <div className="admin-content-header-right-user-avatar">
                <img src={userLogIn.avatar} alt="" />
              </div>
              <div className="admin-content-header-right-user-name">
                {userLogIn.nameDisplay}
              </div>
            </div>
            {/* <div className="admin-content-header-right-function">
            <i className="bi bi-chevron-down"></i>
          </div> */}
          </div>
          <div
            className="admin-content-header-right-logout"
            onClick={handleClickOpen}
          >
            Đăng xuất
          </div>
        </div>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <LogOut closeFormLogOut={handleClose} />
      </Dialog>
    </>
  );
}

export default Header;
