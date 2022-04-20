import React, { Fragment } from "react";

FilterByBrand.propTypes = {};

function FilterByBrand({ onChange }) {
  return (
    <Fragment>
      <div className="product-content-filter-branch-title">Thương hiệu</div>
      <div className="product-content-filter-branch-filter">
        <label className="product-content-filter-branch-filter-container">
          Adidas
          <input type="checkbox" />
          <span className="checkmark-branch"></span>
        </label>
      </div>
    </Fragment>
  );
}

export default FilterByBrand;
