import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import PayPal from "./PayPal";
import "./PayPal.scss";

FormPayPal.propTypes = {};

function FormPayPal(props) {
  const handleClose = () => {
    props.closeFormPayPal(false);
  };
  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        {"Thanh toán online"}
      </DialogTitle>
      <DialogContent>
        <div className="paypal">
          <PayPal />
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          HỦY
        </Button>
      </DialogActions>
    </>
  );
}

export default FormPayPal;
