import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import listSize from "../../../../../data/size.json";

AddSize.propTypes = {
  color: PropTypes.string,
  gen: PropTypes.number,
};

function AddSize(props) {
  const { color, gen } = props;

  const [sizeProduct, setSizeProduct] = useState({
    _id: undefined,
    label: "S",
    value: "S",
    quantity: 0,
    status: "ACTIVE",
    color: color,
    gen: gen,
  });

  const handleSelectSizeProduct = (newValue) => {
    setSizeProduct({
      ...sizeProduct,
      label: newValue.label,
      value: newValue.value,
    });
  };

  const handleChangeQuantityProduct = (event) => {
    setSizeProduct({
      ...sizeProduct,
      quantity: Number(event.target.value),
    });
  };

  useEffect(() => {
    props.sendSizeAndQuantity(sizeProduct);
  }, [props, sizeProduct]);

  const handleDeleteSize = () => {
    props.sendSizeDelete(sizeProduct);
  };

  return (
    <div className="admin-addproduct-product-infor-size-quantity">
      <div className="admin-addproduct-product-infor-size">
        <Select
          fullWidth
          options={listSize}
          defaultValue={sizeProduct}
          onChange={handleSelectSizeProduct}
        />
      </div>
      <div className="admin-addproduct-product-infor-quantity">
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
      <div className="admin-addproduct-product-infor-size-delete">
        <i className="bi bi-x-lg" onClick={handleDeleteSize}></i>
      </div>
    </div>
  );
}

export default AddSize;
