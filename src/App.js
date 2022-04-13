import { Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Customers_Admin from "./features/Admin/Customers/Customers";
import Dashboard from "./features/Admin/Dashboard/Dashboard";
import Orders_Admin from "./features/Admin/Orders/Orders";
import Products_Admin from "./features/Admin/Products/Products";
import Auth from "./features/Auth/Auth";
import Cart from "./features/Cart/index";
import ChangePassword from "./features/ChangePassword/ChangePassword";
import ForgotPassword from "./features/ForgotPassword/ForgotPassword";
import Home from "./features/Home/Home";
import ListProduct from "./features/ListProduct/index";
import SuccessVerify from "./features/SuccessVerify/SuccessVerify";
import VerifyAccount from "./features/VerifyAccount/VerifyAccount";
import "./sass/index.scss";
// const Customers_Admin = lazy(() =>
//   import("./features/Admin/Customers/Customers")
// );
// const Dashboard = lazy(() => import("./features/Admin/Dashboard/Dashboard"));
// const Orders_Admin = lazy(() => import("./features/Admin/Orders/Orders"));
// const Products_Admin = lazy(() => import("./features/Admin/Products/Products"));
// const Auth = lazy(() => import("./features/Auth/Auth"));
// const Cart = lazy(() => import("./features/Cart/index"));
// const Home = lazy(() => import("./features/Home/Home"));
// // const ListProduct = lazy(() => import("./features/ListProduct/index"));
// const VerifyAccount = lazy(() =>
//   import("./features/VerifyAccount/VerifyAccount")
// );
// const ForgotPassword = lazy(() =>
//   import("./features/ForgotPassword/ForgotPassword")
// );
// const ChangePassword = lazy(() =>
//   import("./features/ChangePassword/ChangePassword")
// );

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact></Route>

        <Route path="/auth" component={Auth} exact></Route>
        <Route path="/auth/verify" component={VerifyAccount} exact></Route>

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

        <Route path="/successVerify" component={SuccessVerify} exact></Route>

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
