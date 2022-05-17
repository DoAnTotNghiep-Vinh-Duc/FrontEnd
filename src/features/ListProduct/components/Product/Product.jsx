import Rating from "@material-ui/lab/Rating";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import ListButton from "../../../../components/ListButton/ListButton";

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
    history.push(`/products/${product._id}`);
  };

  return (
    <div className="home-product">
      <div className="home-product-image">
        <div className="home-product-image-container" onClick={handleClick}>
          <img
            src={
              product.images[Math.floor(Math.random() * product.images.length)]
            }
            alt=""
          />
          <img
            src={
              product.images[Math.floor(Math.random() * product.images.length)]
            }
            alt=""
            className="home-product-img-hover"
          />
        </div>
        <div className="home-product-group-fuction">
          <ListButton product={product} />
        </div>
        <div className="home-products-addtocart">
          <i className="bi bi-handbag"></i>
          Thêm vào giỏ hàng
        </div>
        {product.priceDiscount !== product.price ? (
          <>
            <div className="home-products-promotion">Sale</div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="home-product-infor">
        <div className="home-product-rating">
          <Rating
            name="half-rating-read"
            value={product.point ?? 0}
            precision={0.1}
            readOnly
            size="small"
          />
        </div>
        <div className="home-product-name">{product.name}</div>
        <div className="home-product-price">
          {product.priceDiscount !== product.price ? (
            <>
              <p className="home-product-price-main">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.priceDiscount)}
              </p>
              <p className="home-product-price-sub ">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </p>
            </>
          ) : (
            <>
              <p className="home-product-price-main">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
