import React from "react";
import { Link } from "react-router-dom";
import a from "../../assets/product/PhiHanhGia-blue.jpg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Scroll from "../../components/Scroll/Scroll";
import "./ListFavorite.scss";

ListFavorite.propTypes = {};

function ListFavorite(props) {
  return (
    <div className="favorite">
      <Header />
      <Menu />
      <Scroll showBelow={250} />
      <div className="favorite-title">
        <div className="title">
          <Link to="/">Trang chủ / </Link>
          <span>Sản Phẩm Yêu Thích</span>
        </div>
      </div>
      <div className="favorite-content">
        <div className="favorite-header">
          <div className="favorite-header-product">Sản phẩm</div>
          <div className="favorite-header-price">Giá</div>
          <div className="favorite-header-stock">Tình trạng</div>
          <div className="favorite-header-delete"></div>
          <div className="favorite-header-add"></div>
        </div>
        <div className="favorite-body">
          <div className="favorite-product">
            <div className="favorite-product-infor">
              <div className="favorite-product-infor-left">
                <img src={a} alt="" />
              </div>
              <div className="favorite-product-infor-right">
                <div className="favorite-product-infor-right-name">
                  Áo thun mùa hè năng động
                </div>
                <div className="favorite-product-infor-right-color">
                  Màu sắc: Trắng
                </div>
                <div className="favorite-product-infor-right-size">
                  Kích cỡ: XXL
                </div>
              </div>
            </div>
            <div className="favorite-product-price">125.000 đ</div>
            <div className="favorite-product-stock">Còn hàng</div>
            <div className="favorite-product-delete">
              <i className="bi bi-x-lg"></i>
            </div>
            <div className="favorite-product-add">
              <button>
                <i className="bi bi-handbag"></i>Thêm vào giỏ hàng
              </button>
            </div>
          </div>
          <div className="favorite-product">
            <div className="favorite-product-infor">
              <div className="favorite-product-infor-left">
                <img src={a} alt="" />
              </div>
              <div className="favorite-product-infor-right">
                <div className="favorite-product-infor-right-name">
                  Áo thun mùa hè năng động
                </div>
                <div className="favorite-product-infor-right-color">
                  Màu sắc: Trắng
                </div>
                <div className="favorite-product-infor-right-size">
                  Kích cỡ: XXL
                </div>
              </div>
            </div>
            <div className="favorite-product-price">125.000 đ</div>
            <div className="favorite-product-stock">Còn hàng</div>
            <div className="favorite-product-delete">
              <i className="bi bi-x-lg"></i>
            </div>
            <div className="favorite-product-add">
              <button>
                <i className="bi bi-handbag"></i>Thêm vào giỏ hàng
              </button>
            </div>
          </div>
          <div className="favorite-product">
            <div className="favorite-product-infor">
              <div className="favorite-product-infor-left">
                <img src={a} alt="" />
              </div>
              <div className="favorite-product-infor-right">
                <div className="favorite-product-infor-right-name">
                  Áo thun mùa hè năng động
                </div>
                <div className="favorite-product-infor-right-color">
                  Màu sắc: Trắng
                </div>
                <div className="favorite-product-infor-right-size">
                  Kích cỡ: XXL
                </div>
              </div>
            </div>
            <div className="favorite-product-price">125.000 đ</div>
            <div className="favorite-product-stock">Còn hàng</div>
            <div className="favorite-product-delete">
              <i className="bi bi-x-lg"></i>
            </div>
            <div className="favorite-product-add">
              <button>
                <i className="bi bi-handbag"></i>Thêm vào giỏ hàng
              </button>
            </div>
          </div>
          <div className="favorite-product">
            <div className="favorite-product-infor">
              <div className="favorite-product-infor-left">
                <img src={a} alt="" />
              </div>
              <div className="favorite-product-infor-right">
                <div className="favorite-product-infor-right-name">
                  Áo thun mùa hè năng động
                </div>
                <div className="favorite-product-infor-right-color">
                  Màu sắc: Trắng
                </div>
                <div className="favorite-product-infor-right-size">
                  Kích cỡ: XXL
                </div>
              </div>
            </div>
            <div className="favorite-product-price">125.000 đ</div>
            <div className="favorite-product-stock">Còn hàng</div>
            <div className="favorite-product-delete">
              <i className="bi bi-x-lg"></i>
            </div>
            <div className="favorite-product-add">
              <button>
                <i className="bi bi-handbag"></i>Thêm vào giỏ hàng
              </button>
            </div>
          </div>
          <div className="favorite-product">
            <div className="favorite-product-infor">
              <div className="favorite-product-infor-left">
                <img src={a} alt="" />
              </div>
              <div className="favorite-product-infor-right">
                <div className="favorite-product-infor-right-name">
                  Áo thun mùa hè năng động
                </div>
                <div className="favorite-product-infor-right-color">
                  Màu sắc: Trắng
                </div>
                <div className="favorite-product-infor-right-size">
                  Kích cỡ: XXL
                </div>
              </div>
            </div>
            <div className="favorite-product-price">125.000 đ</div>
            <div className="favorite-product-stock">Còn hàng</div>
            <div className="favorite-product-delete">
              <i className="bi bi-x-lg"></i>
            </div>
            <div className="favorite-product-add">
              <button>
                <i className="bi bi-handbag"></i>Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
        <div className="favorite-pagination"></div>
      </div>
      <Footer />
    </div>
  );
}

export default ListFavorite;
