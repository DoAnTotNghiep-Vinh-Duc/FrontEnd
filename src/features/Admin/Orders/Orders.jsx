import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import adminAPI from "../../../api/adminAPI";
import sortASC_DESC from "../../../data/sortASC_DESC.json";
import status_order from "../../../data/status_order.json";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import Order from "./Order/Order";
import "./Orders.scss";

Orders.propTypes = {};

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
  });
  const [openFilterStatus, setOpenFilterStatus] = useState(false);
  const [openFilterCustomer, setOpenFilterCustomer] = useState(false);
  const [openFilterCash, setOpenFilterCash] = useState(false);
  const [openFilterDate, setOpenFilterDate] = useState(false);
  const [iconCustomer, setIconCustomer] = useState("");
  const [iconCash, setIconCash] = useState("");
  const [iconDate, setIconDate] = useState("");
  const [iconStatus, setIconStatus] = useState("HANDLING");

  const handlePaginationChange = (event, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  useEffect(() => {
    if (iconCustomer) {
      (async () => {
        try {
          const response = await adminAPI.sortOrder(
            "NAME",
            iconCustomer,
            iconStatus,
            filters
          );
          setOrders(response.data);
          setPagination(response.pagination);
        } catch (error) {
          console.log(error);
        }
      })();
    } else if (iconCash) {
      (async () => {
        try {
          const response = await adminAPI.sortOrder(
            "TOTALMONEY",
            iconCash,
            iconStatus,
            filters
          );
          setOrders(response.data);
          setPagination(response.pagination);
        } catch (error) {
          console.log(error);
        }
      })();
    } else if (iconDate) {
      (async () => {
        try {
          const response = await adminAPI.sortOrder(
            "ORDERDATE",
            iconDate,
            iconStatus,
            filters
          );
          setOrders(response.data);
          setPagination(response.pagination);
        } catch (error) {
          console.log(error);
        }
      })();
    } else if (iconStatus) {
      (async () => {
        try {
          const response = await adminAPI.sortOrder(
            "ORDERDATE",
            "DESC",
            iconStatus,
            filters
          );
          setOrders(response.data);
          setPagination(response.pagination);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      (async () => {
        try {
          const response = await adminAPI.sortOrder(
            "ORDERDATE",
            "DESC",
            iconStatus,
            filters
          );
          setOrders(response.data);
          setPagination(response.pagination);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [filters, iconCash, iconCustomer, iconDate, iconStatus]);

  const handleOpenFilterStatus = () => {
    setOpenFilterStatus(!openFilterStatus);
  };
  const handleOpenFilterCustomer = () => {
    setOpenFilterCustomer(!openFilterCustomer);
  };
  const handleOpenFilterCash = () => {
    setOpenFilterCash(!openFilterCash);
  };
  const handleOpenFilterDate = () => {
    setOpenFilterDate(!openFilterDate);
  };

  const handleSelectStatusFiler = (item) => {
    setIconStatus(item.value);
    setIconDate("");
    setIconCustomer("");
    setIconCash("");
  };
  const handleSelectCustomerFiler = (item) => {
    setIconCustomer(item.value);
    setIconCash("");
    setIconDate("");
  };
  const handleSelectCashFiler = (item) => {
    setIconCash(item.value);
    setIconCustomer("");
    setIconDate("");
  };
  const handleSelectDateFiler = (item) => {
    setIconDate(item.value);
    setIconCustomer("");
    setIconCash("");
  };

  return (
    <div className="admin-orders">
      <NavBars />
      <div className="admin-orders-content">
        <Header />
        <div className="admin-orders-content-body">
          <div className="admin-orders-content-body-container">
            <div className="admin-orders-content-body-container-header">
              <div className="admin-orders-content-body-container-header-title">
                Danh s??ch h??a ????n
              </div>
              <div className="admin-orders-content-body-container-header-search">
                <div className="admin-orders-content-body-container-header-search-container">
                  <input type="text" placeholder="T??m ki???m..." name="" id="" />
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
            <div className="admin-orders-content-body-container-body">
              <div className="admin-orders-content-body-container-body-header">
                <div className="admin-orders-content-body-container-body-header-customer">
                  <div className="admin-orders-customer-icon">
                    {iconCustomer === "ASC" ? (
                      <i className="bi bi-arrow-up"></i>
                    ) : iconCustomer === "DESC" ? (
                      <i className="bi bi-arrow-down"></i>
                    ) : (
                      ""
                    )}
                  </div>

                  <p>KH??CH H??NG</p>
                  <div className="admin-orders-customer-icon-filter">
                    <i
                      className="bi bi-list-task"
                      onClick={handleOpenFilterCustomer}
                    >
                      {openFilterCustomer && (
                        <div className="dropdown-customer">
                          {sortASC_DESC.map((item) => {
                            return (
                              <p
                                key={item.id}
                                onClick={() => handleSelectCustomerFiler(item)}
                              >
                                {item.label}
                              </p>
                            );
                          })}
                        </div>
                      )}
                    </i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-header-cash">
                  <div className="admin-orders-cash-icon">
                    {iconCash === "ASC" ? (
                      <i className="bi bi-arrow-up"></i>
                    ) : iconCash === "DESC" ? (
                      <i className="bi bi-arrow-down"></i>
                    ) : (
                      ""
                    )}
                  </div>
                  <p>T???NG TI???N</p>
                  <div className="admin-orders-cash-icon-filter">
                    <i
                      className="bi bi-list-task"
                      onClick={handleOpenFilterCash}
                    >
                      {openFilterCash && (
                        <div className="dropdown-cash">
                          {sortASC_DESC.map((item) => {
                            return (
                              <p
                                key={item.id}
                                onClick={() => handleSelectCashFiler(item)}
                              >
                                {item.label}
                              </p>
                            );
                          })}
                        </div>
                      )}
                    </i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-header-date">
                  <div className="admin-orders-date-icon">
                    {iconDate === "ASC" ? (
                      <i className="bi bi-arrow-up"></i>
                    ) : iconDate === "DESC" ? (
                      <i className="bi bi-arrow-down"></i>
                    ) : (
                      ""
                    )}
                  </div>
                  <p>NG??Y ?????T H??NG</p>
                  <div className="admin-orders-date-icon-filter">
                    <i
                      className="bi bi-list-task"
                      onClick={handleOpenFilterDate}
                    >
                      {openFilterDate && (
                        <div className="dropdown-date">
                          {sortASC_DESC.map((item) => {
                            return (
                              <p
                                key={item.id}
                                onClick={() => handleSelectDateFiler(item)}
                              >
                                {item.label}
                              </p>
                            );
                          })}
                        </div>
                      )}
                    </i>
                  </div>
                </div>
                <div className="admin-orders-content-body-container-body-header-dateReceive">
                  <p>NG??Y NH???N H??NG</p>
                </div>
                <div className="admin-orders-content-body-container-body-header-shipper">
                  <p>NG?????I V???N CHUY???N</p>
                </div>
                <div className="admin-orders-content-body-container-body-header-status">
                  <p>T??NH TR???NG</p>
                  <i
                    className="bi bi-list-task"
                    onClick={handleOpenFilterStatus}
                  >
                    {openFilterStatus && (
                      <div className="dropdown-status">
                        {status_order.map((item) => {
                          return (
                            <p
                              key={item.id}
                              onClick={() => handleSelectStatusFiler(item)}
                            >
                              {item.label}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </i>
                </div>
                <div className="admin-orders-content-body-container-body-header-action"></div>
              </div>
              <div className="admin-orders-content-body-container-body-orders">
                {orders.map((order) => {
                  return <Order key={order._id} order={order} />;
                })}
              </div>
            </div>
            <div className="admin-orders-content-body-container-footer">
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
  );
}

export default Orders;
