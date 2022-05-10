import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { DataProvider } from "./context/context";
import AdminPage from "./features/Admin/index";
import Auth from "./features/Auth/index";
import Cart from "./features/Cart/index";
import ChangePassword from "./features/ChangePassword/ChangePassword";
import ForgotPassword from "./features/ForgotPassword/ForgotPassword";
import Home from "./features/Home/Home";
import ListFavorite from "./features/ListFavorite/ListFavorite";
import ListProduct from "./features/ListProduct/index";
import SuccessVerify from "./features/SuccessVerify/SuccessVerify";
import InformationPage from "./features/UserInformation/index";
import "./sass/index.scss";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Switch>
          <Route path="/" component={Home} exact></Route>

          <Route path="/auth" component={Auth}></Route>

          <Route path="/products" component={ListProduct}></Route>

          <Route path="/cart" component={Cart}></Route>

          <Route path="/favorites" component={ListFavorite}></Route>

          <Route path="/admin" component={AdminPage}></Route>

          <Route path="/verifyAccount" component={SuccessVerify}></Route>

          <Route
            path="/forgotPassword"
            component={ForgotPassword}
            exact
          ></Route>
          <Route
            path="/forgotPassword/changePassword"
            component={ChangePassword}
            exact
          ></Route>

          <Route path="/userInformation" component={InformationPage}></Route>
        </Switch>
      </DataProvider>
    </div>
  );
}

export default App;
