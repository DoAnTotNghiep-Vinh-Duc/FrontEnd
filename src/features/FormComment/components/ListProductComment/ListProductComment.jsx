import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ProductComment from "../ProductComment/ProductComment";

ListProductComment.propTypes = {
  product: PropTypes.object,
};

function ListProductComment(props) {
  const { product } = props;

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="formcomment-product">
        <div className="formcomment-product-infor">
          <div className="formcomment-product-image">
            <img
              src={
                product.images[
                  Math.floor(Math.random() * product.images.length)
                ]
              }
              alt=""
            />
          </div>
          <div className="formcomment-product-infor">
            <div className="formcomment-product-infor-name">{product.name}</div>
            <div className="formcomment-product-infor-btn">
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                ĐÁNH GIÁ
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <ProductComment closeComment={handleClose} product={product} />
      </Dialog>
    </>
  );
}

export default ListProductComment;
