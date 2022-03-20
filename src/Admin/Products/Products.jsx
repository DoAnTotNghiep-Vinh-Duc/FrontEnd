import React from "react";
import PhiHanhGia from "../../assets/product/PhiHanhGia-blue.jpg";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import "./Products.scss";

Products.propTypes = {};

function Products(props) {
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
                  DANH MỤC
                </div>
                <div className="admin-products-content-body-listProducts-body-header-action"></div>
              </div>
              <div className="admin-products-content-body-listProducts-body-products">
                <div className="admin-products-content-body-listProducts-body-products-product">
                  <div className="admin-products-content-body-listProducts-body-products-product-seri">
                    #64125
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-image">
                    <img src={PhiHanhGia} alt="" />
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-name">
                    Áo thun Phi Hành Gia Vũ Trụ
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-stock">
                    12
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-price">
                    350.000
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-category">
                    Nam - Tay Ngắn - Cổ Tròn
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-action">
                    <i className="bi bi-pencil"></i>
                  </div>
                </div>
                <div className="admin-products-content-body-listProducts-body-products-product">
                  <div className="admin-products-content-body-listProducts-body-products-product-seri">
                    #64125
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-image">
                    <img src={PhiHanhGia} alt="" />
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-name">
                    Áo thun Phi Hành Gia Vũ Trụ
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-stock">
                    12
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-price">
                    350.000
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-category">
                    Nam - Tay Ngắn - Cổ Tròn
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-action">
                    <i className="bi bi-pencil"></i>
                  </div>
                </div>
                <div className="admin-products-content-body-listProducts-body-products-product">
                  <div className="admin-products-content-body-listProducts-body-products-product-seri">
                    #64125
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-image">
                    <img src={PhiHanhGia} alt="" />
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-name">
                    Áo thun Phi Hành Gia Vũ Trụ
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-stock">
                    12
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-price">
                    350.000
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-category">
                    Nam - Tay Ngắn - Cổ Tròn
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-action">
                    <i className="bi bi-pencil"></i>
                  </div>
                </div>
                <div className="admin-products-content-body-listProducts-body-products-product">
                  <div className="admin-products-content-body-listProducts-body-products-product-seri">
                    #64125
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-image">
                    <img src={PhiHanhGia} alt="" />
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-name">
                    Áo thun Phi Hành Gia Vũ Trụ
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-stock">
                    12
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-price">
                    350.000
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-category">
                    Nam - Tay Ngắn - Cổ Tròn
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-action">
                    <i className="bi bi-pencil"></i>
                  </div>
                </div>
                <div className="admin-products-content-body-listProducts-body-products-product">
                  <div className="admin-products-content-body-listProducts-body-products-product-seri">
                    #64125
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-image">
                    <img src={PhiHanhGia} alt="" />
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-name">
                    Áo thun Phi Hành Gia Vũ Trụ
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-stock">
                    12
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-price">
                    350.000
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-category">
                    Nam - Tay Ngắn - Cổ Tròn
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-action">
                    <i className="bi bi-pencil"></i>
                  </div>
                </div>
                <div className="admin-products-content-body-listProducts-body-products-product">
                  <div className="admin-products-content-body-listProducts-body-products-product-seri">
                    #64125
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-image">
                    <img src={PhiHanhGia} alt="" />
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-name">
                    Áo thun Phi Hành Gia Vũ Trụ
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-stock">
                    12
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-price">
                    350.000
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-category">
                    Nam - Tay Ngắn - Cổ Tròn
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-action">
                    <i className="bi bi-pencil"></i>
                  </div>
                </div>
                <div className="admin-products-content-body-listProducts-body-products-product">
                  <div className="admin-products-content-body-listProducts-body-products-product-seri">
                    #64125
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-image">
                    <img src={PhiHanhGia} alt="" />
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-name">
                    Áo thun Phi Hành Gia Vũ Trụ
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-stock">
                    12
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-price">
                    350.000
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-category">
                    Nam - Tay Ngắn - Cổ Tròn
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-action">
                    <i className="bi bi-pencil"></i>
                  </div>
                </div>
                <div className="admin-products-content-body-listProducts-body-products-product">
                  <div className="admin-products-content-body-listProducts-body-products-product-seri">
                    #64125
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-image">
                    <img src={PhiHanhGia} alt="" />
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-name">
                    Áo thun Phi Hành Gia Vũ Trụ
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-stock">
                    12
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-price">
                    350.000
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-category">
                    Nam - Tay Ngắn - Cổ Tròn
                  </div>
                  <div className="admin-products-content-body-listProducts-body-products-product-action">
                    <i className="bi bi-pencil"></i>
                  </div>
                </div>
              </div>
              <div className="admin-products-content-body-listProducts-body-footer">
                pagination
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
