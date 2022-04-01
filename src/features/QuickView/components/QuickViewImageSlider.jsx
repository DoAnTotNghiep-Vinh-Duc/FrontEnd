import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PhiHanhGia_black from "../../../assets/product/PhiHanhGia-black.jpg";

QuickViewImageSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

function QuickViewImageSlider({ data }) {
  return (
    <Fragment>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        className="quickview-left-imagemain"
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <img src={PhiHanhGia_black} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
}

export default QuickViewImageSlider;
