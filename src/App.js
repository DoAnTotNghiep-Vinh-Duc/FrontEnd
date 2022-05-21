import { useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";
import NotFound from "./components/NotFound/NotFound";
import { DataProvider } from "./context/context";
import AdminPage from "./features/Admin/index";
import Auth from "./features/Auth/index";
import Cart from "./features/Cart/index";
import ForgotPassword from "./features/ForgotPassword/ForgotPassword";
import Home from "./features/Home/Home";
import ListFavorite from "./features/ListFavorite/ListFavorite";
import ListProduct from "./features/ListProduct/index";
import SuccessVerify from "./features/SuccessVerify/SuccessVerify";
import InformationPage from "./features/UserInformation/index";
import VerifyPassword from "./features/VerifyPassword/VerifyPassword";
import { authentication } from "./pages/authentications";
import "./sass/index.scss";

function App() {
  const socket = useRef();

  useEffect(() => {
    socket.current = io("localhost:5000", {
      transports: ["websocket", "polling", "flashsocket"],
    });
  }, []);

  useEffect(() => {
    socket.current.on("OKOK", (data) => {
      console.log(data);
    });
  });

  return (
    <div className="App">
      <DataProvider>
        <Switch>
          <Route path="/" exact>
            <Home socket={socket} />
          </Route>

          <Route path="/auth" component={Auth}></Route>

          <Route path="/products" component={ListProduct}></Route>

          <Route path="/cart" component={Cart}></Route>

          <Route path="/favorites" component={ListFavorite}></Route>

          <PrivateRouter path="/admin" component={AdminPage}></PrivateRouter>

          <Route
            path="/verifyAccount/:accountId"
            component={SuccessVerify}
          ></Route>

          <Route
            path="/verifyPassword/:passwordId"
            component={VerifyPassword}
          ></Route>

          <Route
            path="/forgotPassword"
            component={ForgotPassword}
            exact
          ></Route>
          {/* <Route
            path="/forgotPassword/changePassword"
            component={RenewPassword}
            exact
          ></Route> */}

          <Route path="/userInformation" component={InformationPage}></Route>

          <Route component={NotFound}></Route>
        </Switch>
      </DataProvider>
    </div>
  );
}

function PrivateRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authentication.isAuthencation().role === "Admin" ? (
          <Component {...props} />
        ) : (
          <NotFound />
        )
      }
    ></Route>
  );
}

export default App;
