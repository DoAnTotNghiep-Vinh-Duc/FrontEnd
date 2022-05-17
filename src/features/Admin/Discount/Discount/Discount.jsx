import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import DeleteDiscount from "../DeleteDiscount/DeleteDiscount";
import DiscountDetail from "../DiscountDetail/DiscountDetail";

Discount.propTypes = {
  discount: PropTypes.object,
};

function Discount({ discount }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const [openDeleteDiscount, setOpenDeleteDiscount] = useState(false);
  const [btnDelete, setBtnDelete] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenDeleteDiscount = () => {
    setOpenDeleteDiscount(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDeleteDiscount = () => {
    setOpenDeleteDiscount(false);
  };

  useEffect(() => {
    const now = new Date();
    now.setHours(now.getHours() + 7);
    const startDate = new Date(discount.startDate);
    const endDate = new Date(discount.endDate);

    if (now.getTime() < startDate.getTime()) {
      setBtnDelete(true);
    } else if (now.getTime() > endDate.getTime()) {
      setBtnDelete(true);
    } else {
      setBtnDelete(false);
    }
  }, [discount.endDate, discount.startDate]);

  return (
    <>
      <div className="admin-orders-content-body-left-item" key={discount._id}>
        <div className="admin-orders-content-body-left-item-left">
          <div className="admin-orders-content-body-left-item-left-image">
            <img
              src="https://visadep.vn/wp-content/uploads/2020/07/5-10-1024x862.jpg"
              alt=""
            />
          </div>
          <div className="admin-orders-content-body-left-item-left-percent">
            GIẢM {discount.percentDiscount * 100}%
          </div>
        </div>
        <div className="admin-orders-content-body-left-item-right">
          <div className="admin-orders-content-body-left-item-right-name">
            {discount.nameDiscount}
          </div>
          <div className="admin-orders-content-body-left-item-right-time">
            Thời gian: {moment(discount.startDate).format("L")} -
            {moment(discount.endDate).format("L")}
          </div>
          <div className="admin-orders-content-body-left-item-right-btn">
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Xem chi tiết
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClickOpenDeleteDiscount}
              disabled={btnDelete ? false : true}
            >
              Xóa
            </Button>
          </div>
        </div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth="md"
        aria-labelledby="responsive-dialog-title"
      >
        <DiscountDetail closeDetail={handleClose} discount={discount} />
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={openDeleteDiscount}
        onClose={handleCloseDeleteDiscount}
        aria-labelledby="responsive-dialog-title"
      >
        <DeleteDiscount
          closeDelete={handleCloseDeleteDiscount}
          discountId={discount._id}
        />
      </Dialog>
    </>
  );
}

export default Discount;
