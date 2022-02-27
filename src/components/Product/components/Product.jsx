import Rating from "@material-ui/lab/Rating";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import product2 from "../../../assets/product/product2.jpg";
import product2a from "../../../assets/product/product2a.jpg";

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};

function Product(props) {
  const { product } = props;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <div className="home-product" onClick={handleClick}>
      <div className="home-product-image">
        <img src={product2} alt="" />
        <img src={product2a} alt="" className="home-product-img-hover" />
        <div className="home-product-group-fuction">
          <div className="addtocart">
            <i className="bi bi-handbag"></i>
          </div>
          <div className="addtolistwish">
            <i className="bi bi-suit-heart"></i>
          </div>
          <div className="zoom">
            <i className="bi bi-zoom-in"></i>
          </div>
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
            defaultValue={5}
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
            }).format(product.salePrice)}
          </p>
          <p className="home-product-price-sub ">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.originalPrice)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
