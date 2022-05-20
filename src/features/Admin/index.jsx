import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import Chats from "./Chats/Chats";
import CustomerDetail from "./Customers/CustomerDetail/CustomerDetail";
import Customers from "./Customers/Customers";
import Dashboard from "./Dashboard/Dashboard";
import Discounts from "./Discount/Discounts";
import OrderDetail from "./Orders/OrderDetail/OrderDetail";
import Orders from "./Orders/Orders";
import AddProduct from "./Products/AddProduct/AddProduct";
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
        <Route path={`${match.url}/addproduct`} exact>
          <AddProduct />
        </Route>

        <Route path={`${match.url}/orders`} exact>
          <Orders />
        </Route>
        <Route path={`${match.url}/orders/:orderId`} exact>
          <OrderDetail />
        </Route>

        <Route path={`${match.url}/customers`} exact>
          <Customers />
        </Route>
        <Route path={`${match.url}/customers/:customerId`} exact>
          <CustomerDetail />
        </Route>

        <Route path={`${match.url}/discounts`} exact>
          <Discounts />
        </Route>

        <Route path={`${match.url}/chats`} exact>
          <Chats />
        </Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default AdminPage;
