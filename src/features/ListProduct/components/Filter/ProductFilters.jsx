import Rating from "@material-ui/lab/Rating";
import React, { Fragment } from "react";
import FilterByBrand from "./FilterByBrand/FilterByBrand";
import FilterByPrice from "./FilterByPrice/FilterByPrice";

ProductFilters.propTypes = {};

function ProductFilters(props) {
  return (
    <Fragment>
      <div className="product-content-filter-branch">
        <FilterByBrand />
      </div>
      <div className="producr-content-filter-price">
        <FilterByPrice />
      </div>
      <div className="producr-content-filter-color">
        <div className="product-content-filter-color-title">Màu sắc</div>
        <div className="product-content-filter-color-filter">
          <label className="product-content-filter-color-filter-container">
            Trắng
            <input type="checkbox" />
            <span className="checkmark-color-white"></span>
          </label>

          <label className="product-content-filter-color-filter-container">
            Đen
            <input type="checkbox" />
            <span className="checkmark-color-black"></span>
          </label>
          <label className="product-content-filter-color-filter-container">
            Nâu
            <input type="checkbox" />
            <span className="checkmark-color-brown"></span>
          </label>
          <label className="product-content-filter-color-filter-container">
            Kem
            <input type="checkbox" />
            <span className="checkmark-color-ice"></span>
          </label>
          <label className="product-content-filter-color-filter-container">
            Cam
            <input type="checkbox" />
            <span className="checkmark-color-orange"></span>
          </label>
          <label className="product-content-filter-color-filter-container">
            Xanh
            <input type="checkbox" />
            <span className="checkmark-color-blue"></span>
          </label>
        </div>
      </div>
      <div className="producr-content-filter-rate">
        <div className="product-content-filter-rate-title">Rating</div>
        <div className="product-content-filter-rate-filter">
          <label className="product-content-filter-rate-filter-container">
            <input type="checkbox" />
            <span className="checkmark-rate"></span>
            <Rating name="half-rating-read" defaultValue={5} readOnly />
          </label>
          <label className="product-content-filter-rate-filter-container">
            <input type="checkbox" />
            <span className="checkmark-rate"></span>
            <Rating name="half-rating-read" defaultValue={4} readOnly />
          </label>
          <label className="product-content-filter-rate-filter-container">
            <input type="checkbox" />
            <span className="checkmark-rate"></span>
            <Rating name="half-rating-read" defaultValue={3} readOnly />
          </label>
          <label className="product-content-filter-rate-filter-container">
            <input type="checkbox" />
            <span className="checkmark-rate"></span>
            <Rating name="half-rating-read" defaultValue={2} readOnly />
          </label>
          <label className="product-content-filter-rate-filter-container">
            <input type="checkbox" />
            <span className="checkmark-rate"></span>
            <Rating name="half-rating-read" defaultValue={1} readOnly />
          </label>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductFilters;