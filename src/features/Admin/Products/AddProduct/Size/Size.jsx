import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import size from "../../../../../data/size.json";
import Select from "react-select";

Size.propTypes = {};

function Size(props) {
  const [sizeProduct, setSizeProduct] = useState("S");
  const [quantityProduct, setQuantityProduct] = useState(0);

  const handleChangSizeProduct = (newValue) => {
    setSizeProduct(newValue.value);
  };
  const handleChangQuantityProduct = (event) => {
    setQuantityProduct(event.target.value);
  };

  useEffect(() => {
    props.sendSizeAndQuantity({
      size: sizeProduct,
      quantity: Number(quantityProduct),
    });
  }, [props, quantityProduct, sizeProduct]);

  return (
    <div className="admin-addproduct-color-right-size">
      <div className="admin-addproduct-color-right-size-select">
        <Select
          fullWidth
          options={size}
          defaultValue={{
            value: "S",
            label: "S",
          }}
          onChange={handleChangSizeProduct}
        />
      </div>
      <div className="admin-addproduct-color-right-size-quantity">
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          fullWidth
          label="Số lượng"
          type="number"
          value={quantityProduct}
          onChange={handleChangQuantityProduct}
        />
      </div>
    </div>
  );
}

export default Size;
