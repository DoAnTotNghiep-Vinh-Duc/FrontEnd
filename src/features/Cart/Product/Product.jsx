import { Checkbox, Dialog, useMediaQuery, useTheme } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import cartAPI from "../../../api/cartAPI";
import {
  addToPayment,
  decreaseQuantity,
  increaseQuantity,
  removeFromPayment,
} from "../../../redux/cartSlice";
import RemoveItemFromCart from "../../RemoveItemFromCart/RemoveItemFromCart";

toast.configure();
Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [productDetail, setProductDetail] = useState(() => {
    const producttemp = product;
    return producttemp;
  });

  const [open, setOpen] = useState(false);
  const [itemRemove, setItemRemove] = useState({});
  const [checked, setChecked] = useState(true);

  const handleClickOpen = (element) => {
    setOpen(true);
    setItemRemove(element);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleIncreaseQuantity = (element) => {
    (async () => {
      try {
        const response = await cartAPI.increaseQuantity({
          productDetailId: element.productDetail._id,
        });
        if (response.status === 204) {
          setProductDetail({
            ...productDetail,
            quantity: productDetail.quantity + 1,
          });
          const action = increaseQuantity({
            idProduct: element.productDetail._id,
          });
          dispatch(action);
        }
      } catch (error) {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
          theme: "dark",
        });
      }
    })();
  };

  const handleDecreaseQuantity = (element) => {
    (async () => {
      try {
        const response = await cartAPI.decreaseQuantity({
          productDetailId: element.productDetail._id,
        });
        if (response.status === 204) {
          setProductDetail({
            ...productDetail,
            quantity: productDetail.quantity - 1,
          });
          const action = decreaseQuantity({
            idProduct: element.productDetail._id,
          });
          dispatch(action);
        }
      } catch (error) {
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
          theme: "dark",
        });
      }
    })();
  };

  useEffect(() => {
    const action = addToPayment({ product });
    dispatch(action);
  }, [dispatch, product]);

  const listProductCart = useSelector((state) => state.listProductCart);

  useEffect(() => {
    const check = listProductCart.listProductCart.findIndex(
      (x) => x.productDetail._id === product.productDetail._id
    );
    if (check >= 0) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [listProductCart.listProductCart, product.productDetail._id]);

  const handleClickAddToPayment = () => {
    const check = listProductCart.listProductCart.findIndex(
      (x) => x.productDetail._id === product.productDetail._id
    );
    if (check < 0) {
      const action = addToPayment({ product });
      dispatch(action);
    } else {
      const action = removeFromPayment({
        idNeedToRemove: product.productDetail._id,
      });
      dispatch(action);
    }
  };

  return (
    <>
      <div
        className="cart-content-cart-product"
        key={product.productDetail._id}
      >
        <div className="cart-content-cart-product-check">
          <Checkbox
            name="checkedB"
            color="primary"
            checked={checked}
            onChange={handleClickAddToPayment}
          />
        </div>
        <div className="cart-content-cart-product-container">
          <div className="cart-content-cart-product-image">
            <img src={product.productDetail.image} alt="" />
          </div>
          <div className="cart-content-cart-product-infor">
            <div className="cart-content-cart-product-infor-name">
              {product.productDetail.product.name}
            </div>
            <div className="cart-content-cart-product-infor-color">
              Màu sắc: {product.productDetail.color.name}
            </div>
            <div className="cart-content-cart-product-infor-size">
              Kích cỡ: {product.productDetail.size}
            </div>
          </div>
          <div className="cart-content-cart-product-price">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.priceDiscount)}
          </div>
          <div className="cart-content-cart-product-quantity">
            <i
              className="bi bi-dash-lg"
              onClick={() => handleDecreaseQuantity(product)}
            ></i>
            <div className="cart-content-cart-product-quantity-number">
              {productDetail.quantity}
            </div>
            <i
              className="bi bi-plus-lg"
              onClick={() => handleIncreaseQuantity(product)}
            ></i>
          </div>
          <div className="cart-content-cart-product-total">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(productDetail.quantity * productDetail.priceDiscount)}
          </div>
          <div className="cart-content-cart-product-delete">
            <i
              className="fas fa-times"
              onClick={() => handleClickOpen(product)}
            ></i>
          </div>
        </div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <RemoveItemFromCart
          closeRemoveItem={handleClose}
          productDetail={itemRemove}
        />
      </Dialog>
    </>
  );
}

export default Product;
