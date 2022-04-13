import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import InformationPage from "../CartInformation/InformationPage";
import NotificationPage from "../CartNotification/NotificationPage";
import PaymentPage from "../Payment/PaymentPage";
import CartPage from "./CartPage";

CartFeature.propTypes = {};

function CartFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={CartPage} />
        <Route
          path={`${match.url}/information`}
          exact
          component={InformationPage}
        />
        <Route
          path={`${match.url}/information/payment`}
          exact
          component={PaymentPage}
        />
        <Route
          path={`${match.url}/information/payment/notification`}
          exact
          component={NotificationPage}
        />
      </Switch>
    </div>
  );
}

export default CartFeature;
