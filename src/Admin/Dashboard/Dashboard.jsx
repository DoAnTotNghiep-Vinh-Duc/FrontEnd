import "date-fns";
import React from "react";
import Scroll from "../../components/component/Scroll/Scroll";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import BestSeller from "./components/BestSeller/BestSeller";
import Card from "./components/Card/Card";
import ChartDashboard from "./components/Chart/ChartDashboard";
import Customers from "./components/Customers/Customers";
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import "./Dashboard.scss";

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
