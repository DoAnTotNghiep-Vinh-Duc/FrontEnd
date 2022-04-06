import { Rating } from "@material-ui/lab";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import ListButton from "../../../../../components/ListButton/ListButton";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const History = useHistory();

  const handleClick = () => {
    History.push(`/products/${product._id}`);
    console.log("hehe");
  };

  return (
    <div className="home-product">
      <div className="home-product-image" onClick={handleClick}>
        <img src={product.images[0]} alt="" effect="blur" />
        <img
          src={product.images[1]}
          alt=""
          className="home-product-img-hover"
        />
        <div className="home-product-group-fuction">
          <ListButton />
        </div>
        <div className="home-products-addtocart">
          <i className="bi bi-handbag"></i>
          Thêm vào giỏ hàng
        </div>
        <div className="home-products-promotion">Sale</div>
      </div>
      <div className="home-product-infor">
        <div className="home-product-rating">
          <Rating
            name="half-rating-read"
            defaultValue={product.point}
            precision={0.1}
            readOnly
          />
        </div>
        <div className="home-product-name">{product.name}</div>
        <div className="home-product-price">
          <p className="home-product-price-main">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price)}
          </p>
          <p className="home-product-price-sub ">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
