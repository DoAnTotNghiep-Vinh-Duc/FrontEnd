import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound/NotFound";
import InformationPage from "../CartInformation/InformationPage";
import NotificationPage from "../CartNotification/NotificationPage";
import PaymentPage from "../Payment/PaymentPage";
import CartPage from "./CartPage";

CartFeature.propTypes = {};

function CartFeature(props) {
  const match = useRouteMatch();
  const [user, setUser] = useState({});

  const handleReceiceUser = (user) => {
    setUser(user);
  };
  return (
    <div>
      <Switch>
        <Route path={match.url} exact>
          <CartPage />
        </Route>

        <Route path={`${match.url}/information`} exact>
          <InformationPage sendUserShip={handleReceiceUser} />
        </Route>

        <Route path={`${match.url}/information/payment`} exact>
          <PaymentPage user={user} />
        </Route>

        <Route path={`${match.url}/information/payment/notification`} exact>
          <NotificationPage />
        </Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default CartFeature;
