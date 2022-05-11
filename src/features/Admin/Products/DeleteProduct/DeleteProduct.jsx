import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import adminAPI from "../../../../api/adminAPI";
import { ACTIONS } from "../../../../context/actions";
import { GlobalContext } from "../../../../context/context";

toast.configure();
DeleteProduct.propTypes = {
  productId: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function DeleteProduct(props) {
  const { productId } = props;
  const classes = useStyles();
  const { dispatch } = useContext(GlobalContext);

  const handleClose = () => {
    props.closeDelete(false);
  };

  const handleDeleteProduct = () => {
    (async () => {
      try {
        const response = await adminAPI.stopSellProduct(productId);
        if (response.status === 200) {
          (async () => {
            try {
              const response = await adminAPI.getAllProduct({
                _page: 1,
                _limit: 5,
              });
              dispatch({
                type: ACTIONS.dataAllProductAdmin,
                payload: response.data,
              });
            } catch (error) {
              console.log(error);
            }
          })();
          toast.success("Dừng bán sản phẩm thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          props.closeDelete(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        {"Ngưng bán sản phẩm?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn có muốn chắc chắn ngưng bán sản phẩm này không? Bạn sẽ không thể
          chỉnh sửa hoặc bán nó tiếp tục nữa một khi bạn ngưng bán!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Hủy
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<HighlightOffIcon />}
          onClick={handleDeleteProduct}
        >
          Xác nhận
        </Button>
      </DialogActions>
    </>
  );
}

export default DeleteProduct;
