import React from "react";
import PhiHanhGia from "../../../../../assets/product/PhiHanhGia-blue.jpg";
import "./Products.scss";

Products.propTypes = {};

function Products(props) {
  return (
    <div className="admin-content-body-products">
      <div className="admin-content-body-products-header">
        <div className="admin-content-body-products-header-title">Sản phẩm</div>
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
          <div className="admin-content-body-products-body-products-product">
            <div className="admin-content-body-products-body-products-product-image">
              <img src={PhiHanhGia} alt="" />
            </div>
            <div className="admin-content-body-products-body-products-product-name">
              Summer T-Shirt
            </div>
            <div className="admin-content-body-products-body-products-product-stock">
              2
            </div>
          </div>
          <div className="admin-content-body-products-body-products-product">
            <div className="admin-content-body-products-body-products-product-image">
              <img src={PhiHanhGia} alt="" />
            </div>
            <div className="admin-content-body-products-body-products-product-name">
              Summer T-Shirt
            </div>
            <div className="admin-content-body-products-body-products-product-stock">
              2
            </div>
          </div>
          <div className="admin-content-body-products-body-products-product">
            <div className="admin-content-body-products-body-products-product-image">
              <img src={PhiHanhGia} alt="" />
            </div>
            <div className="admin-content-body-products-body-products-product-name">
              Summer T-Shirt
            </div>
            <div className="admin-content-body-products-body-products-product-stock">
              2
            </div>
          </div>
          <div className="admin-content-body-products-body-products-product">
            <div className="admin-content-body-products-body-products-product-image">
              <img src={PhiHanhGia} alt="" />
            </div>
            <div className="admin-content-body-products-body-products-product-name">
              Summer T-Shirt
            </div>
            <div className="admin-content-body-products-body-products-product-stock">
              2
            </div>
          </div>
          <div className="admin-content-body-products-body-products-product">
            <div className="admin-content-body-products-body-products-product-image">
              <img src={PhiHanhGia} alt="" />
            </div>
            <div className="admin-content-body-products-body-products-product-name">
              Summer T-Shirt
            </div>
            <div className="admin-content-body-products-body-products-product-stock">
              2
            </div>
          </div>
        </div>
      </div>
      <div className="admin-content-body-products-footer">pagination</div>
    </div>
  );
}

export default Products;
