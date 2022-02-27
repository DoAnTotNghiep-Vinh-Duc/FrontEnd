import { Route, Switch } from "react-router-dom";
import CartFeature from "./components/Cart";
import Home from "./components/Home/Home";
import ProductFeature from "./components/Product";
import SignIn_SignUp from "./components/SignIn_SignUp/SignIn_SignUp";
import "./sass/index.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth" component={SignIn_SignUp} exact></Route>
        <Route path="/" component={Home} exact></Route>
        <Route path="/products" component={ProductFeature}></Route>
        <Route path="/cart" component={CartFeature}></Route>
      </Switch>
    </div>
  );
}

export default App;
