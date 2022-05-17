import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import discountAPI from "../../../../api/discountAPI";
import { ACTIONS } from "../../../../context/actions";
import { GlobalContext } from "../../../../context/context";
import "./DiscountDetail.scss";

toast.configure();
DiscountDetail.propTypes = {
  discount: PropTypes.object,
};

function DiscountDetail(props) {
  const { discount } = props;
  const { dispatch } = useContext(GlobalContext);

  const [discountEdit, setDiscountEdit] = useState({
    _id: discount._id,
    nameDiscount: discount.nameDiscount,
    percentDiscount: Number(discount.percentDiscount * 100),
    startDate: discount.startDate,
    endDate: discount.endDate,
  });

  const handleClose = () => {
    props.closeDetail(false);
  };

  const handleChangeName = (event) => {
    setDiscountEdit({
      ...discountEdit,
      nameDiscount: event.target.value,
    });
  };
  const handleChangePercent = (event) => {
    setDiscountEdit({
      ...discountEdit,
      percentDiscount: Number(event.target.value),
    });
  };

  const handleChangeStartDate = (date) => {
    setDiscountEdit({
      ...discountEdit,
      startDate: date,
    });
  };

  const handleChangeEndDate = (date) => {
    setDiscountEdit({
      ...discountEdit,
      endDate: date,
    });
  };

  const handleUpdateDiscount = () => {
    (async () => {
      try {
        const response = await discountAPI.update({
          _id: discountEdit._id,
          nameDiscount: discountEdit.nameDiscount,
          startDate: moment(discountEdit.startDate).format("YYYY-MM-DD"),
          endDate: moment(discountEdit.endDate).format("YYYY-MM-DD"),
          percentDiscount: discountEdit.percentDiscount / 100,
        });
        if (response.status === 204) {
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
          toast.success("Cập nhật thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          props.closeDetail(false);
        }
      } catch (error) {
        toast.error(`${error}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
          theme: "dark",
        });
      }
    })();
  };

  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        {"Cập nhập giảm giá"}
      </DialogTitle>
      <div className="discountdetail">
        <div className="discountdetail-left">
          <div className="discountdetail-name">
            <TextField
              id="outlined-basic"
              label="Tên"
              variant="outlined"
              fullWidth
              size="small"
              value={discountEdit.nameDiscount}
              onChange={handleChangeName}
            />
          </div>
          <div className="discountdetail-name">
            <TextField
              id="outlined-basic"
              label="Phầm trăm giảm giá"
              variant="outlined"
              fullWidth
              size="small"
              type="number"
              value={discountEdit.percentDiscount}
              onChange={handleChangePercent}
            />
          </div>
        </div>
        <div className="discountdetail-right">
          <div className="discountdetail-date">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Ngày bắt đầu"
                value={discountEdit.startDate}
                onChange={handleChangeStartDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                autoOk={true}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className="discountdetail-date">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Ngày kết thúc"
                value={discountEdit.endDate}
                onChange={handleChangeEndDate}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
                autoOk={true}
                minDate={discountEdit.startDate}
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
          onClick={handleUpdateDiscount}
        >
          Cập nhật
        </Button>
      </DialogActions>
    </>
  );
}

export default DiscountDetail;
