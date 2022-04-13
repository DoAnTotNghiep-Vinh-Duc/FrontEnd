import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React, { Fragment } from "react";
import cartAPI from "../../api/cartAPI";
import { toast } from "react-toastify";

toast.configure();
RemoveItemFromCart.propTypes = {};

function RemoveItemFromCart({ closeRemoveItem, productDetail }) {
  const local = localStorage.getItem("account");
  const account = local && JSON.parse(local);

  const handleClose = () => {
    closeRemoveItem(false);
  };

  const handleRemoveItem = () => {
    (async () => {
      try {
        const response = await cartAPI.removeItem({
          accountId: account._id,
          productDetailId: productDetail.productDetail,
        });
        if (response.status === 204) {
          toast.success("Xóa sản phẩm ra khỏi giỏ hàng thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          closeRemoveItem(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <Fragment>
      <DialogTitle id="responsive-dialog-title">{"Xác nhận?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn có chắc chắn xóa sản phẩm này ra khỏi giỏ hàng không?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Hủy
        </Button>
        <Button onClick={handleRemoveItem} color="primary">
          Xác nhận
        </Button>
      </DialogActions>
    </Fragment>
  );
}

export default RemoveItemFromCart;
