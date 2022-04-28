import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import favoriteAPI from "../../../api/favoriteAPI";

toast.configure();
ProductFavorite.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function ProductFavorite({ product }) {
  const classes = useStyles();
  const History = useHistory();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);

  const handleClickViewDetail = () => {
    History.push(`/products/${product._id}`);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickRemoveProduct = () => {
    (async () => {
      try {
        const response = await favoriteAPI.removeProductFromFavorite({
          productId: product._id,
        });
        if (response.status === 204) {
          toast.success("Xóa khỏi danh sách yêu thích thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          setOpen(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <div className="favorite-product">
        <div className="favorite-product-infor">
          <div className="favorite-product-infor-left">
            <img
              src={
                product.images[
                  Math.floor(Math.random() * product.images.length)
                ]
              }
              alt=""
            />
          </div>
          <div className="favorite-product-infor-right">
            <div className="favorite-product-infor-right-name">
              {product.name}
            </div>
          </div>
        </div>
        <div className="favorite-product-price">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price * (1 - product.discount.percentDiscount))}
        </div>
        <div className="favorite-product-stock">
          {product.status === "SOLDOUT" ? "Hết Hàng" : "Còn hàng"}
        </div>
        <div className="favorite-product-delete">
          <i className="bi bi-x-lg" onClick={handleClickOpen}></i>
        </div>
        <div className="favorite-product-add">
          <button onClick={handleClickViewDetail}>Xem chi tiết</button>
        </div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Xác nhận"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có chắc là xóa sản phẩm này ra khỏi danh sách yêu thích?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} size="small">
            Hủy
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={handleClickRemoveProduct}
          >
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ProductFavorite;
