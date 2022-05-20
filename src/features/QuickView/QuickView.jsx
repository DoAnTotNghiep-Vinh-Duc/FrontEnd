// import { Rating } from "@material-ui/lab";
// import PropTypes from "prop-types";
// import React, { useState } from "react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import useProductDetail from "../../hooks/useProductDetail";
// import QuickViewImageSlider from "./components/QuickViewImageSlider";
// import "./QuickView.scss";

// QuickView.propTypes = {
//   productSelected: PropTypes.object.isRequired,
// };

// QuickView.defaultProps = {
//   productSelected: {},
// };

// function QuickView({ closeQuickView, productSelected }) {
//   const [color, setColor] = useState(undefined);
//   const [size, setSize] = useState(undefined);
//   const [sizeDetails, setSizeDetails] = useState([]);
//   const [productDetails, setProductDetails] = useState([]);

//   const { product, colorDetails } = useProductDetail(productSelected._id);

//   const handleClose = () => {
//     closeQuickView(false);
//   };

//   const handleClickColor = (item) => {
//     setColor(Object.keys(item)[0]);
//     setSizeDetails(Object.values(item)[0]);
//     setSize(undefined);
//   };

//   const handleClickSize = (item) => {
//     setSize(item.size);
//     setProductDetails(item);
//   };

//   return (
//     <>
//       <div className="quickview">
//         <div className="quickview-left">
//           <QuickViewImageSlider data={product.images} />
//         </div>
//         <div className="quickview-right">
//           <div className="quickview-exit">
//             <div className="quickview-container" onClick={handleClose}>
//               <i className="bi bi-x"></i>
//             </div>
//           </div>
//           <div className="quickview-name">{product.name}</div>
//           <div className="quickview-rate">
//             <Rating
//               name="half-rating-read"
//               precision={0.1}
//               readOnly
//               value={product.point ?? 0}
//               size="small"
//             />
//           </div>
//           <div className="quickview-pricemain">
//             {new Intl.NumberFormat("vi-VN", {
//               style: "currency",
//               currency: "VND",
//             }).format(product.price)}
//           </div>
//           <div className="quickview-pricesale">
//             {new Intl.NumberFormat("vi-VN", {
//               style: "currency",
//               currency: "VND",
//             }).format(product.price)}
//           </div>
//           <div className="quickview-color">
//             <p className="quickview-color-title">Màu sắc</p>
//             {colorDetails.map((item, index) => (
//               <div
//                 key={index}
//                 className={`${"quickview-color-item"} ${
//                   color === Object.keys(item)[0] ? "active-color" : ""
//                 }`}
//                 onClick={() => handleClickColor(item)}
//               >
//                 <div
//                   className={`circle`}
//                   style={{ backgroundColor: `${Object.keys(item)[0]}` }}
//                 ></div>
//               </div>
//             ))}
//           </div>
//           <div className="quickview-size">
//             <p className="quickview-size-title">Kích cỡ</p>
//             {sizeDetails.length ? (
//               <>
//                 {sizeDetails.map((item, index) => (
//                   <span
//                     key={index}
//                     className={`${"quickview-size-item"} ${
//                       size === item.size ? "active-size" : ""
//                     }`}
//                     onClick={() => handleClickSize(item)}
//                   >
//                     {item.size}
//                   </span>
//                 ))}
//               </>
//             ) : (
//               <p>Vui lòng chọn màu trước</p>
//             )}
//           </div>
//           <div className="quickview-btn-group">
//             <div className="quickview-btn-group-left">
//               <div className="quickview-minus">
//                 <i className="bi bi-dash-lg"></i>
//               </div>
//               <div className="quickview-quantity">1</div>
//               <div className="quickview-plus">
//                 <i className="bi bi-plus-lg"></i>
//               </div>
//             </div>
//             <div className="quickview-btn-group-right">
//               <i className="bi bi-handbag"></i>Thêm vào giỏ hàng
//             </div>
//           </div>
//           <div className="quickview-details">
//             <div className="quickview-details-container">Xem chi tiết</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default QuickView;
