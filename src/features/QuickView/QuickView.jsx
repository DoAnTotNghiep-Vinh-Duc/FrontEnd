import { Rating } from "@material-ui/lab";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import cartAPI from "../../api/cartAPI.js";
import Loading from "../../components/Loading/Loading";
import { ACTIONS } from "../../context/actions.js";
import { GlobalContext } from "../../context/context";
import useProductDetail from "../../hooks/useProductDetail";
import QuickViewImageSlider from "./components/QuickViewImageSlider";
import "./QuickView.scss";

toast.configure();
QuickView.propTypes = {
  productSelected: PropTypes.object.isRequired,
};

QuickView.defaultProps = {
  productSelected: {},
};

function QuickView({ closeQuickView, productSelected }) {
  const userLogin = useSelector((state) => state.user.currentUser);
  const { product, colorDetails } = useProductDetail(productSelected._id);
  const { dispatch } = useContext(GlobalContext);
  const history = useHistory();

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [sizeDetails, setSizeDetails] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [disable, setDisable] = useState(true);
  const [loadingAdd, setLoadingAdd] = useState(false);

  const handleClickColor = (item) => {
    setColor(Object.keys(item)[0]);
    setSizeDetails(Object.values(item)[0]);
    setSize(undefined);
  };

  const handleClickSize = (item) => {
    setSize(item.size);
    setProductDetails(item);
  };

  useEffect(() => {
    if (color === undefined || size === undefined) {
      setDisable(true);
    } else if (!userLogin) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [color, size, userLogin]);

  const handleClose = () => {
    closeQuickView(false);
  };

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const handleAddProduct = () => {
    if (disable) return;

    setLoadingAdd(true);

    (async () => {
      try {
        const response = await cartAPI.addItemToCart({
          productDetailId: productDetails._id,
          quantity: quantity,
        });
        if (response.status === 204) {
          (async () => {
            try {
              const response = await cartAPI.getCartByAccountId();
              dispatch({
                type: ACTIONS.dataCart,
                payload: response.data.data,
              });
            } catch (error) {
              console.log(error);
            }
          })();

          toast.success("Thêm vào giỏ hành thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          closeQuickView(false);
        }
      } catch (error) {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          theme: "dark",
        });
      }
    })();

    setTimeout(() => {
      setLoadingAdd(false);
    }, 300);
  };

  const handleClick = () => {
    history.push(`/products/${product._id}`);
  };

  return (
    <>
      {loadingAdd && <Loading />}
      <div className="quickview">
        <div className="quickview-left">
          <QuickViewImageSlider data={product.images} />
        </div>
        <div className="quickview-right">
          <div className="quickview-exit">
            <div className="quickview-container" onClick={handleClose}>
              <i className="bi bi-x"></i>
            </div>
          </div>
          <div className="quickview-name">{product.name}</div>
          <div className="quickview-rate">
            <Rating
              name="half-rating-read"
              precision={0.1}
              readOnly
              value={product.point ?? 0}
              size="small"
            />
          </div>
          <div className="quickview-pricemain">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price)}
          </div>
          <div className="quickview-pricesale">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.priceDiscount)}
          </div>
          <div className="quickview-color">
            <p className="quickview-color-title">Màu sắc</p>
            {colorDetails.map((item, index) => (
              <div
                key={index}
                className={`${"quickview-color-item"} ${
                  color === Object.keys(item)[0] ? "active-color" : ""
                }`}
                onClick={() => handleClickColor(item)}
              >
                <div
                  className={`circle`}
                  style={{ backgroundColor: `${Object.keys(item)[0]}` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="quickview-size">
            <p className="quickview-size-title">Kích cỡ</p>
            {sizeDetails.length ? (
              <>
                {sizeDetails.map((item, index) => (
                  <span
                    key={index}
                    className={`${"quickview-size-item"} ${
                      size === item.size ? "active-size" : ""
                    }`}
                    onClick={() => handleClickSize(item)}
                  >
                    {item.size}
                  </span>
                ))}
              </>
            ) : (
              <p>Vui lòng chọn màu trước</p>
            )}
          </div>
          <div className="quickview-btn-group">
            <div className="quickview-btn-group-left">
              <div className="quickview-minus">
                <i
                  className="bi bi-dash-lg"
                  onClick={() => updateQuantity("minus")}
                ></i>
              </div>
              <div className="quickview-quantity"> {quantity}</div>
              <div className="quickview-plus">
                <i
                  className="bi bi-plus-lg"
                  onClick={() => updateQuantity("plus")}
                ></i>
              </div>
            </div>
            <button
              className={`${"quickview-btn-group-right"} ${
                disable ? "disable" : ""
              }`}
              onClick={handleAddProduct}
            >
              <i className="bi bi-handbag"></i>Thêm vào giỏ hàng
            </button>
          </div>
          <div className="quickview-details">
            <div className="quickview-details-container" onClick={handleClick}>
              Xem chi tiết
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickView;
