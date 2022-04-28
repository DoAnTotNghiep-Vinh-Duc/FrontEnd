import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import React, { useState } from "react";
import QuickView from "../../features/QuickView/QuickView";
import favoriteAPI from "../../api/favoriteAPI";
import "./ListButton.scss";
import { toast } from "react-toastify";

toast.configure();
ListButton.propTypes = {};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ListButton(props) {
  const { product } = props;
  const [open, setOpen] = useState(false);
  const [productSelected, setProductSelected] = useState(product);

  const handleClickOpen = () => {
    setProductSelected(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickFavorite = () => {
    (async () => {
      try {
        const response = await favoriteAPI.addProductToFavorite({
          productId: productSelected._id,
        });
        if (response.status === 200) {
          toast.success("Thêm vào danh sách yêu thích thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <div className="addtocart">
        <i className="bi bi-handbag"></i>
      </div>
      <div className="addtolistwish" onClick={handleClickFavorite}>
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
