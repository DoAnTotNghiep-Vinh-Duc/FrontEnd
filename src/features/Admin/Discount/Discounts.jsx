import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useContext, useEffect, useState } from "react";
import discountAPI from "../../../api/discountAPI";
import { ACTIONS } from "../../../context/actions";
import { GlobalContext } from "../../../context/context";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import AddDiscount from "./AddDiscount/AddDiscount";
import Discount from "./Discount/Discount";
import "./Discounts.scss";

Discounts.propTypes = {};

function Discounts(props) {
  const { dispatch, state } = useContext(GlobalContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await discountAPI.getAll();
        dispatch({
          type: ACTIONS.dataAllDiscountAdmin,
          payload: response.data.data,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="admin-discount">
        <NavBars />
        <div className="admin-discount-content">
          <Header />
          <div className="admin-orders-content-body">
            <div className="admin-orders-content-body-action">
              <div className="admin-orders-content-body-action-search">
                <input type="text" placeholder="Tìm kiếm..." />
                <button>TÌM</button>
              </div>
              <div className="admin-orders-content-body-action-add">
                <button onClick={handleClickOpen}>THÊM GIẢM GIÁ</button>
              </div>
            </div>
            <div className="admin-orders-content-body-discount">
              {state.dataAllDiscountAdmin.map((discount) => {
                return <Discount key={discount._id} discount={discount} />;
              })}
            </div>
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
        <AddDiscount closeAddDiscount={handleClose} />
      </Dialog>
    </>
  );
}

export default Discounts;
