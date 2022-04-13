import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";

Logout.propTypes = {};

function Logout(props) {
  const handleClose = () => {
    props.closeFormLogout(false);
  };

  return (
    <>
      <DialogTitle id="responsive-dialog-title">{"Đăng xuất"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bạn có chắc chắn đăng xuất tài khoản ra khỏi trang web này không?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" size="small">
          Hủy
        </Button>
        <Button
          onClick={handleClose}
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

export default Logout;
