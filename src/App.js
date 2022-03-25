import { Route, Switch } from "react-router-dom";
import Customers_Admin from "./features/Admin/Customers/Customers";
import Dashboard from "./features/Admin/Dashboard/Dashboard";
import Orders_Admin from "./features/Admin/Orders/Orders";
import Products_Admin from "./features/Admin/Products/Products";
import Auth from "./features/Auth/Auth";
import Cart from "./features/Cart/index";
import Home from "./features/Home/Home";
import ListProduct from "./features/ListProduct/index";
import VerifyAccount from "./features/VerifyAccount/VerifyAccount";
import ForgotPassword from "./features/ForgotPassword/ForgotPassword";
import ChangePassword from "./features/ChangePassword/ChangePassword";
import "./sass/index.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth" component={Auth} exact></Route>
        <Route path="/" component={Home} exact></Route>
        <Route path="/products" component={ListProduct}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/admin" component={Dashboard} exact></Route>
        <Route path="/admin/products" component={Products_Admin} exact></Route>
        <Route path="/admin/orders" component={Orders_Admin} exact></Route>
        <Route
          path="/admin/customers"
          component={Customers_Admin}
          exact
        ></Route>
        <Route path="/verifyAccount" component={VerifyAccount} exact></Route>
        <Route path="/forgotPassword" component={ForgotPassword} exact></Route>
        <Route
          path="/forgotPassword/changePassword"
          component={ChangePassword}
          exact
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
