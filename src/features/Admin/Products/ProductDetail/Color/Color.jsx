import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React from "react";
import Size from "../Size/Size";

Color.propTypes = {
  color: PropTypes.object,
};

function Color(props) {
  const { color } = props;

  return (
    <div className="admin-productDetail-product">
      <div className="admin-productDetail-product-image">
        <div className="image-product">
          <img src={Object.values(color)[0][0].image} alt="" />
        </div>
        <button>THAY ĐỔI HÌNH ẢNH</button>
      </div>
      <div className="admin-productDetail-product-infor">
        <div className="admin-productDetail-product-infor-color-btn">
          <div className="admin-productDetail-product-infor-color">
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              fullWidth
              label="Màu Sắc"
              value={Object.values(color)[0][0].color.name}
            />
          </div>
          <div className="admin-productDetail-product-infor-btn">
            <button>Thêm size</button>
          </div>
        </div>
        <div className="admin-productDetail-product-infor-listSize">
          {Object.values(color)[0].map((item, index) => {
            return <Size key={index} size={item} />;
          })}
        </div>
      </div>
      <div className="admin-productDetail-product-button">
        <button>XÓA</button>
      </div>
    </div>
  );
}

export default Color;
