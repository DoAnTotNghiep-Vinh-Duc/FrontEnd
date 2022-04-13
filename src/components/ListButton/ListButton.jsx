import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import React, { useState } from "react";
import QuickView from "../../features/QuickView/QuickView";
import "./ListButton.scss";

ListButton.propTypes = {};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ListButton(props) {
  const { product } = props;
  const [open, setOpen] = useState(false);
  const [productSelected, setProductSelected] = useState({});

  const handleClickOpen = () => {
    setProductSelected(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="addtocart">
        <i className="bi bi-handbag"></i>
      </div>
      <div className="addtolistwish">
        <i className="bi bi-suit-heart"></i>
      </div>
      <div className="zoom" onClick={handleClickOpen}>
        <i className="bi bi-eye"></i>
      </div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
      >
        <QuickView
          closeQuickView={handleClose}
          productSelected={productSelected}
        />
      </Dialog>
    </>
  );
}

export default ListButton;
