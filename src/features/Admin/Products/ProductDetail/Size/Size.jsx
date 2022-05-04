import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Select from "react-select";
import listSize from "../../../../../data/size.json";

Size.propTypes = {
  size: PropTypes.object,
};

function Size(props) {
  const { size } = props;

  const [sizeProduct, setsizeProduct] = useState({
    value: size.size,
    label: size.size,
  });

  const handleSelectSizeProduct = (newValue) => {
    setsizeProduct(newValue);
  };

  return (
    <div className="admin-productDetail-product-infor-size-quantity">
      <div className="admin-productDetail-product-infor-size">
        <Select
          fullWidth
          options={listSize}
          defaultValue={sizeProduct}
          onChange={handleSelectSizeProduct}
        />
      </div>
      <div className="admin-productDetail-product-infor-quantity">
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          fullWidth
          label="Số Lượng"
          value={size.quantity}
        />
      </div>
      <div className="admin-productDetail-product-infor-size-delete">
        <i className="bi bi-x-lg"></i>
      </div>
    </div>
  );
}

export default Size;
