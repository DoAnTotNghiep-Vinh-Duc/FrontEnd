import Rating from "@material-ui/lab/Rating";
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
  };

  return (
    <div className="home-favoriteproduct">
      <div className="home-favoriteproduct-image">
        <div
          className="home-favoriteproduct-image-container"
          onClick={handleClick}
        >
          <img
            src={
              product.images[
                Math.floor(Math.random() * product.images.length)
              ] ??
              "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
            }
            alt=""
          />
          <img
            src={
              product.images[
                Math.floor(Math.random() * product.images.length)
              ] ??
              "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
            }
            alt=""
            className="home-favoriteproduct-img-hover"
          />
        </div>

        <div className="home-favoriteproduct-group-fuction">
          <ListButton product={product} />
        </div>
        <div className="home-favoriteproduct-addtocart">
          <i className="bi bi-handbag"></i>
          Thêm vào giỏ hàng
        </div>
        {product.priceDiscount !== product.price ? (
          <>
            <div className="home-favoriteproduct-promotion">Sale</div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="home-favoriteproduct-infor">
        <div className="home-favoriteproduct-rating">
          <Rating
            name="half-rating-read"
            value={product.point}
            precision={0.1}
            readOnly
          />
        </div>
        <div className="home-favoriteproduct-name">{product.name}</div>
        <div className="home-favoriteproduct-price">
          <p className="home-favoriteproduct-price-main">
            {product.priceDiscount}
          </p>
          <p className="home-favoriteproduct-price-sub ">
            {product.priceDiscount !== product.price ? (
              <>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
              </>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
