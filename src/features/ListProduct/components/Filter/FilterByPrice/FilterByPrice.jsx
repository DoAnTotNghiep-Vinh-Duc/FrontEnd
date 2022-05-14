import React, { Fragment } from "react";

FilterByPrice.propTypes = {};

function FilterByPrice(props) {
  let listPrice = [];

  const handleChange = (event) => {
    listPrice.length = 0;
    let arr = event.target.value.split("-");
    arr.forEach((element) => {
      listPrice.push(Number(element));
    });
    props.onChange(listPrice);
  };

  return (
    <Fragment>
      <div className="product-content-filter-price-title">Giá cả</div>
      <div className="product-content-filter-price-filter">
        <label className="product-content-filter-price-filter-container">
          0 - 150.000
          <input
            type="radio"
            name="price"
            value="0-150000"
            onChange={handleChange}
          />
          <span className="checkmark-price"></span>
        </label>
        <label className="product-content-filter-price-filter-container">
          150.000 - 300.000
          <input
            type="radio"
            name="price"
            value="150000-300000"
            onChange={handleChange}
          />
          <span className="checkmark-price"></span>
        </label>
        <label className="product-content-filter-price-filter-container">
          300.000 - 500.000
          <input
            type="radio"
            name="price"
            value="300000-500000"
            onChange={handleChange}
          />
          <span className="checkmark-price"></span>
        </label>
        <label className="product-content-filter-price-filter-container">
          {">"} 500.000
          <input
            type="radio"
            name="price"
            value="500000-5000000"
            onChange={handleChange}
          />
          <span className="checkmark-price"></span>
        </label>
      </div>
    </Fragment>
  );
}

export default FilterByPrice;
