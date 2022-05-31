import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import orderAPI from "../../../api/orderAPI";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

toast.configure();
CancelOrder.propTypes = {
  myOrder: PropTypes.object,
};

function CancelOrder(props) {
  const { myOrder } = props;
  const History = useHistory();

  const handleClose = () => {
    props.closeCancel(false);
  };

  const handleCancelOrder = () => {
    (async () => {
      try {
        const response = await orderAPI.cancelOrder(myOrder._id);
        if (response.status === 204) {
          toast.success("Hủy đơn hàng thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          props.closeCancel(false);
          History.push("/userInformation/myOrders");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <DialogTitle id="responsive-dialog-title">{"Hủy đơn hàng?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn có chắc chắn muốn hủy đơn hàng này không?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          hủy
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleCancelOrder}
        >
          Đồng ý
        </Button>
      </DialogActions>
    </>
  );
}

export default CancelOrder;
