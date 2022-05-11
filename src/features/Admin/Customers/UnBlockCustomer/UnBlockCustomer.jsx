import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import adminAPI from "../../../../api/adminAPI";
import { ACTIONS } from "../../../../context/actions";
import { GlobalContext } from "../../../../context/context";

toast.configure();
UnBlockCustomer.propTypes = {
  customerId: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function UnBlockCustomer(props) {
  const { customerId } = props;
  const classes = useStyles();
  const { dispatch } = useContext(GlobalContext);

  const handleClose = () => {
    props.closeUnBlockCustomer(false);
  };

  const handleUnBlockCustomer = () => {
    (async () => {
      try {
        const response = await adminAPI.unBlockCustomer(customerId);
        if (response.status === 200) {
          (async () => {
            try {
              const response = await adminAPI.getAllCustomer({
                _page: 1,
                _limit: 10,
              });
              dispatch({
                type: ACTIONS.dataAllCustomer,
                payload: response.data,
              });
            } catch (error) {
              console.log(error);
            }
          })();
          toast.success("Mở khóa người dùng thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          props.closeUnBlockCustomer(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        {"Mở khóa khách hàng?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn có muốn chắc chắn muốn mở khóa khách hàng này không? Khách hàng sẽ
          có thể thực hiện tất cả các chức năng nếu được mở khóa!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Hủy
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<LockOpenIcon />}
          onClick={handleUnBlockCustomer}
        >
          Mở Khóa
        </Button>
      </DialogActions>
    </>
  );
}

export default UnBlockCustomer;
