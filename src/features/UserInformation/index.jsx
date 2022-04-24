import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Phone from "../Phone/Phone";
import VerifyPhone from "../VerifyPhone/VerifyPhone";
import UserInformation from "./UserInformation";

InformationPage.propTypes = {};

function InformationPage(props) {
  const match = useRouteMatch();

  const [phone, setPhone] = useState("");

  const receivePhoneFromPhonePage = (phone) => {
    setPhone(phone);
  };

  return (
    <div>
      <Switch>
        <Route path={match.url} exact>
          <UserInformation />
        </Route>
        <Route path={`${match.url}/phone`} exact>
          <Phone onSendPhoneToPage={receivePhoneFromPhonePage} />
        </Route>
        <Route path={`${match.url}/phone/verifyPhone`} exact>
          <VerifyPhone phoneReceive={phone} />
        </Route>
      </Switch>
    </div>
  );
}

export default InformationPage;
