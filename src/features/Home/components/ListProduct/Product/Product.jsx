import React from "react";
import PropTypes from "prop-types";
import { Rating } from "@material-ui/lab";
import PhiHanhGia_black from "../../../../../assets/product/PhiHanhGia-black.jpg";
import PhiHanhGia_blue from "../../../../../assets/product/PhiHanhGia-blue.jpg";
import ListButton from "../../../../../components/ListButton/ListButton";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return (
    <div className="home-product">
      <div className="home-product-image">
        <img src={PhiHanhGia_black} alt="" effect="blur" />
        <img src={PhiHanhGia_blue} alt="" className="home-product-img-hover" />
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
            defaultValue={2.5}
            precision={0.1}
            readOnly
          />
        </div>
        <div className="home-product-name">{product.name}</div>
        <div className="home-product-price">
          <p className="home-product-price-main">{product.price}</p>
          <p className="home-product-price-sub ">{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
