import React from "react";
import Footer from "../../../component/Footer/Footer";
import Header from "../../../component/Header/Header";
import Menu from "../../../component/Menu/Menu";
import product2 from "../../../../assets/product/product2.jpg";
import "./CartPage.scss";

CartPage.propTypes = {};

function CartPage(props) {
  return (
    <div className="cart">
      <Header />
      <Menu />
      <div className="cart-title">
        <div className="title">
          <span className="cart-title-cart">Giỏ hàng</span>
          <span className="cart-title-next">{">"}</span>
          <span className="cart-title-infor">Thông tin</span>
          <span className="cart-title-next">{">"}</span>
          <span className="cart-title-payment">Thanh toán</span>
          <span className="cart-title-next">{">"}</span>
          <span className="cart-title-bill">Đơn hàng</span>
        </div>
      </div>
      <div className="cart-content">
        <div className="cart-content-cart">
          <div className="cart-content-cart-header">
            <span className="cart-content-cart-header-productname">
              Sản phẩm
            </span>
            <span className="cart-content-cart-header-price">Đơn giá</span>
            <span className="cart-content-cart-header-quantity">Số lượng</span>
            <span className="cart-content-cart-header-total">Tổng</span>
          </div>
          <div className="cart-content-cart-product">
            <div className="cart-content-cart-product-image">
              <img src={product2} alt="" />
            </div>
            <div className="cart-content-cart-product-infor">
              <div className="cart-content-cart-product-infor-name">
                AIRism Cotton Áo Thun Chống UV Cổ Tròn Dài Tay
              </div>
              <div className="cart-content-cart-product-infor-color">
                Màu sắc: Trắng
              </div>
              <div className="cart-content-cart-product-infor-size">
                Kích cỡ: M
              </div>
            </div>
            <div className="cart-content-cart-product-price">399.000</div>
            <div className="cart-content-cart-product-quantity">
              <i className="bi bi-dash-lg"></i>
              <div className="cart-content-cart-product-quantity-number">2</div>
              <i className="bi bi-plus-lg"></i>
            </div>
            <div className="cart-content-cart-product-total">399.000</div>
            <div className="cart-content-cart-product-delete">
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="cart-content-cart-product">
            <div className="cart-content-cart-product-image">
              <img src={product2} alt="" />
            </div>
            <div className="cart-content-cart-product-infor">
              <div className="cart-content-cart-product-infor-name">
                AIRism Cotton Áo Thun Chống UV Cổ Tròn Dài Tay
              </div>
              <div className="cart-content-cart-product-infor-color">
                Màu sắc: Trắng
              </div>
              <div className="cart-content-cart-product-infor-size">
                Kích cỡ: M
              </div>
            </div>
            <div className="cart-content-cart-product-price">399.000</div>
            <div className="cart-content-cart-product-quantity">
              <i className="bi bi-dash-lg"></i>
              <div className="cart-content-cart-product-quantity-number">2</div>
              <i className="bi bi-plus-lg"></i>
            </div>
            <div className="cart-content-cart-product-total">399.000</div>
            <div className="cart-content-cart-product-delete">
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="cart-content-cart-product">
            <div className="cart-content-cart-product-image">
              <img src={product2} alt="" />
            </div>
            <div className="cart-content-cart-product-infor">
              <div className="cart-content-cart-product-infor-name">
                AIRism Cotton Áo Thun Chống UV Cổ Tròn Dài Tay
              </div>
              <div className="cart-content-cart-product-infor-color">
                Màu sắc: Trắng
              </div>
              <div className="cart-content-cart-product-infor-size">
                Kích cỡ: M
              </div>
            </div>
            <div className="cart-content-cart-product-price">399.000</div>
            <div className="cart-content-cart-product-quantity">
              <i className="bi bi-dash-lg"></i>
              <div className="cart-content-cart-product-quantity-number">2</div>
              <i className="bi bi-plus-lg"></i>
            </div>
            <div className="cart-content-cart-product-total">399.000</div>
            <div className="cart-content-cart-product-delete">
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>
        <div className="cart-content-payment">
          <div className="cart-content-payment-container">
            <div className="cart-content-payment-container-title">
              TỔNG ĐƠN HÀNG 5 SẢN PHẨM
            </div>
            <div className="cart-content-payment-container-productprice">
              <div className="cart-content-payment-container-productprice-title">
                Thành tiền
              </div>
              <div className="cart-content-payment-container-productprice-price">
                1.995.000
              </div>
            </div>
            <div className="cart-content-payment-container-vattitle">
              Đã bao gồm thuế giá trị gia tăng
            </div>
            <div className="cart-content-payment-container-ship">
              <div className="cart-content-payment-container-ship-title">
                Phí vận chuyển
              </div>
              <div className="cart-content-payment-container-ship-price">
                30.000
              </div>
            </div>
            <div className="cart-content-payment-container-total">
              <div className="cart-content-payment-container-total-title">
                TỔNG ĐƠN ĐẶT HÀNG
              </div>
              <div className="cart-content-payment-container-total-price">
                2.015.000
              </div>
            </div>
            <div className="cart-content-payment-container-btnpayment">
              THANH TOÁN
            </div>
            <div className="cart-content-payment-container-btnshoppping">
              Tiếp tục mua sắm
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
