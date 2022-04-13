import React, { Fragment } from "react";
import product2 from "../../assets/product/product2.jpg";
import useCart from "../../hooks/useCart";
import "./ListProductCart.scss";

ListProduct.propTypes = {};

function ListProduct(props) {
  const local = localStorage.getItem("account");
  const account = local && JSON.parse(local);

  const { cart } = useCart(account._id);

  return (
    <Fragment>
      {cart.listCartDetail?.map((element) => {
        return (
          <div
            className="cart-information-content-cart-product"
            key={element.productDetail}
          >
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
            <div className="cart-information-content-cart-product-quantity">
              {element.quantity}
            </div>
            <div className="cart-information-content-cart-product-price">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(element.total)}
            </div>
          </div>
        );
      })}

      <div className="cart-information-content-cart-payment">
        <div className="cart-information-content-cart-payment-money">
          <div className="cart-information-content-cart-payment-money-title">
            Thành tiền
          </div>
          <div className="cart-information-content-cart-payment-money-price">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(cart.total)}
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
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(cart.total + 30000)}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ListProduct;
