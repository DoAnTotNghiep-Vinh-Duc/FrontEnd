// import TextField from "@material-ui/core/TextField";
// import React, { useEffect, useState } from "react";
// import size from "../../../../../data/size.json";
// import Select from "react-select";
// import PropTypes from "prop-types";

// Size.propTypes = {
//   gen: PropTypes.number,
// };

// function Size(props) {
//   const { gen } = props;
//   const [sizeProduct, setSizeProduct] = useState({
//     value: "S",
//     label: "S",
//     quantity: 0,
//     gen: gen,
//   });
//   // const [quantityProduct, setQuantityProduct] = useState(0);

//   const handleChangSizeProduct = (newValue) => {
//     setSizeProduct({
//       ...sizeProduct,
//       label: newValue.label,
//       value: newValue.value,
//     });
//   };
//   const handleChangQuantityProduct = (event) => {
//     setSizeProduct({
//       ...sizeProduct,
//       quantity: Number(event.target.value),
//     });
//   };

//   useEffect(() => {
//     props.sendSizeAndQuantity(sizeProduct);
//   }, [props, sizeProduct]);

//   return (
//     <div className="admin-addproduct-color-right-size">
//       <div className="admin-addproduct-color-right-size-select">
//         <Select
//           fullWidth
//           options={size}
//           defaultValue={sizeProduct}
//           onChange={handleChangSizeProduct}
//         />
//       </div>
//       <div className="admin-addproduct-color-right-size-quantity">
//         <TextField
//           id="outlined-basic"
//           variant="outlined"
//           size="small"
//           fullWidth
//           label="Số lượng"
//           type="number"
//           value={sizeProduct.quantity}
//           onChange={handleChangQuantityProduct}
//         />
//       </div>
//     </div>
//   );
// }

// export default Size;
