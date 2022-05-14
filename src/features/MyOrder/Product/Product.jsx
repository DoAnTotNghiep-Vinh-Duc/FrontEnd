import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";
import React, { useState } from "react";
import FormComment from "../../FormComment/FormComment";

Product.propTypes = {
  product: PropTypes.object,
  index: PropTypes.number,
  myOrder: PropTypes.object,
};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Product({ product, index, myOrder }) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [openComment, setOpenComment] = useState(false);

  const handleClickOpenComment = () => {
    setOpenComment(true);
  };

  const handleCloseComment = () => {
    setOpenComment(false);
  };

  return (
    <>
      <StyledTableRow>
        <StyledTableCell>{index + 1}</StyledTableCell>
        <StyledTableCell>
          <div className="myOrderDetail-table-image">
            <img src={product.productDetail.image} alt="" />
          </div>
        </StyledTableCell>
        <StyledTableCell>
          {product.productDetail.product.name}
          <p className="myOrderDetail-table-size">
            Size: {product.productDetail.size}
          </p>
          <p className="myOrderDetail-table-size">
            Màu: {product.productDetail.color.name}
          </p>
        </StyledTableCell>
        <StyledTableCell>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price)}
        </StyledTableCell>
        <StyledTableCell>{product.quantity}</StyledTableCell>
        <StyledTableCell>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price * product.quantity)}
        </StyledTableCell>

        {myOrder.status === "DONE" ? (
          <>
            <StyledTableCell>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                size="small"
                onClick={handleClickOpenComment}
              >
                Đánh giá
              </Button>
            </StyledTableCell>
          </>
        ) : (
          <></>
        )}
      </StyledTableRow>

      <Dialog
        fullScreen={fullScreen}
        open={openComment}
        onClose={handleCloseComment}
        aria-labelledby="responsive-dialog-title"
      >
        <FormComment closeComment={handleCloseComment} product={product} />
      </Dialog>
    </>
  );
}

export default Product;
