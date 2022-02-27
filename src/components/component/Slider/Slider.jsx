import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slide8 from "../../../assets/images/slide8.png";
import slide9 from "../../../assets/images/slide9.png";
import "./slide.css";
import "./slide.scss";

Slide.propTypes = {};

function Slide(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider-image">
          <img src={slide8} alt="" />
          <div className="slider-image-content">
            <div className="slider-content1">DISCOUNT</div>
            <div className="slider-content2">MEN'S SHIRT</div>
            <div className="slider-content3">
              <p>New Modern Stylist Fashionable Men's Wearholder</p>
              bag maxcan weather holder.
            </div>
            <div className="slider-content4">Mua ngay !</div>
          </div>
        </div>
        <div className="slider-image">
          <img src={slide9} alt="" />
          <div className="slider-image-content">
            <div className="slider-content1">DISCOUNT</div>
            <div className="slider-content2">WOMAN'S FASHION</div>
            <div className="slider-content3">
              <p>New Modern Stylist Fashionable Men's Wearholder</p>
              bag maxcan weather holder.
            </div>
            <div className="slider-content4">Mua ngay !</div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
