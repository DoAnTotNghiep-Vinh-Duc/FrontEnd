import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Customers from "./Customers/Customers";
import Dashboard from "./Dashboard/Dashboard";
import Orders from "./Orders/Orders";
import ProductDetail from "./Products/ProductDetail/ProductDetail";
import Products from "./Products/Products";

AdminPage.propTypes = {};

function AdminPage(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.url} exact>
          <Dashboard />
        </Route>
        <Route path={`${match.url}/products`} exact>
          <Products />
        </Route>
        <Route path={`${match.url}/products/:productId`} exact>
          <ProductDetail />
        </Route>
        <Route path={`${match.url}/orders`} exact>
          <Orders />
        </Route>
        <Route path={`${match.url}/customers`} exact>
          <Customers />
        </Route>
      </Switch>
    </div>
  );
}

export default AdminPage;