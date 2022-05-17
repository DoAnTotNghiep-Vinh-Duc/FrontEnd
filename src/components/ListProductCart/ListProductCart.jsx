import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./ListProductCart.scss";

ListProduct.propTypes = {};

function ListProduct(props) {
  const listProductCart = useSelector((state) => state.listProductCart);

  let totalOrder = 0;

  return (
    <Fragment>
      {listProductCart.listProductCart.map((element) => {
        totalOrder += element.quantity * element.priceDiscount;
        return (
          <div
            className="cart-information-content-cart-product"
            key={element.productDetail._id}
          >
            <div className="cart-information-content-cart-product-image">
              <img src={element.productDetail.image} alt="" />
            </div>
            <div className="cart-information-content-cart-product-information">
              <div className="cart-information-content-cart-product-information-name">
                {element.productDetail.product.name}
              </div>
              <div className="cart-information-content-cart-product-information-color">
                Màu sắc: {element.productDetail.color.name}
              </div>
              <div className="cart-information-content-cart-product-information-size">
                Kích thước: {element.productDetail.size}
              </div>
            </div>
            <div className="cart-information-content-cart-product-quantity">
              {element.quantity}
            </div>
            <div className="cart-information-content-cart-product-total">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(element.quantity * element.priceDiscount)}
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
            }).format(totalOrder)}
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
            }).format(totalOrder + 30000)}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ListProduct;
