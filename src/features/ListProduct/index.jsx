import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import NotFound from "../../components/NotFound/NotFound";
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
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path={match.url} exact component={ListProduct} />

          <Route
            path={`${match.url}/:productId`}
            component={ProductDetailPage}
            exact
          />

          <Route component={NotFound}></Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default ProductFeature;
