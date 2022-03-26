import { Route, Switch } from "react-router-dom";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Products from "./Admin/Products/Products";
import Orders from "./Admin/Orders/Orders";
import Customers from "./Admin/Customers/Customers";
import CartFeature from "./components/Cart";
import Home from "./components/Home/Home";
import ProductFeature from "./components/Product";
import SignIn_SignUp from "./components/SignIn_SignUp/SignIn_SignUp";
import "./sass/index.scss";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/auth" component={SignIn_SignUp} exact></Route>
        <Route path="/" component={Home} exact></Route>
        <Route path="/products" component={ProductFeature}></Route>
        <Route path="/cart" component={CartFeature}></Route>
        <Route path="/cart" component={CartFeature}></Route>
        <Route path="/admin" component={Dashboard} exact></Route>
        <Route path="/admin/products" component={Products} exact></Route>
        <Route path="/admin/orders" component={Orders} exact></Route>
        <Route path="/admin/customers" component={Customers} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
