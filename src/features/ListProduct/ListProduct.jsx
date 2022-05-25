import Pagination from "@material-ui/lab/Pagination";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import productAPI from "../../api/productAPI";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Scroll from "../../components/Scroll/Scroll";
import FilterByColor from "./components/Filter/FilterByColor/FilterByColor";
import FilterByPrice from "./components/Filter/FilterByPrice/FilterByPrice";
import FilterByRate from "./components/Filter/FilterByRate/FilterByRate";
import FilterBySize from "./components/Filter/FilterBySize/FilterBySize";
import ProductList from "./components/ProductList/ProductList";
import SkeletonProductList from "./components/SkeletonProductList/SkeletonProductList";
import ProductSort from "./components/Sort/ProductSort";
import "./css/ListProductPage.css";
import "./css/ListProductPage.scss";

ListPage.propTypes = {};

function ListPage(props) {
  const location = useLocation();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const listType = urlParams.getAll("listType");
  let listSearch = urlParams.get("search");

  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 16,
    listType: listType,
    optionSort: "price-asc",
    optionPrice: null,
    optionSizes: null,
    optionColors: null,
    optionRates: null,
    keySearch: listSearch,
  });
  const [pagination, setPagination] = useState({
    limit: 16,
    page: 1,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await productAPI.getProductWithFilters({
          filters,
          listType,
          listSearch,
        });
        setProducts(response.data);
        setPagination(response.pagination);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    })();
  }, [filters, location.search]);

  const handlePaginationChange = (event, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  const handleChangeSort = (value) => {
    setFilters((prev) => ({
      ...prev,
      optionSort: value,
    }));
  };

  const handleChangeSize = (value) => {
    if (filters.optionSizes === null) {
      setFilters((prev) => ({
        ...prev,
        optionSizes: [value],
      }));
    } else {
      const index = filters.optionSizes.findIndex((x) => x === value);
      if (index < 0) {
        setFilters((prev) => ({
          ...prev,
          optionSizes: [...filters.optionSizes, value],
        }));
      } else {
        const a = filters.optionSizes.slice(0, index);
        const b = filters.optionSizes.slice(
          index + 1,
          filters.optionSizes.length
        );
        const new_arr = [...a, ...b];

        setFilters((prev) => ({
          ...prev,
          optionSizes: new_arr.length ? new_arr : null,
        }));
      }
    }
  };

  const handleChangePrice = (value) => {
    setFilters((prev) => ({
      ...prev,
      optionPrice: value,
    }));
  };

  const handleChangeColor = (value) => {
    if (filters.optionColors === null) {
      setFilters((prev) => ({
        ...prev,
        optionColors: [value],
      }));
    } else {
      const index = filters.optionColors.findIndex((x) => x === value);
      if (index < 0) {
        setFilters((prev) => ({
          ...prev,
          optionColors: [...filters.optionColors, value],
        }));
      } else {
        setFilters((prev) => ({
          ...prev,
          optionColors: filters.optionColors.filter((x) => x !== value),
        }));
      }
    }
  };

  const handleChangeRate = (value) => {
    setFilters((prev) => ({
      ...prev,
      optionRates: Number(value),
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
      {loading ? (
        <SkeletonProductList />
      ) : (
        <>
          {products.length > 0 ? (
            <>
              <div className="product-sort">
                <ProductSort onChange={handleChangeSort} />
              </div>
              <div className="product-content">
                <div className="product-content-filter">
                  <div className="producr-content-filter-branch">
                    <FilterBySize onChange={handleChangeSize} />
                  </div>
                  <div className="producr-content-filter-price">
                    <FilterByPrice onChange={handleChangePrice} />
                  </div>
                  <div className="producr-content-filter-color">
                    <FilterByColor onChange={handleChangeColor} />
                  </div>
                  <div className="producr-content-filter-rate">
                    <FilterByRate onChange={handleChangeRate} />
                  </div>
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
        </>
      )}

      <Footer />
      <Scroll showBelow={250} />
    </div>
  );
}

export default ListPage;
