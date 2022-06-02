import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import adminAPI from "../../../../api/adminAPI";
import icon_order from "../../../../assets/images/icon-order.jpg";
import Header from "../../components/Header/Header";
import NavBars from "../../components/NavBars/NavBars";
import "./ShipperDetail.scss";
import ShipperOrder from "./ShipperOrder/ShipperOrder";

ShipperDetail.propTypes = {};

function ShipperDetail(props) {
  const {
    params: { shipperId },
  } = useRouteMatch();

  const [value, setValue] = useState("WAITING");
  const [listOrder, setListOrder] = useState([]);
  const [shipper, setShipper] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getShipperDetail(shipperId, value);
        setListOrder(response.data.data.order);
        setShipper(response.data.data.account);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [shipperId, value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="admin-shipper-detail">
      <NavBars />
      <div className="admin-shipper-detail-content">
        <Header />
        <div className="admin-shipper-detail-body">
          <div className="admin-shipper-detail-header">
            <div className="admin-shipper-detail-header-infor">
              <div className="admin-shipper-detail-header-infor-image">
                <img src={shipper?.information.avatar} alt="" />
              </div>
              <div className="admin-shipper-detail-header-infor-name">
                <p>{shipper?.information.name}</p>
              </div>
            </div>
            <div className="admin-shipper-detail-header-title">
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab
                  value="WAITING"
                  label="Chờ nhận hàng"
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
                <Tab
                  value="ALL"
                  label="tất cả"
                  style={{ minWidth: "20%", fontSize: "12px" }}
                />
              </Tabs>
            </div>
          </div>
          {listOrder.length ? (
            <>
              <div className="admin-shipper-detail-list">
                {listOrder.map((order) => {
                  return <ShipperOrder key={order._id} order={order} />;
                })}
              </div>
            </>
          ) : (
            <>
              <div className="admin-shipper-detail-list-notfound">
                <div className="admin-shipper-detail-list-notfound-container">
                  <img src={icon_order} alt="" />
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

export default ShipperDetail;
