import React, { useContext, useEffect, useState } from "react";
import adminAPI from "../../../api/adminAPI";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import Customer from "./Customer/Customer";
import "./Customers.scss";
import Pagination from "@material-ui/lab/Pagination";
import { GlobalContext } from "../../../context/context";
import { ACTIONS } from "../../../context/actions";

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
                  TÊN KHÁCH HÀNG
                </div>
                <div className="admin-customers-content-body-container-body-header-phone">
                  SỐ ĐIỆN THOẠI
                </div>
                <div className="admin-customers-content-body-container-body-header-quantityOrder">
                  SỐ LẦN MUA
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
