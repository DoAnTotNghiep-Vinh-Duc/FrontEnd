import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import PropTypes from "prop-types";
import React from "react";
import "./FormComment.scss";

FormComment.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function FormComment(props) {
  const classes = useStyles();
  const { product } = props;

  const handleClose = () => {
    props.closeComment(false);
  };

  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        {"Đánh giá - Nhận xét"}
      </DialogTitle>
      <DialogContent>
        <div className="formcomment-product">
          <div className="formcomment-product-image">
            <img src={product.productDetail.image} alt="" />
          </div>
          <div className="formcomment-product-infor">
            <div className="formcomment-product-infor-name">
              {product.productDetail.product.name}
            </div>
            <div className="formcomment-product-infor-size">
              Màu: {product.productDetail.color.name}
            </div>
            <div className="formcomment-product-infor-size">
              Kích cỡ: {product.productDetail.size}
            </div>
          </div>
        </div>
        <div className="formcomment-rating">
          <Rating
            name="customized-empty"
            precision={0.5}
            size="large"
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
        </div>
        <div className="formcomment-comment">
          <TextField
            id="outlined-multiline-static"
            label="Nhận xét"
            multiline
            fullWidth
            rows={4}
            variant="outlined"
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Hủy
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Đăng
        </Button>
      </DialogActions>
    </>
  );
}

export default FormComment;
