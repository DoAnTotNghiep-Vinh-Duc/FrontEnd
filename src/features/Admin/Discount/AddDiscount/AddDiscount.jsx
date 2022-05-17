import DateFnsUtils from "@date-io/date-fns";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import discountAPI from "../../../../api/discountAPI";
import { ACTIONS } from "../../../../context/actions";
import { GlobalContext } from "../../../../context/context";
import "./AddDiscount.scss";

toast.configure();
AddDiscount.propTypes = {};

function AddDiscount(props) {
  const { dispatch } = useContext(GlobalContext);

  const [discount, setDiscount] = useState({
    nameDiscount: "",
    percentDiscount: 0,
    startDate: new Date(),
    endDate: new Date(),
  });
  const [button, setButton] = useState(false);

  const handleClose = () => {
    props.closeAddDiscount(false);
  };

  const handleChangeName = (event) => {
    setDiscount({
      ...discount,
      nameDiscount: event.target.value,
    });
  };

  const handleChangePercent = (event) => {
    setDiscount({
      ...discount,
      percentDiscount: Number(event.target.value),
    });
  };

  const handleChangeStartDate = (date) => {
    setDiscount({
      ...discount,
      startDate: date,
    });
  };

  const handleChangeEndDate = (date) => {
    setDiscount({
      ...discount,
      endDate: date,
    });
  };

  useEffect(() => {
    if (
      discount.nameDiscount === "" ||
      !discount.percentDiscount ||
      !discount.startDate ||
      !discount.endDate
    ) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [
    discount.endDate,
    discount.nameDiscount,
    discount.percentDiscount,
    discount.startDate,
  ]);

  const handleAddNewDiscount = () => {
    (async () => {
      try {
        const response = await discountAPI.addNewDiscount({
          nameDiscount: discount.nameDiscount,
          percentDiscount: discount.percentDiscount / 100,
          startDate: moment(discount.startDate).format("YYYY-MM-DD"),
          endDate: moment(discount.endDate).format("YYYY-MM-DD"),
        });
        if (response.status === 201) {
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
          toast.success("Thêm giảm giá mới thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          props.closeAddDiscount(false);
        }
      } catch (error) {
        console.log(error);
        toast.error(error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          theme: "dark",
        });
      }
    })();
  };

  return (
    <>
      <DialogTitle id="responsive-dialog-title">{"Thêm Giảm Giá"}</DialogTitle>
      <div className="adddiscount">
        <div className="adddiscount-left">
          <div className="adddiscount-name">
            <TextField
              id="outlined-basic"
              label="Tên"
              variant="outlined"
              fullWidth
              size="small"
              value={discount.nameDiscount}
              onChange={handleChangeName}
            />
          </div>
          <div className="adddiscount-name">
            <TextField
              id="outlined-basic"
              label="Phầm trăm giảm giá"
              variant="outlined"
              fullWidth
              size="small"
              type="number"
              value={discount.percentDiscount}
              onChange={handleChangePercent}
            />
          </div>
        </div>
        <div className="adddiscount-right">
          <div className="adddiscount-date">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Ngày bắt đầu"
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                autoOk={true}
                value={discount.startDate}
                onChange={handleChangeStartDate}
                minDate={new Date()}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className="adddiscount-date">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Ngày kết thúc"
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                autoOk={true}
                value={discount.endDate}
                onChange={handleChangeEndDate}
                minDate={discount.startDate}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>
      </div>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Hủy
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disabled={button ? false : true}
          onClick={handleAddNewDiscount}
        >
          Thêm
        </Button>
      </DialogActions>
    </>
  );
}

export default AddDiscount;
