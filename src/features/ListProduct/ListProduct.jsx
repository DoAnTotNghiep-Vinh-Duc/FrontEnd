import Pagination from "@material-ui/lab/Pagination";
import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import productAPI from "../../api/productAPI";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Scroll from "../../components/Scroll/Scroll";
import ProductFilters from "./components/Filter/ProductFilters";
import ProductList from "./components/ProductList/ProductList";
import ProductSort from "./components/Sort/ProductSort";
import ProductSkeletonList from "./components/Skeleton/ProductSkeletonList";
import "./css/ListProductPage.css";
import "./css/ListProductPage.scss";

ListPage.propTypes = {};

function ListPage(props) {
  const history = useHistory();
  const location = useLocation();

  const queryParam = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 12,
      _sort: params._sort || "salePrice:ASC",
    };
  }, [location.search]);

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 10,
    page: 1,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productAPI.getAll(queryParam);
        setProductList(data.data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed", error);
      }
      setLoading(false);
    })();
  }, [queryParam]);

  const changPagination = (e, page) => {
    const filters = {
      ...queryParam,
      _page: page,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleSortChange = (newSortValue) => {
    const filters = {
      ...queryParam,
      _sort: newSortValue,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
  };

  const handleFiltersChange = (newFiltersValue) => {
    const filters = {
      ...queryParam,
      ...newFiltersValue,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    });
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
      <div className="product-sort">
        <ProductSort onChange={handleSortChange} />
      </div>
      <div className="product-content">
        <div className="product-content-filter">
          <ProductFilters onChange={handleFiltersChange} />
        </div>
        <div className="product-content-product">
          {loading ? (
            <ProductSkeletonList length={9} />
          ) : (
            <ProductList data={productList} />
          )}
          <div className="product-content-pagination">
            <Pagination
              count={Math.ceil(pagination.total.data / pagination.limit)}
              page={pagination.page}
              color="primary"
              onChange={changPagination}
            />
          </div>
        </div>
      </div>
      <Footer />
      <Scroll showBelow={250} />
    </div>
  );
}

export default ListPage;
