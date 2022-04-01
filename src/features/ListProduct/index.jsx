import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
// import ListProduct from "./ListProduct";
// import ProductDetailPage from "../ProductDetail/ProductDetailPage";
const ListProduct = lazy(() => import("./ListProduct"));
const ProductDetailPage = lazy(() =>
  import("../ProductDetail/ProductDetailPage")
);

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={match.url} exact component={ListProduct} />
          <Route
            path={`${match.url}/:productId`}
            component={ProductDetailPage}
          />
        </Switch>
      </Suspense>
    </div>
  );
}

export default ProductFeature;
