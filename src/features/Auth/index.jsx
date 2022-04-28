import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import VerifyAccount from "../VerifyAccount/VerifyAccount";
import Auth from "./Auth";

AuthPage.propTypes = {};

function AuthPage(props) {
  const match = useRouteMatch();

  const [email, setEmail] = useState("");

  const receiEmailHandle = (email) => {
    setEmail(email);
  };
  return (
    <div>
      <Switch>
        <Route path={match.url} exact>
          <Auth sendEmailToVerify={receiEmailHandle} />
        </Route>
        <Route path={`${match.url}/verify`} exact>
          <VerifyAccount email={email} />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthPage;
