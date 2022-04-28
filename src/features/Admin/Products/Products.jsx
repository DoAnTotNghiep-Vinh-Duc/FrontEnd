import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import adminAPI from "../../../api/adminAPI";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import Product from "./Product/Product";
import "./Products.scss";

Products.propTypes = {};

function Products(props) {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 2,
  });
  const [pagination, setPagination] = useState({
    limit: 2,
    page: 1,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getAllProduct({
          _page: filters._page,
          _limit: filters._limit,
        });
        setProducts(response.data);
        setPagination(response.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filters]);

  const handlePaginationChange = (event, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  return (
    <div className="admin-products">
      <NavBars />
      <div className="admin-products-content">
        <Header />
        <div className="admin-products-content-body">
          <div className="admin-products-content-body-addProduct">
            <div className="admin-products-content-body-addProduct-container">
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
                  TÊN SẢN PHẨM
                </div>
                <div className="admin-products-content-body-listProducts-body-header-stock">
                  SỐ LƯỢNG TỒN
                </div>
                <div className="admin-products-content-body-listProducts-body-header-price">
                  GIÁ
                </div>
                <div className="admin-products-content-body-listProducts-body-header-categogy">
                  GIẢM GIÁ
                </div>
                <div className="admin-products-content-body-listProducts-body-header-action"></div>
              </div>
              <div className="admin-products-content-body-listProducts-body-products">
                {products.length ? (
                  <>
                    {products.map((product) => {
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
