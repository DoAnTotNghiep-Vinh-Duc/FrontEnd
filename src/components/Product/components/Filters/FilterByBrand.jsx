import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import categoryApi from "../../../../api/categoryAPI";
import FilterByBrandSkeleton from "../skeleton/FilterByBrandSkeleton";

FilterByBrand.propTypes = {
  onChange: PropTypes.func,
};

function FilterByBrand({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.data.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
        setLoad(true);
      } catch (error) {
        console.log("Fail", error);
      }
    })();
  }, []);

  const handleBrandClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Fragment>
      <div className="product-content-filter-branch-title">Thương hiệu</div>
      <div className="product-content-filter-branch-filter">
        {!load ? (
          <FilterByBrandSkeleton length={6} />
        ) : (
          categoryList.map((category) => (
            <label
              className="product-content-filter-branch-filter-container"
              key={category.id}
              onClick={() => handleBrandClick(category)}
            >
              {category.name}
              <input type="checkbox" />
              <span className="checkmark-branch"></span>
            </label>
          ))
        )}
      </div>
    </Fragment>
  );
}

export default FilterByBrand;
