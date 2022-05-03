import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`${history.location.pathname}/${product._id}`);
  };

  return (
    <div className="admin-products-content-body-listProducts-body-products-product">
      <div className="admin-products-content-body-listProducts-body-products-product-seri">
        #{product._id.substring(product._id.length - 5, product._id.length)}
      </div>
      <div className="admin-products-content-body-listProducts-body-products-product-image">
        <img
          src={
            product.images[Math.floor(Math.random() * product.images.length)] ??
            "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
          }
          alt=""
        />
      </div>
      <div className="admin-products-content-body-listProducts-body-products-product-name">
        {product.name}
      </div>
      <div className="admin-products-content-body-listProducts-body-products-product-stock">
        {product.quantity}
      </div>
      <div className="admin-products-content-body-listProducts-body-products-product-price">
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.price)}
      </div>
      <div className="admin-products-content-body-listProducts-body-products-product-category">
        {product.discount.percentDiscount * 100}%
      </div>
      <div className="admin-products-content-body-listProducts-body-products-product-action">
        <i className="bi bi-eye" onClick={handleClick}></i>
      </div>
    </div>
  );
}

export default Product;
