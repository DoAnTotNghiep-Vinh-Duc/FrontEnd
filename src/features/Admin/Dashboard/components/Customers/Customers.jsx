import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import adminAPI from "../../../../../api/adminAPI";
import "./Customers.scss";

Customers.propTypes = {};

function Customers(props) {
  const [customers, setCustomers] = useState([]);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 5,
  });
  const [pagination, setPagination] = useState({
    limit: 5,
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
        const response = await adminAPI.topCustomer({
          _page: filters._page,
          _limit: filters._limit,
        });
        setCustomers(response.data);
        setPagination(response.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filters]);

  return (
    <div className="admin-content-body-customers">
      <div className="admin-content-body-customers-header">Top khách hàng</div>
      <div className="admin-content-body-customers-body">
        <div className="admin-content-body-customers-body-header">
          <div className="admin-content-body-customers-body-header-customers">
            KHÁCH HÀNG
          </div>
          <div className="admin-content-body-customers-body-header-orders">
            SỐ SẢN PHẨM
          </div>
          <div className="admin-content-body-customers-body-header-cash">
            TỔNG
          </div>
        </div>
        <div className="admin-content-body-customers-body-customers">
          {customers.map((customer) => {
            return (
              <div
                className="admin-content-body-customers-body-customers-customer"
                key={customer._id}
              >
                <div className="admin-content-body-customers-body-customers-customer-name">
                  {customer.information.name}
                </div>
                <div className="admin-content-body-customers-body-customers-customer-orders">
                  {customer.totalQuantity}
                </div>
                <div className="admin-content-body-customers-body-customers-customer-cash">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(customer.totalPrice)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="admin-content-body-customers-footer">
        <Pagination
          color="primary"
          count={Math.ceil(pagination.total / pagination.limit)}
          page={pagination.page}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
}

export default Customers;
