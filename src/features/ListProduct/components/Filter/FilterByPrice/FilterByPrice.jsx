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
    </Fragment>
  );
}

export default FilterByPrice;
