import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";

FilterByBrandSkeleton.propTypes = {
  length: PropTypes.number,
};

FilterByBrandSkeleton.defaultProps = {
  length: 6,
};

function FilterByBrandSkeleton({ length }) {
  return (
    <Fragment>
      {Array.from(new Array(length)).map((x, index) => (
        <Box key={index} display="flex" alignItems="center" marginBottom={1}>
          <Skeleton variant="rect" width={25} height={25} />
          <Skeleton width="40%" />
        </Box>
      ))}
    </Fragment>
  );
}

export default FilterByBrandSkeleton;
