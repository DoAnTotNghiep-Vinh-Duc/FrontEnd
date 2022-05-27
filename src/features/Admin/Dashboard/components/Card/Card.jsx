import moment from "moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import adminAPI from "../../../../../api/adminAPI";
import typeRequest from "../../../../../data/typeRequest.json";
import "./Card.scss";

Card.propTypes = {};

function Card(props) {
  const [beginDate, setBeginDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [nameTypeRequest, setNameTypeRequest] = useState("Hôm nay");
  const [totalOrder, setTotalOrder] = useState(0);
  const [total, setTotal] = useState([]);
  const [totalUser, setTotalUser] = useState(0);

  let totalCash = 0;
  let totalQuantityProduct = 0;

  const handleClickCalendar = () => {
    setIsShowCalendar(!isShowCalendar);
  };
  const handleExitCalendar = () => {
    setIsShowCalendar(false);
  };

  const handleClickBeginDate = (date) => {
    setBeginDate(date);
  };
  const handleClickEndDate = (date) => {
    setEndDate(date);
  };

  //thống kê 4 card mặc định
  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.statistical({
          typeRequest: "TODAY",
        });
        if (response.status === 200) {
          setTotalOrder(response.data.data.orders.length);
          setTotal(response.data.data.orders);
          setTotalUser(response.data.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleClickTypeRequest = (item) => {
    (async () => {
      try {
        const response = await adminAPI.statistical({
          typeRequest: item.value,
        });
        if (response.status === 200) {
          setTotalOrder(response.data.data.orders.length);
          setTotal(response.data.data.orders);
          setTotalUser(response.data.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    setNameTypeRequest(item.name);
    setIsShowCalendar(false);
  };

  const handleFinishCalendar = () => {
    (async () => {
      try {
        const response = await adminAPI.statistical({
          typeRequest: "TWODATE",
          beginDate: moment(beginDate).format("YYYY-MM-DD"),
          endDate: moment(endDate).format("YYYY-MM-DD"),
        });
        if (response.status === 200) {
          setTotalOrder(response.data.data.orders.length);
          setTotal(response.data.data.orders);
          setTotalUser(response.data.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    setNameTypeRequest(
      `${moment(beginDate).format("DD-MM-YYYY")} đến ${moment(endDate).format(
        "DD-MM-YYYY"
      )}`
    );
    setIsShowCalendar(false);
  };

  total.forEach((element) => {
    totalCash += element.totalPrice;
    totalQuantityProduct += element.totalQuantity;
  });

  return (
    <>
      <div className="admin-content-body-date">
        <div className="date-container">
          <p className="date-content">{nameTypeRequest}</p>
          <i className="bi bi-calendar3" onClick={handleClickCalendar}></i>
          {isShowCalendar ? (
            <div className="calendar">
              <div className="calendar-left">
                {typeRequest.map((item, index) => {
                  return (
                    <p
                      className="calendar-typeRequest"
                      key={index}
                      onClick={() => handleClickTypeRequest(item)}
                    >
                      {item.name}
                    </p>
                  );
                })}
              </div>
              <div className="calendar-right">
                <div className="calendar-calendar">
                  <div className="calendar-beginDate">
                    <Calendar
                      onChange={handleClickBeginDate}
                      value={beginDate}
                      maxDate={new Date()}
                    />
                  </div>
                  <div className="calendar-endDate">
                    <Calendar
                      onChange={handleClickEndDate}
                      value={endDate}
                      maxDate={new Date()}
                      minDate={beginDate}
                    />
                  </div>
                </div>
                <div className="calendar-button">
                  <button
                    className="calendar-button-exit"
                    onClick={handleExitCalendar}
                  >
                    Hủy
                  </button>
                  <button
                    className="calendar-button-finish"
                    onClick={handleFinishCalendar}
                  >
                    Xong
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
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
            <span>{totalQuantityProduct}</span> cái
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
            <span>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(totalCash)}
            </span>
          </div>
        </div>
        <div className="admin-content-body-total-orders">
          <div className="admin-content-body-total-orders-header">
            <div className="admin-content-body-total-orders-header-title">
              Số Hóa đơn
            </div>
            <div className="admin-content-body-total-orders-header-icon">
              <i className="bi bi-receipt-cutoff"></i>
            </div>
          </div>
          <div className="admin-content-body-total-orders-numbers">
            <span>{totalOrder}</span> đơn
          </div>
        </div>
        <div className="admin-content-body-total-views">
          <div className="admin-content-body-total-views-header">
            <div className="admin-content-body-total-views-header-title">
              Số khách hàng
            </div>
            <div className="admin-content-body-total-views-header-icon">
              <i className="bi bi-eye"></i>
            </div>
          </div>
          <div className="admin-content-body-total-views-numbers">
            <span>{totalUser}</span> khách hàng
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
