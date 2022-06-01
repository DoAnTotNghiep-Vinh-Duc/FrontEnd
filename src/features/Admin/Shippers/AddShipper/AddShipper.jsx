import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import adminAPI from "../../../../api/adminAPI";
import iconshipper from "../../../../assets/images/iconshipper.png";
import { ACTIONS } from "../../../../context/actions";
import { GlobalContext } from "../../../../context/context";
import "./AddShipper.scss";

toast.configure();
AddShipper.propTypes = {};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

function AddShipper(props) {
  const classes = useStyles();
  const { dispatch } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [arrcity, setArrCity] = useState([]);
  const [arrDistrict, setArrDistrict] = useState([]);
  const [district, setDistrict] = useState("");
  const [arrWard, setArrWard] = useState([]);
  const [ward, setWard] = useState("");
  const [street, setStreet] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://provinces.open-api.vn/api/p/`)
      .then((res) => {
        setArrCity(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleSelectCity = (event) => {
    setCity(event.target.value);
  };
  const handleSelectDistrict = (event) => {
    setDistrict(event.target.value);
  };
  const handleSelectWard = (event) => {
    setWard(event.target.value);
  };
  const handleChangeStreet = (event) => {
    setStreet(event.target.value);
  };

  const handleClose = () => {
    props.closeAddShipper(false);
  };

  const handleAddShipper = () => {
    if (name === "") {
      setError("Chưa nhập tên!");
    } else if (password === "") {
      setError("Chưa nhập mật khẩu!");
    } else if (email === "") {
      setError("Chưa nhập email!");
    } else if (phone === "") {
      setError("Chưa nhập số điện thoại!");
    } else if (city === "") {
      setError("Chưa chọn tỉnh / thành phố!");
    } else if (district === "") {
      setError("Chưa chọn quận / huyện!");
    } else if (ward === "") {
      setError("Chưa chọn phường / xã!");
    } else if (street === "") {
      setError("Chưa nhập số nhà, đường!");
    } else {
      setError("");
      (async () => {
        try {
          const response = await adminAPI.createShipper({
            email,
            password,
            name,
            phone,
            city,
            district,
            ward,
            street,
          });
          if (response.status === 201) {
            toast.success("Tạo tài khoản người vận chuyển mới thành công!", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000,
              theme: "dark",
            });
            (async () => {
              try {
                const response = await adminAPI.getAllShipper({
                  _page: 1,
                  _limit: 10,
                });
                dispatch({
                  type: ACTIONS.dataAllShipperAdmin,
                  payload: response.data,
                });
              } catch (error) {
                console.log(error);
              }
            })();
            props.closeAddShipper(false);
          }
        } catch (error) {
          setError(error);
        }
      })();
    }
  };

  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        {"Thêm người vận chuyển mới"}
      </DialogTitle>
      <DialogContent>
        <div className="admin-addship">
          <div className="admin-addship-avatar">
            <div className="admin-addship-avatar-image">
              <img src={iconshipper} alt="" />
            </div>
          </div>
          <div className="admin-addship-infor">
            <div className="admin-addship-infor-phone-email">
              <div className="admin-addship-infor-phone">
                <TextField
                  id="outlined-basic"
                  label="Họ và tên"
                  variant="outlined"
                  size="small"
                  placeholder="Nhập họ và tên..."
                  fullWidth
                  value={name}
                  onChange={handleChangeName}
                />
              </div>
              <div className="admin-addship-infor-email">
                <TextField
                  id="outlined-basic"
                  label="Mật khẩu"
                  variant="outlined"
                  size="small"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>
            </div>
            <div className="admin-addship-infor-phone-email">
              <div className="admin-addship-infor-phone">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  placeholder="Nhập email..."
                  fullWidth
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="admin-addship-infor-email">
                <TextField
                  id="outlined-basic"
                  label="Số điện thoại"
                  variant="outlined"
                  size="small"
                  placeholder="Nhập số điện thoại..."
                  fullWidth
                  value={phone}
                  onChange={handleChangePhone}
                />
              </div>
            </div>
            <div className="admin-addship-infor-phone-email">
              <div className="admin-addship-infor-phone">
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Chọn Tỉnh / Thành phố
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={city}
                    onChange={handleSelectCity}
                    autoWidth
                    label="Chọn Tỉnh/Thành phố"
                  >
                    {arrcity?.map((data, idx) => {
                      const handProvinceCode = async () => {
                        await axios
                          .get(`https://provinces.open-api.vn/api/d/`)
                          .then((res) => {
                            setArrDistrict(
                              res.data.filter((codeDistrict) => {
                                return data.code === codeDistrict.province_code;
                              })
                            );
                          })
                          .catch((error) => console.log(error));
                      };
                      return (
                        <MenuItem
                          key={idx}
                          value={data.name}
                          onClick={handProvinceCode}
                        >
                          {data.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </div>
              <div className="admin-addship-infor-phone">
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Chọn Quận / Huyện
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={district}
                    onChange={handleSelectDistrict}
                    autoWidth
                    label="Chọn Quận / Huyện"
                  >
                    {arrDistrict.length > 0 &&
                      arrDistrict?.map((data, idx) => {
                        const handleDistrictCode = async () => {
                          await axios
                            .get(`https://provinces.open-api.vn/api/w/`)
                            .then((res) => {
                              setArrWard(
                                res.data.filter((codeWard) => {
                                  return data.code === codeWard.district_code;
                                })
                              );
                            })
                            .catch((error) => console.log(error));
                        };
                        return (
                          <MenuItem
                            key={idx}
                            value={data.name}
                            onClick={handleDistrictCode}
                          >
                            {data.name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="admin-addship-infor-phone-email">
              <div className="admin-addship-infor-phone">
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Chọn Phường / Xã
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={ward}
                    onChange={handleSelectWard}
                    autoWidth
                    label="Chọn Phường / Xã"
                  >
                    {arrWard.length > 0 &&
                      arrWard?.map((data, idx) => {
                        return (
                          <MenuItem key={idx} value={data.name}>
                            {data.name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </div>
              <div className="admin-addship-infor-phone">
                <TextField
                  id="outlined-basic"
                  label="Số nhà, đường"
                  variant="outlined"
                  size="small"
                  placeholder="VD: 12 Nguyễn Văn Bảo"
                  fullWidth
                  size="medium"
                  value={street}
                  onChange={handleChangeStreet}
                />
              </div>
            </div>
          </div>
          <div className="admin-addship-error">{error}</div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Hủy
        </Button>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            className={classes.margin}
            startIcon={<GroupAddIcon />}
            onClick={handleAddShipper}
          >
            Thêm
          </Button>
        </ThemeProvider>
      </DialogActions>
    </>
  );
}

export default AddShipper;
