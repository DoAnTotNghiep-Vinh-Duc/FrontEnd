import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import PropTypes from "prop-types";
import React from "react";

BlockCustomer.propTypes = {
  customerId: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function BlockCustomer(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.closeBlockCustomer(false);
  };

  const handleBlockCustomer = () => {
    props.closeBlockCustomer(false);
  };

  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        {"Khóa khách hàng?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn có muốn chắc chắn khóa khách hàng này lại không? Khách hàng sẽ
          không thể thực hiện bất cứ chức năng mua bán nào một khi đã bị khóa!
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
          startIcon={<LockIcon />}
          onClick={handleBlockCustomer}
        >
          Khóa
        </Button>
      </DialogActions>
    </>
  );
}

export default BlockCustomer;
