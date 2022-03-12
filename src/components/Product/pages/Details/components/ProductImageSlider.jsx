import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import PhiHanhGia_black from "../../../../../assets/product/PhiHanhGia-black.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

ProductImageSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

function ProductImageSlider({ data }) {
  const [activeThumbs, setActiveThumbs] = useState();

  return (
    <Fragment>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumbs }}
        className="product-details-content-product-imagemain"
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <div className="product-details-content-product-imagemain-container">
              <img src={PhiHanhGia_black} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumbs}
        slidesPerView={4}
        spaceBetween={5}
        modules={[Navigation, Thumbs]}
        className="product-details-content-product-imagesub"
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <div className="product-details-content-product-imagesub-img">
              <img src={PhiHanhGia_black} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
}

export default ProductImageSlider;
