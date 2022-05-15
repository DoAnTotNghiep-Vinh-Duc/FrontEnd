import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useContext, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import orderAPI from "../../api/orderAPI";
import { ACTIONS } from "../../context/actions";
import { GlobalContext } from "../../context/context";
import ListProductComment from "./components/ListProductComment/ListProductComment";
import "./FormComment.scss";

FormComment.propTypes = {};

function FormComment(props) {
  const {
    params: { orderId },
  } = useRouteMatch();
  const { dispatch, state } = useContext(GlobalContext);

  const handleClose = () => {
    props.closeComment(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await orderAPI.getProductForRate(orderId);
        dispatch({
          type: ACTIONS.dataProductForRate,
          payload: response.data.data,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, orderId]);

  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        {"Đánh giá - Nhận xét"}
      </DialogTitle>
      <DialogContent>
        {state.dataProductForRate.map((product) => {
          return <ListProductComment key={product._id} product={product} />;
        })}
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </>
  );
}

export default FormComment;
