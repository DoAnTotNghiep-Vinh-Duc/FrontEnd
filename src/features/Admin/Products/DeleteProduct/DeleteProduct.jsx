import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import React from "react";
import adminAPI from "../../../../api/adminAPI";
import { toast } from "react-toastify";

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

  const handleClose = () => {
    props.closeDelete(false);
  };

  const handleDeleteProduct = () => {
    (async () => {
      try {
        const response = await adminAPI.deleteProduct(productId);
        if (response.status === 200) {
          toast.success("Xóa sản phẩm thành công", {
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
      <DialogTitle id="responsive-dialog-title">{"Xóa sản phẩm?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn có muốn chắc chắn xóa sản phẩm này không? Bạn sẽ không thể chỉnh
          sửa hoặc nhìn thấy nó trong danh sách sản phẩm nữa một khi bạn đã xóa!
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
          startIcon={<DeleteIcon />}
          onClick={handleDeleteProduct}
        >
          Xóa
        </Button>
      </DialogActions>
    </>
  );
}

export default DeleteProduct;
