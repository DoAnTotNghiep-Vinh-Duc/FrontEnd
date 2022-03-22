import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@material-ui/core";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const [value, setValue] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) {
      onChange(value);
    }
    setValue({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Fragment>
      <div className="product-content-filter-price-title">Giá cả</div>
      <div className="product-content-filter-price-filter">
        <label className="product-content-filter-price-filter-container">
          0 - 150.000
          <input type="checkbox" />
          <span className="checkmark-price"></span>
        </label>

        <label className="product-content-filter-price-filter-container">
          150.000 - 300.000
          <input type="checkbox" />
          <span className="checkmark-price"></span>
        </label>
        <label className="product-content-filter-price-filter-container">
          300.000 - 500.000
          <input type="checkbox" />
          <span className="checkmark-price"></span>
        </label>
        <label className="product-content-filter-price-filter-container">
          {">"} 500.000
          <input type="checkbox" />
          <span className="checkmark-price"></span>
        </label>
      </div>
      <div className="product-content-filter-price-filter-input">
        <label htmlFor="">Chọn khoảng giá</label>
        <div className="product-content-filter-price-filter-input-container">
          <div className="product-content-filter-price-filter-input-min">
            <TextField
              id="outlined-basic"
              label="Thấp"
              variant="outlined"
              size="small"
              type="number"
              name="salePrice_gte"
              value={value.salePrice_gte}
              onChange={handleChange}
            />
          </div>
          <i className="bi bi-arrow-right-short"></i>
          <div className="product-content-filter-price-filter-input-max">
            <TextField
              id="outlined-basic"
              label="Cao"
              variant="outlined"
              size="small"
              type="number"
              name="salePrice_lte"
              value={value.salePrice_lte}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={handleSubmit}
        >
          Tìm
        </Button>
      </div>
    </Fragment>
  );
}

export default FilterByPrice;
