import Rating from "@material-ui/lab/Rating";
import React from "react";

FilterByRate.propTypes = {};

function FilterByRate(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <>
      <div className="product-content-filter-rate-title">Rating</div>
      <div className="product-content-filter-rate-filter">
        <label className="product-content-filter-rate-filter-container">
          <input type="radio" name="rate" value={5} onChange={handleChange} />
          <span className="checkmark-rate"></span>
          <Rating name="half-rating-read" defaultValue={5} readOnly />
        </label>
        <label className="product-content-filter-rate-filter-container">
          <input type="radio" name="rate" value={4} onChange={handleChange} />
          <span className="checkmark-rate"></span>
          <Rating name="half-rating-read" defaultValue={4} readOnly />
        </label>
        <label className="product-content-filter-rate-filter-container">
          <input type="radio" name="rate" value={3} onChange={handleChange} />
          <span className="checkmark-rate"></span>
          <Rating name="half-rating-read" defaultValue={3} readOnly />
        </label>
      </div>
    </>
  );
}

export default FilterByRate;
