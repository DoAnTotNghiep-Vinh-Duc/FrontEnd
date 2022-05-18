import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import userAPI from "../../api/userAPI";
import NavbarUser from "../../components/NavBarUser/NavbarUser";
import PasswordField from "../../form-control/PasswordField";
import "./ChangePassword.scss";
import { toast } from "react-toastify";

toast.configure();
ChangePassword.propTypes = {};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

function ChangePassword(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    oldpassword: yup
      .string()
      .required("Vui lòng nhập mật khẩu cũ")
      .min(6, "Mật khẩu ít nhất 6 kí tự!"),
    newpassword: yup
      .string()
      .required("Vui lòng nhập mật khẩu mới")
      .min(6, "Mật khẩu ít nhất 6 kí tự!"),
    renewpassword: yup
      .string()
      .required("Vui lòng nhập lại mật khẩu mới")
      .oneOf([yup.ref("newpassword")], "Mật khẩu mới không khớp!"),
  });

  const form = useForm({
    defaultValues: {
      oldpassword: "",
      newpassword: "",
      renewpassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    (async () => {
      try {
        const response = await userAPI.changePassword({
          password: value.oldpassword,
          newPassword: value.newpassword,
          reEnterPassword: value.renewpassword,
        });
        if (response.status === 204) {
          toast.success("Thay đổi mật khẩu thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          form.reset();
        }
      } catch (error) {
        console.log(error);
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
          theme: "dark",
        });
      }
    })();
  };

  const handleReset = () => {
    form.reset();
  };

  return (
    <div className="user-changePassword">
      <NavbarUser />
      <div className="user-changePassword-container">
        <div className="user-changePassword-container-left">
          <div className="user-changePassword-container-left-image">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/concept-of-reset-lost-password-in-mobile-1886567-1598238.png"
              alt=""
            />
          </div>
        </div>
        <div className="user-changePassword-container-right">
          <div className="user-changePassword-container-right-wrap">
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="user-changePassword-title">THAY ĐỔI MẬT KHẨU</div>
              <div className="user-changePassword-old">
                <PasswordField
                  name="oldpassword"
                  label="Mật khẩu cũ"
                  form={form}
                />
              </div>
              <div className="user-changePassword-password">
                <PasswordField
                  name="newpassword"
                  label="Mật khẩu mới"
                  form={form}
                />
                <PasswordField
                  name="renewpassword"
                  label="Nhập lại mật khẩu mới"
                  form={form}
                />
              </div>
              <div className="user-changePassword-btn">
                <div className="user-changePassword-btn-reset">
                  <Button variant="contained" onClick={handleReset}>
                    RESET
                  </Button>
                </div>
                <div className="user-changePassword-btn-change">
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.margin}
                      type="submit"
                    >
                      THAY ĐỔI MẬT KHẨU
                    </Button>
                  </ThemeProvider>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
