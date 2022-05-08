import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

ProductImageSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

function ProductImageSlider({ data }) {
  const [activeThumbs, setActiveThumbs] = useState();

  return (
    <Fragment>
      {data.length ? (
        <>
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
                  <img src={value} alt="" />
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
                  <img src={value} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <div className="product-details-content-product-imagemain">
          <div className="product-details-content-product-imagemain-container">
            <img
              src="https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
              alt=""
            />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default ProductImageSlider;
