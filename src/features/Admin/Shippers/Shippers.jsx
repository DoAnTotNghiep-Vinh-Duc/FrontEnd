import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Pagination from "@material-ui/lab/Pagination";
import React, { useContext, useEffect, useState } from "react";
import adminAPI from "../../../api/adminAPI";
import { ACTIONS } from "../../../context/actions";
import { GlobalContext } from "../../../context/context";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import AddShipper from "./AddShipper/AddShipper";
import Shipper from "./Shipper/Shipper";
import "./Shippers.scss";

Shippers.propTypes = {};

function Shippers(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { dispatch, state } = useContext(GlobalContext);

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getAllShipper(filters);
        dispatch({
          type: ACTIONS.dataAllShipperAdmin,
          payload: response.data,
        });
        setPagination(response.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, filters]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePaginationChange = (event, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
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
            <div className="admin-shipper-content-body-container">
              <div className="admin-shipper-content-body-container-header">
                <div className="admin-shipper-content-body-container-header-title">
                  Danh sách người vận chuyển
                </div>
                <div className="admin-shipper-content-body-container-header-search">
                  <div className="admin-shipper-content-body-container-header-search-container">
                    <input type="text" placeholder="Tìm kiếm..." />
                    <i className="bi bi-search"></i>
                  </div>
                </div>
              </div>
              <div className="admin-shipper-content-body-container-body">
                <div className="admin-shipper-content-body-container-body-header">
                  <div className="admin-products-content-body-listProducts-body-header-avatar">
                    ẢNH
                  </div>
                  <div className="admin-products-content-body-listProducts-body-header-name">
                    HỌ TÊN
                  </div>
                  <div className="admin-products-content-body-listProducts-body-header-email">
                    EMAIL
                  </div>
                  <div className="admin-products-content-body-listProducts-body-header-phone">
                    SỐ ĐIỆN THOẠI
                  </div>
                  <div className="admin-products-content-body-listProducts-body-header-number">
                    ĐƠN ĐÃ GIAO
                  </div>
                  <div className="admin-products-content-body-listProducts-body-header-address">
                    ĐỊA CHỈ
                  </div>
                  <div className="admin-products-content-body-listProducts-body-header-action"></div>
                </div>
                <div className="admin-shipper-content-body-container-body-shippers">
                  {state.dataAllShipperAdmin.map((shipper) => {
                    return <Shipper key={shipper._id} shipper={shipper} />;
                  })}
                </div>
                <div className="admin-shipper-content-body-container-body-footer">
                  <Pagination
                    color="primary"
                    count={Math.ceil(pagination.total / pagination.limit)}
                    page={pagination.page}
                    onChange={handlePaginationChange}
                  />
                </div>
              </div>
            </div>
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

export default Shippers;
