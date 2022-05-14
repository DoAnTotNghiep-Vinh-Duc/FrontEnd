import React, { Fragment } from "react";
import size from "../../../../../data/size.json";

FilterBySize.propTypes = {};

function FilterBySize(props) {
  const handleChange = (size) => {
    props.onChange(size.value);
  };

  return (
    <Fragment>
      <div className="product-content-filter-branch-title">Kích cỡ</div>
      <div className="product-content-filter-branch-filter">
        {size.map((size, index) => {
          return (
            <label
              className="product-content-filter-branch-filter-container"
              key={index}
            >
              {size.label}
              <input type="checkbox" onChange={() => handleChange(size)} />
              <span className="checkmark-branch"></span>
            </label>
          );
        })}
      </div>
    </Fragment>
  );
}

export default FilterBySize;
