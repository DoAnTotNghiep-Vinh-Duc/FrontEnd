import React, { useContext } from "react";
import PropTypes from "prop-types";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import discountAPI from "../../../../api/discountAPI";
import { ACTIONS } from "../../../../context/actions";
import { GlobalContext } from "../../../../context/context";

DeleteDiscount.propTypes = {
  discountId: PropTypes.string,
};

function DeleteDiscount(props) {
  const { discountId } = props;
  const { dispatch } = useContext(GlobalContext);

  const handleClose = () => {
    props.closeDelete(false);
  };

  const handleDeleteDiscount = () => {
    (async () => {
      try {
        const response = await discountAPI.deleteDiscount(discountId);
        if (response.status === 200) {
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
          props.closeDelete(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <DialogTitle id="responsive-dialog-title">{"Xóa giảm giá?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn có chắc chắn muốn xóa giảm giá này không. Giảm giá sẽ mất đi hiệu
          lực và không còn xuất hiện nữa!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          hủy
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteDiscount}
        >
          xóa
        </Button>
      </DialogActions>
    </>
  );
}

export default DeleteDiscount;
