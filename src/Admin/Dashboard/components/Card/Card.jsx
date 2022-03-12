import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React, { useState } from "react";
import "./Card.scss";

Card.propTypes = {};

function Card(props) {
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="admin-content-body-date">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            size="small"
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className="admin-content-body-total">
        <div className="admin-content-body-total-productsSold">
          <div className="admin-content-body-total-productsSold-header">
            <div className="admin-content-body-total-productsSold-header-title">
              Sản phẩm đã bán
            </div>
            <div className="admin-content-body-total-productsSold-header-icon">
              <i className="bi bi-layers"></i>
            </div>
          </div>
          <div className="admin-content-body-total-productsSold-numbers">
            <span>56</span> cái
          </div>
        </div>
        <div className="admin-content-body-total-revenue">
          <div className="admin-content-body-total-revenue-header">
            <div className="admin-content-body-total-revenue-header-title">
              Doanh thu
            </div>
            <div className="admin-content-body-total-revenue-header-icon">
              <i className="bi bi-cash"></i>
            </div>
          </div>
          <div className="admin-content-body-total-revenue-numbers">
            <span>3.456.789</span> vnđ
          </div>
        </div>
        <div className="admin-content-body-total-orders">
          <div className="admin-content-body-total-orders-header">
            <div className="admin-content-body-total-orders-header-title">
              Số Hóa đơn
            </div>
            <div className="admin-content-body-total-orders-header-icon">
              <i className="bi bi-cash"></i>
            </div>
          </div>
          <div className="admin-content-body-total-orders-numbers">
            <span>12</span> đơn
          </div>
        </div>
        <div className="admin-content-body-total-views">
          <div className="admin-content-body-total-views-header">
            <div className="admin-content-body-total-views-header-title">
              Lượt truy cập
            </div>
            <div className="admin-content-body-total-views-header-icon">
              <i className="bi bi-cash"></i>
            </div>
          </div>
          <div className="admin-content-body-total-views-numbers">
            <span>321</span> lượt
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
