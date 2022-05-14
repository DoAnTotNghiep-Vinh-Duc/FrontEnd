import React, { useEffect, useState } from "react";
import colorAPI from "../../../../../api/colorAPI";

FilterByColor.propTypes = {};

function FilterByColor(props) {
  const [listColor, setListColor] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await colorAPI.getAll();
        setListColor(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChange = (color) => {
    props.onChange(color.name);
  };

  return (
    <>
      <div className="product-content-filter-color-title">Màu sắc</div>
      <div className="product-content-filter-color-filter">
        {listColor.map((color) => {
          return (
            <label
              className="product-content-filter-color-filter-container"
              key={color._id}
            >
              {color.name}
              <input type="checkbox" onChange={() => handleChange(color)} />
              <span
                className="checkmark-color"
                style={{ backgroundColor: `${color.color}` }}
              ></span>
            </label>
          );
        })}
      </div>
    </>
  );
}

export default FilterByColor;
