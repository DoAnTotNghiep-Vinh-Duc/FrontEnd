import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ListPage from "./pages/ListPage/ListPage";
import ProductDetailPage from "./pages/Details/ProductDetailPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
        <Route path={`${match.url}/:productId`} component={ProductDetailPage} />
      </Switch>
    </div>
  );
}

export default ProductFeature;
