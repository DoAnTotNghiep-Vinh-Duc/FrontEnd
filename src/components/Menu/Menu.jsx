import { TextField } from "@material-ui/core";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { useState } from "react";
import "./menu.scss";

Menu.propTypes = {};

function Menu(props) {
  const [scroll, setScroll] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -160) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

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
            <a href="\">
              Nam<i className="bi bi-chevron-down"></i>
            </a>
            <div className="dropdown_product">
              <ul className="shoplayout">
                <li>
                  <a href="\" className="title_product">
                    Danh mục
                  </a>
                </li>
                <li>
                  <a href="\">Tất cả</a>
                </li>
                <li>
                  <a href="\">Áo thun trơn</a>
                </li>
                <li>
                  <a href="\">Áo thun sọc</a>
                </li>
                <li>
                  <a href="\">Áo thun in hình</a>
                </li>
                <li>
                  <a href="\">Áo thun nam</a>
                </li>
                <li>
                  <a href="\">Áo thun nữ</a>
                </li>
                <li>
                  <a href="\">Unisex</a>
                </li>
              </ul>
              <ul className="productlayout">
                <li>
                  <a href="\" className="title_product">
                    Xu hướng
                  </a>
                </li>
                <li>
                  <a href="\">Hàng mới về</a>
                </li>
                <li>
                  <a href="\">Giảm nhiều nhất</a>
                </li>
                <li>
                  <a href="\">Bán chạy nhất</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="introduce_menu">
            <a href="\">
              Nữ<i className="bi bi-chevron-down"></i>
            </a>
            <div className="dropdown_introduce">
              <ul>
                <li>
                  <a href="\">Về chúng tôi</a>
                </li>
                <li>
                  <a href="\">Liên hệ</a>
                </li>
                <li>
                  <a href="\">Khách hàng hài lòng 100%</a>
                </li>
                <li>
                  <a href="\">Tài khoản của tôi</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="knowDress_menu">
            <a href="\">
              Liên hệ<i className="bi bi-chevron-down"></i>
            </a>
            <div className="dropdown_knowDress">
              <ul>
                <li>
                  <a href="\">Hướng dẫn chọn size</a>
                </li>
                <li>
                  <a href="\">Blog</a>
                </li>
                <li>
                  <a href="\">Nhóm mặc đẹp sống chất</a>
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
        <div className="menu-right-bag">
          <i className="bi bi-handbag"></i>
          <span>2</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
