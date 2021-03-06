import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Product from "../Product/Product";

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

function ProductList(props) {
  const { data } = props;

  return (
    <Fragment>
      {data.map((product) => {
        return <Product product={product} key={product._id} />;
      })}
    </Fragment>
  );
}

export default ProductList;
