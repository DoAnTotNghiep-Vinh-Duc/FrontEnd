import { TextField } from "@material-ui/core";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useCart from "../../hooks/useCart";
import "./menu.scss";

Menu.propTypes = {};

function Menu(props) {
  const local = localStorage.getItem("account");
  const account = local && JSON.parse(local);

  const History = useHistory();

  const [scroll, setScroll] = useState(false);

  const { cart } = useCart(account._id);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -160) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const handleClickCart = () => {
    History.push("/cart");
  };

  return (
    <div className={`${"menu"} ${scroll ? "menu-scroll" : ""}`}>
      <div className="menu-left">
        <ul className="list_menu">
          <li className="home_menu">
            <a href="\" className="h">
              Trang chủ
              <i className="bi bi-chevron-down"></i>
            </a>
          </li>
          <li className="product_menu">
            <a href="\products">
              Nam<i className="bi bi-chevron-down"></i>
            </a>
            <div className="dropdown_product">
              <ul className="shoplayout">
                <li>
                  <a href="\products" className="title_product">
                    Tay dài
                  </a>
                </li>
                <li>
                  <a href="\products">Áo thun không cổ</a>
                </li>
                <li>
                  <a href="\products">Áo thun có cổ</a>
                </li>
                <li>
                  <a href="\products">Áo thun tanktop</a>
                </li>
                <li>
                  <a href="\products">Áo thun in hình</a>
                </li>
                <li>
                  <a href="\products">Áo thun có chữ</a>
                </li>
                <li>
                  <a href="\products">Áo thun trơn</a>
                </li>
                <li>
                  <a href="\products">Unisex</a>
                </li>
              </ul>
              <ul className="productlayout">
                <li>
                  <a href="\products" className="title_product">
                    Tay ngắn
                  </a>
                </li>
                <li>
                  <a href="\products">Áo thun không cổ</a>
                </li>
                <li>
                  <a href="\products">Áo thun có cổ</a>
                </li>
                <li>
                  <a href="\products">Áo thun tanktop</a>
                </li>
                <li>
                  <a href="\products">Áo thun in hình</a>
                </li>
                <li>
                  <a href="\products">Áo thun có chữ</a>
                </li>
                <li>
                  <a href="\products">Áo thun trơn</a>
                </li>
                <li>
                  <a href="\products">Unisex</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="product_menu">
            <a href="\products">
              Nữ<i className="bi bi-chevron-down"></i>
            </a>
            <div className="dropdown_product">
              <ul className="shoplayout">
                <li>
                  <a href="\products" className="title_product">
                    Tay dài
                  </a>
                </li>
                <li>
                  <a href="\products">Áo thun cổ tròn</a>
                </li>
                <li>
                  <a href="\products">Áo thun cổ xẻ/tim</a>
                </li>
                <li>
                  <a href="\products">Áo thun croptop</a>
                </li>
                <li>
                  <a href="\products">Áo thun in hình</a>
                </li>
                <li>
                  <a href="\products">Áo thun có chữ</a>
                </li>
                <li>
                  <a href="\products">Áo thun trơn</a>
                </li>
                <li>
                  <a href="\products">Unisex</a>
                </li>
              </ul>
              <ul className="productlayout">
                <li>
                  <a href="\products" className="title_product">
                    Tay ngắn
                  </a>
                </li>
                <li>
                  <a href="\products">Áo thun cổ tròn</a>
                </li>
                <li>
                  <a href="\products">Áo thun cổ xẻ/tim</a>
                </li>
                <li>
                  <a href="\products">Áo thun croptop</a>
                </li>
                <li>
                  <a href="\products">Áo thun in hình</a>
                </li>
                <li>
                  <a href="\products">Áo thun có chữ</a>
                </li>
                <li>
                  <a href="\products">Áo thun trơn</a>
                </li>
                <li>
                  <a href="\products">Unisex</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="knowDress_menu">
            <a href="\products">
              Liên hệ<i className="bi bi-chevron-down"></i>
            </a>
            <div className="dropdown_knowDress">
              <ul>
                <li>
                  <a href="\products">Về chúng tôi</a>
                </li>
                <li>
                  <a href="\products">Liên hệ</a>
                </li>
                <li>
                  <a href="\products">Khách hàng hài lòng 100%</a>
                </li>
                <li>
                  <a href="\products">Tài khoản của tôi</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="menu-center">
        <div className="logo">Lemon</div>
      </div>
      <div className="menu-right">
        <div className="menu-right-search">
          <TextField
            id="standard-search"
            label="Tìm kiếm"
            type="search"
            size="small"
            fullWidth
          />
          <i className="fas fa-search"></i>
        </div>
        <div className="menu-right-wishlist">
          <i className="bi bi-suit-heart"></i>
          <span>3</span>
        </div>
        <div className="menu-right-bag" onClick={handleClickCart}>
          <i className="bi bi-handbag"></i>
          <span>{cart.listCartDetail?.length ?? 0}</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
