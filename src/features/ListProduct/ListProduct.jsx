import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productAPI from "../../api/productAPI";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Scroll from "../../components/Scroll/Scroll";
import ProductFilters from "./components/Filter/ProductFilters";
import ProductList from "./components/ProductList/ProductList";
import ProductSort from "./components/Sort/ProductSort";
import "./css/ListProductPage.css";
import "./css/ListProductPage.scss";

ListPage.propTypes = {};

function ListPage(props) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const listType = urlParams.getAll("listType");

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 16,
  });
  const [pagination, setPagination] = useState({
    limit: 16,
    page: 1,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await productAPI.getProductWithType({
          listType: listType,
          _page: filters._page,
          _limit: filters._limit,
        });
        setProducts(response.data);
        setPagination(response.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [queryString, filters]);

  const handlePaginationChange = (event, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  return (
    <div className="product">
      <Header />
      <Menu />
      <div className="product-title">
        <div className="title">
          <Link to="/">Trang chủ / </Link>
          <span>Sản phẩm</span>
        </div>
      </div>
      {products.length > 0 ? (
        <>
          <div className="product-sort">
            <ProductSort />
          </div>
          <div className="product-content">
            <div className="product-content-filter">
              <ProductFilters />
            </div>
            <div className="product-content-product">
              <div className="product-content-product-container">
                <ProductList data={products} />
              </div>
              <div className="product-content-pagination">
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePaginationChange}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="product-notfound">
            <p>Không có sản phẩm phù hợp</p>
          </div>
        </>
      )}

      <Footer />
      <Scroll showBelow={250} />
    </div>
  );
}

export default ListPage;
