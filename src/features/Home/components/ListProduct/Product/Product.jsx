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
  };

  return (
    <div className="home-product">
      <div className="home-product-image">
        <div className="home-product-image-container" onClick={handleClick}>
          <img
            src={
              product.images[
                Math.floor(Math.random() * product.images.length)
              ] ??
              "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
            }
            alt=""
            effect="blur"
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
        {product.discount.percentDiscount > 0 ? (
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
            }).format(product.price * (1 - product.discount.percentDiscount))}
          </p>
          <p className="home-product-price-sub ">
            {product.discount.percentDiscount > 0 ? (
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
