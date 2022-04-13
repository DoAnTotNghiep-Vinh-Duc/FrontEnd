import Rating from "@material-ui/lab/Rating";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import cartAPI from "../../api/cartAPI";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import useProductDetail from "../../hooks/useProductDetail";
import ProductImageSlider from "./components/ProductImageSlider";
import "./css/ProductDetailPage.scss";

ProductDetailPage.propTypes = {};

function ProductDetailPage(props) {
  const local = localStorage.getItem("account");
  const account = local && JSON.parse(local);

  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const [sizeDetails, setSizeDetails] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading, colorDetails } = useProductDetail(productId);

  if (loading) {
    return <div>Loading</div>;
  }

  const handleClickColor = (item) => {
    setColor(Object.keys(item)[0]);
    setSizeDetails(Object.values(item)[0]);
    setSize(undefined);
  };

  const handleClickSize = (item) => {
    setSize(item.size);
    setProductDetails(item);
  };

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
    if (check()) {
      (async () => {
        try {
          const response = await cartAPI.addItemToCart({
            accountId: account._id,
            productDetailId: productDetails._id,
            quantity: quantity,
          });

          console.log(response);
        } catch (error) {
          console.log(error);
        }
      })();
    }
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
            <ProductImageSlider data={product.images} />
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
                    defaultValue={product.point}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                </div>
                <div className="product-details-content-product-infor-rate-number">
                  ({product.voted})
                </div>
              </div>
              <div className="product-details-content-product-infor-price">
                <span className="product-details-content-product-infor-price-original">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price)}
                </span>
                <span className="product-details-content-product-infor-price-sale">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price)}
                </span>
              </div>
              <div className="product-details-content-product-infor-descripton">
                {product.description}
              </div>
              <div className="product-details-content-product-infor-color">
                <span className="product-details-content-product-infor-color-title">
                  Màu sắc
                </span>
                <div className="product-details-content-product-infor-color-filter">
                  {colorDetails.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`${"product-details-content-product-infor-color-filter-container"} ${
                          color === Object.keys(item)[0] ? "active-color" : ""
                        }`}
                        onClick={() => handleClickColor(item)}
                      >
                        <div
                          className={`circle`}
                          style={{ backgroundColor: `${Object.keys(item)[0]}` }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="product-details-content-product-infor-size">
                <span className="product-details-content-product-infor-size-title">
                  Kích cỡ
                </span>
                <div className="product-details-content-product-infor-size-container">
                  {sizeDetails.length ? (
                    <>
                      {sizeDetails.map((item, index) => (
                        <span
                          key={index}
                          className={`${"size"} ${
                            size === item.size ? "active-size" : ""
                          }`}
                          onClick={() => handleClickSize(item)}
                        >
                          {item.size}
                        </span>
                      ))}
                    </>
                  ) : (
                    <p>Vui lòng chọn màu trước</p>
                  )}

                  {/* <span className="size size-none">
                    M<div className="line"></div>
                  </span> */}
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
