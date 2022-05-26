import "date-fns";
import React, { useEffect, useState } from "react";
import Scroll from "../../../components/Scroll/Scroll";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import BestSeller from "./components/BestSeller/BestSeller";
import Card from "./components/Card/Card";
import ChartDashboard from "./components/Chart/ChartDashboard";
import Customers from "./components/Customers/Customers";
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import "./Dashboard.scss";
import Chart from "react-apexcharts";
import { colors } from "@material-ui/core";
import ApexChart from "./components/ApexChart/ApexChart ";

Dashboard.propTypes = {};

function Dashboard(props) {
  return (
    <>
      <div className="admin">
        <NavBars />
        <div className="admin-content">
          <Header />
          <div className="admin-content-body">
            <Card />
            <div className="admin-content-body-chart-topProducts">
              <ChartDashboard />
              <BestSeller />
            </div>
            <div className="admin-content-topCustomer">
              <div className="admin-content-topCustomer-chart">
                <ApexChart />
                <div className="admin-content-topCustomer-title">
                  Biểu đồ cột hiển thị khách hàng tiềm năng
                </div>
              </div>
            </div>
            <div className="admin-content-body-products-customers">
              <Products />
              <Customers />
            </div>
            <Orders />
          </div>
        </div>
      </div>
      <Scroll showBelow={250} />
    </>
  );
}

export default Dashboard;
