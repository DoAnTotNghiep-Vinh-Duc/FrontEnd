import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

QuickViewImageSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

QuickViewImageSlider.defaultProps = {
  data: [],
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
            <img src={value} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
}

export default QuickViewImageSlider;
