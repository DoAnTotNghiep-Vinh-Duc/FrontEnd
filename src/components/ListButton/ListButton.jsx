import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import React, { useState } from "react";
import { toast } from "react-toastify";
import favoriteAPI from "../../api/favoriteAPI";
import QuickView from "../../features/QuickView/QuickView";
import useFavorite from "../../hooks/useFavorite";
import "./ListButton.scss";

toast.configure();
ListButton.propTypes = {};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ListButton(props) {
  const { product } = props;
  const [open, setOpen] = useState(false);
  const [productSelected, setProductSelected] = useState(product);

  const { listFavorite } = useFavorite();
  let index = listFavorite.findIndex(
    (x) => x.listProduct._id === productSelected._id
  );

  const handleClickOpen = () => {
    setProductSelected(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAddToFavorite = () => {
    (async () => {
      try {
        const response = await favoriteAPI.addProductToFavorite({
          productId: productSelected._id,
        });
        if (response.status === 200) {
          toast.success("Thêm vào danh sách yêu thích thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "colored",
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const handleClickAddedToFavorite = () => {
    toast.warning("Sản phẩm đã tồn tại trong danh sách yêu thích", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="addtocart">
        <i className="bi bi-handbag"></i>
      </div>
      <div className="addtolistwish">
        {index >= 0 ? (
          <i
            className="bi bi-suit-heart-fill"
            onClick={handleClickAddedToFavorite}
            style={{ color: "#fb2e86" }}
          ></i>
        ) : (
          <i
            className="bi bi-suit-heart"
            onClick={handleClickAddToFavorite}
          ></i>
        )}
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
