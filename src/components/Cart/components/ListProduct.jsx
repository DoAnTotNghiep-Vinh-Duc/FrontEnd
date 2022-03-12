import React, { Fragment } from "react";
import product2 from "../../../assets/product/product2.jpg";
import "./ListProduct.scss";

ListProduct.propTypes = {};

function ListProduct(props) {
  return (
    <Fragment>
      <div className="cart-information-content-cart-product">
        <div className="cart-information-content-cart-product-image">
          <img src={product2} alt="" />
        </div>
        <div className="cart-information-content-cart-product-information">
          <div className="cart-information-content-cart-product-information-name">
            AIRism Cotton Áo Thun Chống UV Cổ Tròn Dài Tay
          </div>
          <div className="cart-information-content-cart-product-information-color">
            Màu sắc: Trắng
          </div>
          <div className="cart-information-content-cart-product-information-size">
            Kích thước: M
          </div>
        </div>
        <div className="cart-information-content-cart-product-quantity">2</div>
        <div className="cart-information-content-cart-product-price">
          650.000
        </div>
      </div>
      <div className="cart-information-content-cart-product">
        <div className="cart-information-content-cart-product-image">
          <img src={product2} alt="" />
        </div>
        <div className="cart-information-content-cart-product-information">
          <div className="cart-information-content-cart-product-information-name">
            AIRism Cotton Áo Thun Chống UV Cổ Tròn Dài Tay
          </div>
          <div className="cart-information-content-cart-product-information-color">
            Màu sắc: Trắng
          </div>
          <div className="cart-information-content-cart-product-information-size">
            Kích thước: M
          </div>
        </div>
        <div className="cart-information-content-cart-product-quantity">2</div>
        <div className="cart-information-content-cart-product-price">
          650.000
        </div>
      </div>
      <div className="cart-information-content-cart-product">
        <div className="cart-information-content-cart-product-image">
          <img src={product2} alt="" />
        </div>
        <div className="cart-information-content-cart-product-information">
          <div className="cart-information-content-cart-product-information-name">
            AIRism Cotton Áo Thun Chống UV Cổ Tròn Dài Tay
          </div>
          <div className="cart-information-content-cart-product-information-color">
            Màu sắc: Trắng
          </div>
          <div className="cart-information-content-cart-product-information-size">
            Kích thước: M
          </div>
        </div>
        <div className="cart-information-content-cart-product-quantity">2</div>
        <div className="cart-information-content-cart-product-price">
          650.000
        </div>
      </div>
      <div className="cart-information-content-cart-payment">
        <div className="cart-information-content-cart-payment-money">
          <div className="cart-information-content-cart-payment-money-title">
            Thành tiền
          </div>
          <div className="cart-information-content-cart-payment-money-price">
            1.516.000
          </div>
        </div>
        <div className="cart-information-content-cart-payment-ship">
          <div className="cart-information-content-cart-payment-ship-title">
            Phí vận chuyển
          </div>
          <div className="cart-information-content-cart-payment-ship-price">
            30.000
          </div>
        </div>
        <div className="cart-information-content-cart-payment-line"></div>
        <div className="cart-information-content-cart-payment-total">
          <div className="cart-information-content-cart-payment-total-title">
            TỔNG ĐƠN ĐẶT HÀNG
          </div>
          <div className="cart-information-content-cart-payment-total-price">
            2.560.000
          </div>
        </div>
        {/* <div className="cart-information-content-cart-payment-btnpayment">
          Thanh toán
        </div> */}
      </div>
    </Fragment>
  );
}

export default ListProduct;
