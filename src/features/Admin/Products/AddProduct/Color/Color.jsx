// import React, { useEffect, useState } from "react";
// import Select from "react-select";
// import colorAPI from "../../../../../api/colorAPI";
// import Size from "../Size/Size";

// Color.propTypes = {};

// function Color(props) {
//   const [colorProduct, setColorProduct] = useState({
//     _id: "6230af3a0977b634fd932330",
//     value: "#F3FF00",
//     label: "Vàng",
//   });

//   const [image, setImage] = useState();
//   const [imagePreview, setImagePreview] = useState();
//   const [listSize, setListSize] = useState([]);
//   const [color_temp, setColor_temp] = useState([]);
//   let listColor = [];
//   const [listSizeQuantityProduct, setListSizeQuantityProduct] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await colorAPI.getAll();
//         if (response.status === 200) {
//           setColor_temp(response.data.data);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, []);

//   const handleClickAddSize = (event) => {
//     setListSize(
//       listSize.concat(
//         <Size
//           key={listSize.length}
//           gen={Math.floor(Math.random() * 1000 + 1)}
//           sendSizeAndQuantity={handleReceiveSizeAndQuantity}
//         />
//       )
//     );
//   };

//   color_temp.forEach((element) => {
//     listColor.push({
//       _id: element._id,
//       value: element.color,
//       label: element.name,
//     });
//   });

//   const handleSelectColor = (newValue) => {
//     setColorProduct(newValue);
//   };

//   const handleAddImage = (e) => {
//     e.preventDefault();
//     const fileSelected = e.target.files[0];

//     if (fileSelected && fileSelected.type.substr(0, 5) === "image") {
//       setImage(fileSelected);
//     } else {
//       setImage(undefined);
//     }
//   };

//   useEffect(() => {
//     if (image) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(image);
//     } else {
//       setImagePreview(undefined);
//     }
//   }, [image]);

//   const handleReceiveSizeAndQuantity = (value) => {
//     // console.log(value);
//     setListSizeQuantityProduct([...listSizeQuantityProduct, value]);
//     // setSend(true);
//     // if (listSizeQuantityProduct.length < 1) {
//     //   setListSizeQuantityProduct([value]);
//     // } else {
//     //   const index = listSizeQuantityProduct.findIndex(
//     //     (x) => x.gen === value.gen
//     //   );
//     //   if (index > -1) {
//     //     // setListSizeQuantityProduct([listSizeQuantityProduct.splice(index, 1)]);
//     //     setListSizeQuantityProduct(
//     //       listSizeQuantityProduct.filter((x) => x.gen !== value.gen)
//     //     );
//     //     setListSizeQuantityProduct([...listSizeQuantityProduct, value]);
//     //   } else {
//     //     setListSizeQuantityProduct([...listSizeQuantityProduct, value]);
//     //   }
//     // }
//   };

//   useEffect(() => {
//     console.log(listSizeQuantityProduct);
//     props.sendColorAndSize({
//       image: { image: image, color: colorProduct._id },
//       details: {
//         image: image,
//         color: colorProduct._id,
//         listProductDetail: listSizeQuantityProduct,
//       },
//     });
//   }, [colorProduct._id, image, listSizeQuantityProduct, props]);

//   return (
//     <div className="admin-addproduct-color">
//       <div className="admin-addproduct-color-left">
//         <div className="admin-addproduct-color-left-image">
//           <img
//             src={
//               imagePreview ??
//               "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
//             }
//             alt=""
//           />
//         </div>
//         <button>
//           <input type="file" accept="image/*" onChange={handleAddImage} />
//           Thêm hình ảnh
//         </button>
//       </div>
//       <div className="admin-addproduct-color-right">
//         <div className="admin-addproduct-color-right-color-button">
//           <div className="admin-addproduct-color-right-color">
//             <label htmlFor="">Màu sắc</label>
//             <div className="admin-addproduct-color-right-color-select">
//               <Select
//                 fullWidth
//                 options={listColor}
//                 defaultValue={{
//                   _id: "6230af3a0977b634fd932330",
//                   value: "#F3FF00",
//                   label: "Vàng",
//                 }}
//                 onChange={handleSelectColor}
//               />
//             </div>
//           </div>
//           <div className="admin-addproduct-color-right-button">
//             <button onClick={handleClickAddSize}>Thêm size</button>
//           </div>
//         </div>

//         {listSize}
//       </div>
//     </div>
//   );
// }

// export default Color;
