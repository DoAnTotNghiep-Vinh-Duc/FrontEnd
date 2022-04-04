import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./sass/index.scss";
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
import "react-toastify/dist/ReactToastify.css";
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

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

function FacebookCircularProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Route path="/products" component={ListProduct}></Route>
      <Suspense
        fallback={
          <div className={classes.root}>
            <FacebookCircularProgress />
          </div>
        }
      >
        <Switch>
          <Route path="/auth" component={Auth} exact></Route>

          <Route path="/" component={Home} exact></Route>

          <Route path="/cart" component={Cart}></Route>

          <Route path="/admin" component={Dashboard} exact></Route>

          <Route
            path="/admin/products"
            component={Products_Admin}
            exact
          ></Route>

          <Route path="/admin/orders" component={Orders_Admin} exact></Route>

          <Route
            path="/admin/customers"
            component={Customers_Admin}
            exact
          ></Route>

          <Route path="/verifyAccount" component={VerifyAccount} exact></Route>

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
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
