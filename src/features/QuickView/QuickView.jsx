import React, { useState } from "react";
import QuickViewImageSlider from "./components/QuickViewImageSlider";
import data from "../../data/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./QuickView.scss";
import Rating from "@material-ui/lab/Rating";

QuickView.propTypes = {};

function QuickView({ closeQuickView }) {
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);

  const sizes = [
    { id: "1", size: "S" },
    { id: "2", size: "M" },
    { id: "3", size: "L" },
    { id: "4", size: "XL" },
  ];

  const handleClose = () => {
    closeQuickView(false);
  };

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

  return (
    <>
      <div className="quickview">
        <div className="quickview-left">
          <QuickViewImageSlider data={data.data} />
        </div>
        <div className="quickview-right">
          <div className="quickview-exit">
            <div className="quickview-container" onClick={handleClose}>
              <i className="bi bi-x"></i>
            </div>
          </div>
          <div className="quickview-name">Áo thun BC Space Theme</div>
          <div className="quickview-rate">
            <Rating
              name="half-rating-read"
              defaultValue={5}
              precision={0.1}
              readOnly
              size="small"
            />
          </div>
          <div className="quickview-pricemain">355.000 VNĐ</div>
          <div className="quickview-pricesale">295.000 VNĐ</div>
          <div className="quickview-color">
            <p className="quickview-color-title">Màu sắc</p>
            {colors.map((item) => (
              <div
                key={item.id}
                className={`${"quickview-color-item"} ${
                  color === item.color ? "active-color" : ""
                }`}
                onClick={() => setColor(item.color)}
              >
                <div className={`circle bg-${item.color}`}></div>
              </div>
            ))}
          </div>
          <div className="quickview-size">
            <p className="quickview-size-title">Kích cỡ</p>
            {sizes.map((item) => (
              <span
                key={item.id}
                className={`${"quickview-size-item"} ${
                  size === item.size ? "active-size" : ""
                }`}
                onClick={() => setSize(item.size)}
              >
                {item.size}
              </span>
            ))}
          </div>
          <div className="quickview-btn-group">
            <div className="quickview-btn-group-left">
              <div className="quickview-minus">
                <i className="bi bi-dash-lg"></i>
              </div>
              <div className="quickview-quantity">1</div>
              <div className="quickview-plus">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
            <div className="quickview-btn-group-right">
              <i className="bi bi-handbag"></i>Thêm vào giỏ hàng
            </div>
          </div>
          <div className="quickview-details">
            <div className="quickview-details-container">Xem chi tiết</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickView;
