import React from "react";
import PropTypes from "prop-types";
import NavBars from "../components/NavBars/NavBars";
import Header from "../components/Header/Header";
import "./Shipper.scss";

import Dialog from "@material-ui/core/Dialog";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import AddShipper from "./AddShipper/AddShipper";

Shipper.propTypes = {};

function Shipper(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="admin-shipper">
        <NavBars />
        <div className="admin-shipper-content">
          <Header />
          <div className="admin-shipper-content-body">
            <div className="admin-shipper-content-body-addProduct">
              <div
                className="admin-shipper-content-body-addProduct-container"
                onClick={handleClickOpen}
              >
                <i className="bi bi-person-plus"></i>
                <span>Thêm người vận chuyển</span>
              </div>
            </div>
            <div className="admin-shipper-content-body-container"></div>
          </div>
        </div>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <AddShipper closeAddShipper={handleClose} />
      </Dialog>
    </>
  );
}

export default Shipper;
