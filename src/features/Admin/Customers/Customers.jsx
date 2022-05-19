import Pagination from "@material-ui/lab/Pagination";
import React, { useContext, useEffect, useState } from "react";
import adminAPI from "../../../api/adminAPI";
import { ACTIONS } from "../../../context/actions";
import { GlobalContext } from "../../../context/context";
import sortASC_DESC from "../../../data/sortASC_DESC.json";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import Customer from "./Customer/Customer";
import "./Customers.scss";

Customers.propTypes = {};

function Customers(props) {
  const { dispatch, state } = useContext(GlobalContext);

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
  });
  const [openFilterCustomer, setOpenFilterCustomer] = useState(false);
  const [openFilterNumber, setOpenFilterNumber] = useState(false);
  const [iconCustomer, setIconCustomer] = useState("");
  const [iconNumber, setIconNumber] = useState("");

  const handlePaginationChange = (event, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getAllCustomer({
          _page: filters._page,
          _limit: filters._limit,
        });
        dispatch({
          type: ACTIONS.dataAllCustomerAdmin,
          payload: response.data,
        });
        setPagination(response.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, filters]);

  const handleOpenFilterCustomer = () => {
    setOpenFilterCustomer(!openFilterCustomer);
  };
  const handleOpenFilterNumber = () => {
    setOpenFilterNumber(!openFilterNumber);
  };

  const handleSelectCustomerFiler = (item) => {
    setIconCustomer(item.value);
    setIconNumber("");
  };
  const handleSelectNumberFiler = (item) => {
    setIconNumber(item.value);
    setIconCustomer("");
  };

  return (
    <div className="admin-customers">
      <NavBars />
      <div className="admin-customers-content">
        <Header />
        <div className="admin-customers-content-body">
          <div className="admin-customers-content-body-container">
            <div className="admin-customers-content-body-container-header">
              <div className="admin-customers-content-body-container-header-title">
                Danh sách khách hàng
              </div>
              <div className="admin-customers-content-body-container-header-search">
                <div className="admin-customers-content-body-container-header-search-container">
                  <input type="text" placeholder="Tìm kiếm..." name="" id="" />
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
            <div className="admin-customers-content-body-container-body">
              <div className="admin-customers-content-body-container-body-header">
                <div className="admin-customers-content-body-container-body-header-seri">
                  MÃ KHÁCH HÀNG
                </div>
                <div className="admin-customers-content-body-container-body-header-customer">
                  <div className="admin-products-customer-icon">
                    {iconCustomer === "ASC" ? (
                      <i className="bi bi-arrow-up"></i>
                    ) : iconCustomer === "DESC" ? (
                      <i className="bi bi-arrow-down"></i>
                    ) : (
                      ""
                    )}
                  </div>
                  <p>TÊN KHÁCH HÀNG</p>
                  <div className="admin-products-customer-icon-filter">
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
                <div className="admin-customers-content-body-container-body-header-phone">
                  SỐ ĐIỆN THOẠI
                </div>
                <div className="admin-customers-content-body-container-body-header-quantityOrder">
                  <div className="admin-products-quantityOrder-icon">
                    {iconNumber === "ASC" ? (
                      <i className="bi bi-arrow-up"></i>
                    ) : iconNumber === "DESC" ? (
                      <i className="bi bi-arrow-down"></i>
                    ) : (
                      ""
                    )}
                  </div>
                  <p>LẦN MUA</p>
                  <div className="admin-products-quantityOrder-icon-filter">
                    <i
                      className="bi bi-list-task"
                      onClick={handleOpenFilterNumber}
                    >
                      {openFilterNumber && (
                        <div className="dropdown-quantityOrder">
                          {sortASC_DESC.map((item) => {
                            return (
                              <p
                                key={item.id}
                                onClick={() => handleSelectNumberFiler(item)}
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
                <div className="admin-customers-content-body-container-body-header-address">
                  ĐỊA CHỈ
                </div>
                <div className="admin-customers-content-body-container-body-header-action"></div>
              </div>
              <div className="admin-customers-content-body-container-body-customers">
                {state.dataAllCustomerAdmin.map((customer) => {
                  return customer.roleAccount !== "Admin" ? (
                    <>
                      <Customer key={customer._id} customer={customer} />
                    </>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
            <div className="admin-customers-content-body-container-footer">
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

export default Customers;
