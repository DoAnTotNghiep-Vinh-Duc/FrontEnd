import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Select from "react-select";

ProductSort.propTypes = {
  onChange: PropTypes.func,
};

function ProductSort(props) {
  const data = [
    {
      value: "price-asc",
      label: "Giá thấp - cao",
    },
    {
      value: "price-desc",
      label: "Giá cao - thấp",
    },
    {
      value: "best-selling",
      label: "Bán chạy",
    },
    {
      value: "new-product",
      label: "Sản phẩm mới",
    },
  ];

  const handleSortChange = (newValue) => {
    props.onChange(newValue.value);
  };

  return (
    <Fragment>
      <div className="sort">
        <label htmlFor="sort">Sắp xếp:</label>
        <div className="sort-select">
          <Select
            options={data}
            onChange={handleSortChange}
            defaultValue={{ value: "price-asc", label: "Giá thấp - cao" }}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ProductSort;
