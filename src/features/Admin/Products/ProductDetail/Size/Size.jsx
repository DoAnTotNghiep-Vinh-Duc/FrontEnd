import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import listSize from "../../../../../data/size.json";

Size.propTypes = {
  size: PropTypes.object,
};

function Size(props) {
  const { size } = props;

  const [sizeProduct, setsizeProduct] = useState({
    _id: size._id,
    label: size.size,
    value: size.size,
    quantity: size.quantity,
    status: size.status,
    color: size.color._id,
  });

  const handleSelectSizeProduct = (newValue) => {
    setsizeProduct({
      ...sizeProduct,
      value: newValue.value,
      label: newValue.label,
    });
  };

  const handleChangeQuantityProduct = (event) => {
    setsizeProduct({
      ...sizeProduct,
      quantity: Number(event.target.value),
    });
  };

  useEffect(() => {
    props.sendSizeAndQuantity(sizeProduct);
  }, [props, sizeProduct]);

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
          type="number"
          label="Số Lượng"
          value={sizeProduct.quantity}
          onChange={handleChangeQuantityProduct}
        />
      </div>
      <div className="admin-productDetail-product-infor-size-delete">
        <i className="bi bi-x-lg"></i>
      </div>
    </div>
  );
}

export default Size;
