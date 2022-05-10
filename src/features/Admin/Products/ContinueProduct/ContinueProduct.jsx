import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { toast } from "react-toastify";
import adminAPI from "../../../../api/adminAPI";

toast.configure();
ContinueProduct.propTypes = {
  productId: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function ContinueProduct(props) {
  const { productId } = props;
  const classes = useStyles();

  const handleClose = () => {
    props.closeContinue(false);
  };

  const handleContinueSellProduct = () => {
    (async () => {
      try {
        const response = await adminAPI.continueSellProduct(productId);
        if (response.status === 200) {
          toast.success("Bán lại sản phẩm thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          props.closeContinue(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        {"Bán lại sản phẩm?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Sản phẩm này hiện tại đang ngừng bán. Bạn có muốn chắc chắn sẽ bán lại
          sản phẩm này không?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Hủy
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleContinueSellProduct}
        >
          Xác nhận
        </Button>
      </DialogActions>
    </>
  );
}

export default ContinueProduct;
