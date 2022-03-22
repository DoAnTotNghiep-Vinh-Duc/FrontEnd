import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ListProduct from "./ListProduct";
import ProductDetailPage from "../ProductDetail/ProductDetailPage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={ListProduct} />
        <Route path={`${match.url}/:productId`} component={ProductDetailPage} />
      </Switch>
    </div>
  );
}

export default ProductFeature;
