import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Cookies from "js-cookie";
import React from "react";
import { toast } from "react-toastify";
import userAPI from "../../../../api/userAPI";
import { useHistory } from "react-router-dom";

toast.configure();
LogOut.propTypes = {};

function LogOut(props) {
  const History = useHistory();
  const handleClose = () => {
    props.closeFormLogOut(false);
  };

  const handleClickLogOut = () => {
    (async () => {
      try {
        const response = await userAPI.logout({
          refreshToken: Cookies.get("refreshToken"),
        });
        if (response.status === 200) {
          props.closeFormLogOut(false);
          Cookies.remove("refreshToken");
          Cookies.remove("token");
          localStorage.removeItem("account");
          History.push("/auth");
          toast.success("Đăng xuất thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

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
