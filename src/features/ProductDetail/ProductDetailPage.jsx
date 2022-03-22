import Rating from "@material-ui/lab/Rating";
import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import data from "../../data/data";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import useProductDetail from "../../hooks/useProductDetail";
import ProductImageSlider from "./components/ProductImageSlider";
import "./css/ProductDetailPage.css";
import "./css/ProductDetailPage.scss";

ProductDetailPage.propTypes = {};

function ProductDetailPage(props) {
  const sizes = [
    { id: "1", size: "S" },
    { id: "2", size: "M" },
    { id: "3", size: "L" },
    { id: "4", size: "XL" },
  ];

  const colors = [
    {
      id: "1",
      color: "white",
    },
    {
      id: "2",
      color: "black",
    },
    {
      id: "3",
      color: "orange",
    },
    {
      id: "4",
      color: "red",
    },
    {
      id: "5",
      color: "blue",
    },
  ];

  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);

  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return <div>Loading</div>;
  }

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu sắc");
      return false;
    }
    if (size === undefined) {
      alert("Vui lòng chọn kích cỡ");
      return false;
    }
    return true;
  };

  const addToCart = () => {
    if (check()) console.log({ color, size, quantity });
  };

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
          <div className="product-details-content-product-left">
            <ProductImageSlider data={data.data} />
          </div>

          <div className="product-details-content-product-right">
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
                  {colors.map((item) => (
                    <div
                      key={item.id}
                      className={`${"product-details-content-product-infor-color-filter-container"} ${
                        color === item.color ? "active-color" : ""
                      }`}
                      onClick={() => setColor(item.color)}
                    >
                      <div className={`circle bg-${item.color}`}></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="product-details-content-product-infor-size">
                <span className="product-details-content-product-infor-size-title">
                  Kích cỡ
                </span>
                <div className="product-details-content-product-infor-size-container">
                  {sizes.map((item) => (
                    <span
                      key={item.id}
                      className={`${"size"} ${
                        size === item.size ? "active-size" : ""
                      }`}
                      onClick={() => setSize(item.size)}
                    >
                      {item.size}
                    </span>
                  ))}
                  {/* <span className="size">S</span>
                  <span className="size size-none">
                    M<div className="line"></div>
                  </span>
                  <span className="size">L</span>
                  <span className="size">XL</span> */}
                </div>
              </div>
              <div className="product-details-content-product-infor-action">
                <i
                  className="bi bi-dash-lg"
                  onClick={() => updateQuantity("minus")}
                ></i>
                <div className="product-details-content-product-infor-action-quantity">
                  {quantity}
                </div>
                <i
                  className="bi bi-plus-lg"
                  onClick={() => updateQuantity("plus")}
                ></i>
                <div
                  className="product-details-content-product-infor-action-btnadd"
                  onClick={addToCart}
                >
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
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
