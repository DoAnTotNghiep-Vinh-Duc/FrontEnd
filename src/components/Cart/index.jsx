import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CartPage from "./page/Cart/CartPage";
import InformationPage from "./page/Information/InformationPage";
import NotificationPage from "./page/Notification/NotificationPage";
import PaymentPage from "./page/Payment/PaymentPage";

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
        <Route path={`${match.url}/payment`} exact component={PaymentPage} />
        <Route
          path={`${match.url}/notification`}
          exact
          component={NotificationPage}
        />
      </Switch>
    </div>
  );
}

export default CartFeature;
