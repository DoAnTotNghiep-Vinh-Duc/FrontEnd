import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import adminAPI from "../../../../api/adminAPI";
import icon_order from "../../../../assets/images/icon-order.jpg";
import Header from "../../components/Header/Header";
import NavBars from "../../components/NavBars/NavBars";
import "./CustomerDetail.scss";
import CustomerOrder from "./CustomerOrder/CustomerOrder";

CustomerDetail.propTypes = {};

function CustomerDetail(props) {
  const {
    params: { customerId },
  } = useRouteMatch();

  const [value, setValue] = useState("HANDLING");
  const [listOrder, setListOrder] = useState([]);
  const [customer, setCustomer] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getOrderByCustomerId(customerId, value);
        setListOrder(response.data.data.order);
        setCustomer(response.data.data.account);
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
                <img src={customer?.information.avatar} alt="" />
              </div>
              <div className="admin-customer-detail-header-infor-name">
                <p>{customer?.information.name}</p>
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
                  value="HANDLING"
                  label="ch??? x??? l??"
                  style={{ minWidth: "16.5%", fontSize: "12px" }}
                />
                <Tab
                  value="WAITING"
                  label="Ch??? nh???n h??ng"
                  style={{ minWidth: "16.5%", fontSize: "12px" }}
                />
                <Tab
                  value="DELIVERING"
                  label="??ang v???n chuy???n"
                  style={{ minWidth: "16.5%", fontSize: "12px" }}
                />
                <Tab
                  value="DONE"
                  label="???? giao"
                  style={{ minWidth: "16.5%", fontSize: "12px" }}
                />
                <Tab
                  value="CANCELED"
                  label="???? h???y"
                  style={{ minWidth: "16.5%", fontSize: "12px" }}
                />
                <Tab
                  value="ALL"
                  label="t???t c???"
                  style={{ minWidth: "16.5%", fontSize: "12px" }}
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
                  <img src={icon_order} alt="" />
                  <p>Ch??a c?? ????n h??ng</p>
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
