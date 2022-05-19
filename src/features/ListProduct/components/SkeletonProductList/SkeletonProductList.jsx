import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";

SkeletonProductList.propTypes = {};

function SkeletonProductList(props) {
  return (
    <Box>
      <Grid container width="100%">
        <Box
          width="100%"
          height="100px"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "20px",
            padding: "0px 50px",
          }}
        >
          <Skeleton width="150px" height="70px" />
        </Box>

        <Box
          width="100%"
          style={{ marginTop: "10px", padding: "0px 50px", display: "flex" }}
        >
          <Box width="20%">
            <Box width="100%">
              <Skeleton variant="text" width="50%" height="20px" />
            </Box>
            <Box width="100%">
              {Array.from(new Array(5)).map(() => (
                <Grid
                  item
                  key={Math.floor(Math.random() * 10000)}
                  style={{ display: "flex" }}
                >
                  <Skeleton width="30px" height="40px" />
                  <Skeleton
                    variant="text"
                    width="50px"
                    style={{ marginLeft: "10px" }}
                  />
                </Grid>
              ))}
            </Box>

            <Box width="100%" style={{ marginTop: "30px" }}>
              <Skeleton variant="text" width="50%" height="20px" />
            </Box>
            <Box width="100%">
              {Array.from(new Array(4)).map(() => (
                <Grid
                  item
                  key={Math.floor(Math.random() * 10000)}
                  style={{ display: "flex" }}
                >
                  <Skeleton width="30px" height="40px" />
                  <Skeleton
                    variant="text"
                    width="100px"
                    style={{ marginLeft: "10px" }}
                  />
                </Grid>
              ))}
            </Box>

            <Box width="100%" style={{ marginTop: "30px" }}>
              <Skeleton variant="text" width="50%" height="20px" />
            </Box>
            <Box width="100%" style={{ display: "flex", flexWrap: "wrap" }}>
              {Array.from(new Array(10)).map(() => (
                <Grid
                  item
                  key={Math.floor(Math.random() * 10000)}
                  style={{ display: "flex", width: "50%", marginTop: "10px" }}
                >
                  <Skeleton variant="circle" width={20} height={20} />
                  <Skeleton
                    variant="text"
                    width="50px"
                    style={{ marginLeft: "10px" }}
                  />
                </Grid>
              ))}
            </Box>

            <Box width="100%" style={{ marginTop: "30px" }}>
              <Skeleton variant="text" width="50%" height="20px" />
            </Box>
            <Box width="100%">
              {Array.from(new Array(3)).map(() => (
                <Grid
                  item
                  key={Math.floor(Math.random() * 10000)}
                  style={{ display: "flex" }}
                >
                  <Skeleton width="30px" height="40px" />
                  <Skeleton
                    variant="text"
                    width="100px"
                    style={{ marginLeft: "10px" }}
                  />
                </Grid>
              ))}
            </Box>
          </Box>

          <Box
            width="80%"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {Array.from(new Array(16)).map(() => (
              <Box
                key={Math.floor(Math.random() * 10000)}
                width="220px"
                height="300px"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginBottom: "30px",
                }}
              >
                <Skeleton variant="rect" width="100%" height="80%" />
                <Skeleton width="40%" />
                <Skeleton animation="wave" width="100%" height="30px" />

                <Box
                  width="100%"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Skeleton animation="wave" width="40%" />
                  <Skeleton animation="wave" width="40%" />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default SkeletonProductList;
