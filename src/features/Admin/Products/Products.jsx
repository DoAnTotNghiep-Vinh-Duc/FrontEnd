import Pagination from "@material-ui/lab/Pagination";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import adminAPI from "../../../api/adminAPI";
import { ACTIONS } from "../../../context/actions";
import { GlobalContext } from "../../../context/context";
import sortASC_DESC from "../../../data/sortASC_DESC.json";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import Product from "./Product/Product";
import "./Products.scss";

Products.propTypes = {};

function Products(props) {
  const History = useHistory();
  const { dispatch, state } = useContext(GlobalContext);

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 5,
  });
  const [pagination, setPagination] = useState({
    limit: 5,
    page: 1,
  });
  const [openFilterProduct, setOpenFilterProduct] = useState(false);
  const [openFilterQuantity, setOpenFilterQuantity] = useState(false);
  const [openFilterPrice, setOpenFilterPrice] = useState(false);
  const [iconProduct, setIconProduct] = useState("");
  const [iconQuantity, setIconQuantity] = useState("");
  const [iconPrice, setIconPrice] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getAllProduct({
          _page: filters._page,
          _limit: filters._limit,
        });
        dispatch({
          type: ACTIONS.dataAllProductAdmin,
          payload: response.data,
        });
        setPagination(response.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch, filters]);

  const handlePaginationChange = (event, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  const handleClickAddProduct = () => {
    History.push("/admin/addproduct");
  };

  const handleOpenFilterCustomer = () => {
    setOpenFilterProduct(!openFilterProduct);
  };
  const handleOpenFilterQuantity = () => {
    setOpenFilterQuantity(!openFilterQuantity);
  };
  const handleOpenFilterPrice = () => {
    setOpenFilterPrice(!openFilterPrice);
  };

  const handleSelectCustomerFiler = (item) => {
    setIconProduct(item.value);
    setIconQuantity("");
    setIconPrice("");
  };
  const handleSelectQuantityFiler = (item) => {
    setIconQuantity(item.value);
    setIconProduct("");
    setIconPrice("");
  };
  const handleSelectPriceFiler = (item) => {
    setIconPrice(item.value);
    setIconProduct("");
    setIconQuantity("");
  };

  return (
    <div className="admin-products">
      <NavBars />
      <div className="admin-products-content">
        <Header />
        <div className="admin-products-content-body">
          <div className="admin-products-content-body-addProduct">
            <div
              className="admin-products-content-body-addProduct-container"
              onClick={handleClickAddProduct}
            >
              <i className="bi bi-plus-square"></i>
              <span>Thêm sản phẩm</span>
            </div>
          </div>
          <div className="admin-products-content-body-listProducts">
            <div className="admin-products-content-body-listProducts-header">
              <div className="admin-products-content-body-listProducts-header-title">
                Danh sách sản phẩm
              </div>
              <div className="admin-products-content-body-listProducts-header-search">
                <div className="admin-products-content-body-listProducts-header-search-container">
                  <input type="text" placeholder="Tìm kiếm..." name="" id="" />
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
            <div className="admin-products-content-body-listProducts-body">
              <div className="admin-products-content-body-listProducts-body-header">
                <div className="admin-products-content-body-listProducts-body-header-seri">
                  MÃ SẢN PHẨM
                </div>
                <div className="admin-products-content-body-listProducts-body-header-image">
                  HÌNH ẢNH
                </div>
                <div className="admin-products-content-body-listProducts-body-header-name">
                  <div className="admin-products-name-icon">
                    {iconProduct === "ASC" ? (
                      <i className="bi bi-arrow-up"></i>
                    ) : iconProduct === "DESC" ? (
                      <i className="bi bi-arrow-down"></i>
                    ) : (
                      ""
                    )}
                  </div>
                  <p>TÊN SẢN PHẨM</p>
                  <div className="admin-products-name-icon-filter">
                    <i
                      className="bi bi-list-task"
                      onClick={handleOpenFilterCustomer}
                    >
                      {openFilterProduct && (
                        <div className="dropdown-name">
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
                <div className="admin-products-content-body-listProducts-body-header-stock">
                  <div className="admin-products-stock-icon">
                    {iconQuantity === "ASC" ? (
                      <i className="bi bi-arrow-up"></i>
                    ) : iconQuantity === "DESC" ? (
                      <i className="bi bi-arrow-down"></i>
                    ) : (
                      ""
                    )}
                  </div>
                  <p>SỐ LƯỢNG TỒN</p>
                  <div className="admin-products-stock-icon-filter">
                    <i
                      className="bi bi-list-task"
                      onClick={handleOpenFilterQuantity}
                    >
                      {openFilterQuantity && (
                        <div className="dropdown-stock">
                          {sortASC_DESC.map((item) => {
                            return (
                              <p
                                key={item.id}
                                onClick={() => handleSelectQuantityFiler(item)}
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
                <div className="admin-products-content-body-listProducts-body-header-price">
                  <div className="admin-products-price-icon">
                    {iconPrice === "ASC" ? (
                      <i className="bi bi-arrow-up"></i>
                    ) : iconPrice === "DESC" ? (
                      <i className="bi bi-arrow-down"></i>
                    ) : (
                      ""
                    )}
                  </div>
                  <p> GIÁ</p>
                  <div className="admin-products-price-icon-filter">
                    <i
                      className="bi bi-list-task"
                      onClick={handleOpenFilterPrice}
                    >
                      {openFilterPrice && (
                        <div className="dropdown-price">
                          {sortASC_DESC.map((item) => {
                            return (
                              <p
                                key={item.id}
                                onClick={() => handleSelectPriceFiler(item)}
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
                <div className="admin-products-content-body-listProducts-body-header-categogy">
                  GIẢM GIÁ
                </div>
                <div className="admin-products-content-body-listProducts-body-header-action"></div>
              </div>
              <div className="admin-products-content-body-listProducts-body-products">
                {state.dataAllProductAdmin.length ? (
                  <>
                    {state.dataAllProductAdmin.map((product) => {
                      return <Product product={product} key={product._id} />;
                    })}
                  </>
                ) : (
                  <p className="product-notfound">Không tìm thấy sản phẩm</p>
                )}
              </div>
              <div className="admin-products-content-body-listProducts-body-footer">
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
  );
}

export default Products;
