import React, { useEffect, useState } from "react";
import adminAPI from "../../../../../api/adminAPI";
import PhiHanhGia from "../../../../../assets/product/PhiHanhGia-blue.jpg";
import Pagination from "@material-ui/lab/Pagination";
import "./Products.scss";

Products.propTypes = {};

function Products(props) {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 2,
  });
  const [pagination, setPagination] = useState({
    limit: 1,
    page: 2,
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
        const response = await adminAPI.topProductLowQuantity({
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

  return (
    <div className="admin-content-body-products">
      <div className="admin-content-body-products-header">
        <div className="admin-content-body-products-header-title">
          Mặt hàng số lượng thấp
        </div>
        <div className="admin-content-body-products-header-search">
          <div className="admin-content-body-products-header-search-container">
            <input type="text" name="" id="" placeholder="Tìm kiếm..." />
            <i className="bi bi-search"></i>
          </div>
        </div>
      </div>
      <div className="admin-content-body-products-body">
        <div className="admin-content-body-products-body-header">
          <div className="admin-content-body-products-body-header-image">
            HÌNH ẢNH
          </div>
          <div className="admin-content-body-products-body-header-name">
            TÊN SẢN PHẨM
          </div>
          <div className="admin-content-body-products-body-header-stock">
            SỐ LƯỢNG TỒN
          </div>
        </div>
        <div className="admin-content-body-products-body-products">
          {products.map((element) => {
            return (
              <div
                className="admin-content-body-products-body-products-product"
                key={element._id}
              >
                <div className="admin-content-body-products-body-products-product-image">
                  <img
                    src={
                      element.images[
                        Math.floor(Math.random() * element.images.length)
                      ] ??
                      "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
                    }
                    alt=""
                  />
                </div>
                <div className="admin-content-body-products-body-products-product-name">
                  {element.name}
                </div>
                <div className="admin-content-body-products-body-products-product-stock">
                  {element.quantity}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="admin-content-body-products-footer">
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

export default Products;
