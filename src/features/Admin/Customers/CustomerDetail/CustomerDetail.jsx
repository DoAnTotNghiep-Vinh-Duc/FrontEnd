import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import adminAPI from "../../../../api/adminAPI";
import Header from "../../components/Header/Header";
import NavBars from "../../components/NavBars/NavBars";
import "./CustomerDetail.scss";
import CustomerOrder from "./CustomerOrder/CustomerOrder";

CustomerDetail.propTypes = {};

function CustomerDetail(props) {
  const {
    params: { customerId },
  } = useRouteMatch();

  const [value, setValue] = useState("ALL");
  const [listOrder, setListOrder] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getOrderByCustomerId(customerId, value);
        setListOrder(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [customerId, value]);

  return (
    <div className="admin-customer-detail">
      <NavBars />
      <div className="admin-customer-detail-content">
        <Header />
        <div className="admin-customer-detail-body">
          <div className="admin-customer-detail-header">
            <div className="admin-customer-detail-header-infor">
              <div className="admin-customer-detail-header-infor-image">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                  alt=""
                />
              </div>
              <div className="admin-customer-detail-header-infor-name">
                <p>Đỗ Đạt Đức</p>
              </div>
            </div>
            <div className="admin-customer-detail-header-title">
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab
                  value="ALL"
                  label="tất cả"
                  style={{ minWidth: "20%", fontSize: "12px" }}
                />
                <Tab
                  value="HANDLING"
                  label="chờ xử lí"
                  style={{ minWidth: "20%", fontSize: "12px" }}
                />
                <Tab
                  value="DELIVERING"
                  label="đang vận chuyển"
                  style={{ minWidth: "20%", fontSize: "12px" }}
                />
                <Tab
                  value="DONE"
                  label="đã giao"
                  style={{ minWidth: "20%", fontSize: "12px" }}
                />
                <Tab
                  value="CANCELED"
                  label="đã hủy"
                  style={{ minWidth: "20%", fontSize: "12px" }}
                />
              </Tabs>
            </div>
          </div>
          {listOrder.length ? (
            <>
              <div className="admin-customer-detail-list">
                {listOrder.map((order) => {
                  return <CustomerOrder order={order} key={order._id} />;
                })}
              </div>
            </>
          ) : (
            <>
              <div className="admin-customer-detail-list-notfound">
                <div className="admin-customer-detail-list-notfound-container">
                  <img
                    src="https://theme.hstatic.net/1000341850/1000438988/14/infor3_icon_2_1.png?v=798"
                    alt=""
                  />
                  <p>Chưa có đơn hàng</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerDetail;
