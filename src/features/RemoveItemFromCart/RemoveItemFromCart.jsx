import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { Fragment, useContext } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import cartAPI from "../../api/cartAPI";
import { ACTIONS } from "../../context/actions";
import { GlobalContext } from "../../context/context";
import { deleteItem } from "../../redux/cartSlice";

toast.configure();
RemoveItemFromCart.propTypes = {};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function RemoveItemFromCart({ closeRemoveItem, productDetail }) {
  const classes = useStyles();
  const { dispatch } = useContext(GlobalContext);
  const dispatchCartSlice = useDispatch();
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
          productDetailId: productDetail.productDetail._id,
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

          const action = deleteItem({
            idProduct: productDetail.productDetail._id,
          });
          dispatchCartSlice(action);

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
        <Button onClick={handleClose} variant="outlined">
          Hủy
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={handleRemoveItem}
        >
          Xóa
        </Button>
      </DialogActions>
    </Fragment>
  );
}

export default RemoveItemFromCart;
