import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ContinueProduct from "../ContinueProduct/ContinueProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const history = useHistory();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDelete, setOpenDelete] = useState(false);
  const [openContinue, setOpenContinue] = useState(false);

  const handleClickDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleClickContinue = () => {
    setOpenContinue(true);
  };
  const handleCloseContinue = () => {
    setOpenContinue(false);
  };

  const handleClickViewDetail = () => {
    history.push(`${history.location.pathname}/${product._id}`);
  };

  return (
    <>
      <div
        className={`${"admin-products-content-body-listProducts-body-products-product"} ${
          product.status === "STOPSELLING" ? "stop" : ""
        }`}
      >
        <div className="admin-products-content-body-listProducts-body-products-product-seri">
          #{product._id.substring(product._id.length - 5, product._id.length)}
        </div>
        <div className="admin-products-content-body-listProducts-body-products-product-image">
          <img
            src={
              product.images[
                Math.floor(Math.random() * product.images.length)
              ] ??
              "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
            }
            alt=""
          />
        </div>
        <div className="admin-products-content-body-listProducts-body-products-product-name">
          {product.name}
        </div>
        <div className="admin-products-content-body-listProducts-body-products-product-stock">
          {product.quantity}
        </div>
        <div className="admin-products-content-body-listProducts-body-products-product-price">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price)}
        </div>
        <div className="admin-products-content-body-listProducts-body-products-product-category">
          {Math.floor(
            ((product.price - product.priceDiscount) / product.price) * 100
          )}
          %
        </div>
        <div className="admin-products-content-body-listProducts-body-products-product-action">
          <i className="bi bi-eye" onClick={handleClickViewDetail}></i>
          <i className="bi bi-x-octagon" onClick={handleClickDelete}></i>
        </div>
        <div className="stop-container">Dừng bán</div>
        <div className="stop-continue" onClick={handleClickContinue}>
          Bán lại
        </div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="responsive-dialog-title"
      >
        <DeleteProduct
          closeDelete={handleCloseDelete}
          productId={product._id}
        />
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={openContinue}
        onClose={handleCloseContinue}
        aria-labelledby="responsive-dialog-title"
      >
        <ContinueProduct
          closeContinue={handleCloseContinue}
          productId={product._id}
        />
      </Dialog>
    </>
  );
}

export default Product;
