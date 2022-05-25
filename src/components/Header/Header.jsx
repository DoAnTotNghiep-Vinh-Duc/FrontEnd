import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userAPI from "../../api/userAPI";
import Logout from "../../features/Logout/Logout";
import "./style.scss";

Header.propTypes = {};

function Header(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const local = localStorage.getItem("account");
  const account = local && JSON.parse(local);
  const [open, setOpen] = useState(false);

  const [openFormLogout, setOpenFormLogout] = useState(false);
  const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    if (account) {
      (async () => {
        try {
          const response = await userAPI.getInformation();
          setUserInformation(response.data.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [account]);

  const handleClickOpenFormLogout = () => {
    setOpenFormLogout(true);
  };

  const handleCloseFormLogout = () => {
    setOpenFormLogout(false);
  };

  return (
    <>
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
              {!account ? (
                <>
                  <i className="far fa-user"></i>
                  <a href="/auth">Tài khoản</a>
                </>
              ) : (
                <>
                  <div
                    className="account-image-name"
                    onClick={() => setOpen((x) => !x)}
                  >
                    <div className="account-image">
                      <img src={userInformation.avatar} alt="" />
                    </div>
                    <div className="account-name">
                      Xin chào, {account.nameDisplay}
                      <div
                        className={`${"account-function"} ${
                          open ? "active" : ""
                        }`}
                      >
                        <Link className="account-item" to="/userInformation">
                          <i className="bi bi-card-checklist"></i>
                          <p>Thông tin cá nhân</p>
                        </Link>
                        <div
                          className="account-item"
                          onClick={handleClickOpenFormLogout}
                        >
                          <i className="bi bi-box-arrow-left"></i>
                          <p>Đăng xuất</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
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

      <Dialog
        fullScreen={fullScreen}
        open={openFormLogout}
        onClose={handleCloseFormLogout}
        aria-labelledby="responsive-dialog-title"
      >
        <Logout closeFormLogout={handleCloseFormLogout} />
      </Dialog>
    </>
  );
}

export default Header;
