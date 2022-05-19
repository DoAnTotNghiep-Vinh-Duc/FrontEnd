import PropTypes from "prop-types";
import React, { Fragment, useContext, useState } from "react";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ACTIONS } from "../../../context/actions";
import { GlobalContext } from "../../../context/context";

ProductImageSlider.propTypes = {
  data: PropTypes.array,
  activeThumbsColor: PropTypes.any,
};

function ProductImageSlider({ data, activeThumbsColor }) {
  const { dispatch, state } = useContext(GlobalContext);

  const [activeThumbs, setActiveThumbs] = useState();

  const handleClick = () => {
    dispatch({
      type: ACTIONS.changeColor,
      payload: false,
    });
  };

  return (
    <Fragment>
      {data?.length ? (
        <>
          <Swiper
            loop={false}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumbsColor }}
            className="product-details-content-product-imagemain"
            style={{ display: state.changeColor ? "block" : "none" }}
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
            loop={false}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumbs }}
            className="product-details-content-product-imagemain"
            style={{ display: state.changeColor ? "none" : "block" }}
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
                <div
                  className="product-details-content-product-imagesub-img"
                  onClick={handleClick}
                >
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
