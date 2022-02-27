import Rating from "@material-ui/lab/Rating";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import product1_sub1 from "../../../../assets/productsub/product1_sub1.jpg";
import product1_sub2 from "../../../../assets/productsub/product1_sub2.jpg";
import product1_sub3 from "../../../../assets/productsub/product1_sub3.jpg";
import Footer from "../../../component/Footer/Footer";
import Header from "../../../component/Header/Header";
import Menu from "../../../component/Menu/Menu";
import useProductDetail from "../../../../hooks/useProductDetail";
import "./css/ProductDetailPage.css";
import "./css/ProductDetailPage.scss";

ProductDetailPage.propTypes = {};

function ProductDetailPage(props) {
  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return <div>Loading</div>;
  }

  console.log(product);

  return (
    <div className="product-details">
      <Header />
      <Menu />
      <div className="product-details-title">
        <div className="title">
          <Link to="/">Trang chủ / </Link>
          <span>Chi tiết sản phẩm</span>
        </div>
      </div>
      <div className="product-details-content">
        <div className="product-details-content-product">
          <div className="product-details-content-product-imagesub">
            <div className="product-details-content-product-imagesub-img">
              <img src={product1_sub1} alt="" />
            </div>
            <div className="product-details-content-product-imagesub-img">
              <img src={product1_sub2} alt="" />
            </div>
            <div className="product-details-content-product-imagesub-img">
              <img src={product1_sub3} alt="" />
            </div>
          </div>
          <div className="product-details-content-product-imagemain">
            <img src={product1_sub1} alt="" />
          </div>
          <div className="product-details-content-product-infor">
            <div className="product-details-content-product-infor-name">
              {product.name}
            </div>
            <div className="product-details-content-product-infor-rate">
              <div className="product-details-content-product-infor-rate-start">
                <Rating
                  name="half-rating-read"
                  defaultValue={5}
                  precision={0.1}
                  readOnly
                  size="small"
                />
              </div>
              <div className="product-details-content-product-infor-rate-number">
                (22)
              </div>
            </div>
            <div className="product-details-content-product-infor-price">
              <span className="product-details-content-product-infor-price-original">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.originalPrice)}
              </span>
              <span className="product-details-content-product-infor-price-sale">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.salePrice)}
              </span>
            </div>
            <div className="product-details-content-product-infor-descripton">
              {product.shortDescription}
            </div>
            <div className="product-details-content-product-infor-color">
              <span className="product-details-content-product-infor-color-title">
                Màu sắc
              </span>
              <div className="product-details-content-product-infor-color-filter">
                <label className="product-details-content-product-infor-color-filter-container">
                  <input type="radio" name="radio" />
                  <span className="checkmark-color-white"></span>
                </label>

                <label className="product-details-content-product-infor-color-filter-container">
                  <input type="radio" name="radio" />
                  <span className="checkmark-color-black"></span>
                </label>

                <label className="product-details-content-product-infor-color-filter-container">
                  <input type="radio" name="radio" />
                  <span className="checkmark-color-brown"></span>
                </label>

                <label className="product-details-content-product-infor-color-filter-container">
                  <input type="radio" name="radio" />
                  <span className="checkmark-color-ice"></span>
                </label>

                <label className="product-details-content-product-infor-color-filter-container">
                  <input type="radio" name="radio" />
                  <span className="checkmark-color-orange"></span>
                </label>

                <label className="product-details-content-product-infor-color-filter-container">
                  <input type="radio" name="radio" />
                  <span className="checkmark-color-blue"></span>
                </label>
              </div>
            </div>
            <div className="product-details-content-product-infor-size">
              Kích cỡ
              <span className="size">S</span>
              <span className="size size-selected">
                M<div className="line"></div>
              </span>
              <span className="size">L</span>
              <span className="size">XL</span>
            </div>
            <div className="product-details-content-product-infor-action">
              <i className="bi bi-dash-lg"></i>
              <div className="product-details-content-product-infor-action-quantity">
                2
              </div>
              <i className="bi bi-plus-lg"></i>
              <div className="product-details-content-product-infor-action-btnadd">
                <i className="bi bi-handbag"></i>
                Thêm vào giỏ hàng
              </div>

              <span className="product-details-content-product-infor-wishlist">
                <i className="bi bi-suit-heart"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
