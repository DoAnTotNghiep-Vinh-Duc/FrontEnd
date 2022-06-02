import React, { useEffect, useRef } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import io from "socket.io-client";
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
import ShipperDetail from "./Shippers/ShipperDetail/ShipperDetail";
import Shippers from "./Shippers/Shippers";

AdminPage.propTypes = {};

function AdminPage(props) {
  const match = useRouteMatch();

  const socket = useRef();

  useEffect(() => {
    socket.current = io(process.env.REACT_APP_API_KEY, {
      transports: ["websocket", "polling", "flashsocket"],
    });
  }, []);

  useEffect(() => {
    socket.current.on("OKOK", (data) => {
      console.log(data);
    });
  });

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

        <Route path={`${match.url}/shippers`} exact>
          <Shippers />
        </Route>
        <Route path={`${match.url}/shippers/:shipperId`} exact>
          <ShipperDetail />
        </Route>

        <Route path={`${match.url}/discounts`} exact>
          <Discounts />
        </Route>

        <Route path={`${match.url}/chats`} exact>
          <Chats socket={socket} />
        </Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default AdminPage;
