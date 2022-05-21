import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

LogOut.propTypes = {};

function LogOut(props) {
  const handleClose = () => {
    props.closeFormLogOut(false);
  };

  const handleClickLogOut = () => {};

  return (
    <>
      <DialogTitle id="responsive-dialog-title">{"Đăng xuất?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn có chắc chắn muốn đăng xuất ra khỏi trang web không?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" size="small">
          Hủy
        </Button>
        <Button
          onClick={handleClickLogOut}
          color="secondary"
          variant="contained"
          size="small"
          startIcon={<ExitToAppIcon />}
        >
          Xác nhận
        </Button>
      </DialogActions>
    </>
  );
}

export default LogOut;
