import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Select from "react-select";

ProductSort.propTypes = {
  onChange: PropTypes.func,
};

function ProductSort({ onChange }) {
  const data = [
    {
      value: "salePrice:ASC",
      label: "Giá thấp - cao",
    },
    {
      value: "salePrice:DESC",
      label: "Giá cao - thấp",
    },
    {
      value: "name:ASC",
      label: "Tên A - Z",
    },
    {
      value: "name:DESC",
      label: "Tên Z - A",
    },
    {
      value: "bestseller",
      label: "Bán chạy",
    },
    {
      value: "favorite",
      label: "Yêu thích",
    },
  ];

  const handleSortChange = (newValue) => {
    if (onChange) {
      onChange(newValue.value);
    }
  };

  return (
    <Fragment>
      <div className="sort">
        <label htmlFor="sort">Sắp xếp:</label>
        <div className="sort-select">
          <Select
            options={data}
            onChange={handleSortChange}
            defaultValue={{ value: "salePrice:ASC", label: "Giá thấp - cao" }}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ProductSort;
