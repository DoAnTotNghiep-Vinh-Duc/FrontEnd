import { Button, TextField } from "@material-ui/core";
import React, { Fragment } from "react";

FilterByPrice.propTypes = {};

function FilterByPrice({ onChange }) {
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
            />
          </div>
        </div>
        <Button color="primary" variant="outlined" size="small">
          Tìm
        </Button>
      </div>
    </Fragment>
  );
}

export default FilterByPrice;
