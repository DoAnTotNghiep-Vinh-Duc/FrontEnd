import React from "react";
import AiryWTS from "../../../../assets/product/AiryWTS-black.jpg";
import PhiHanhGia from "../../../../assets/product/PhiHanhGia-blue.jpg";
import TheNewCouple from "../../../../assets/product/TheNewCouple-black.jpg";
import "./BestSeller.scss";

BestSeller.propTypes = {};

function BestSeller(props) {
  return (
    <div className="admin-content-body-topProducts">
      <div className="admin-content-body-topProducts-title">
        Sản phẩm bán chạy
      </div>
      <div className="admin-content-body-topProducts-products">
        <div className="admin-content-body-topProducts-products-product">
          <div className="admin-content-body-topProducts-products-product-image">
            <img src={PhiHanhGia} alt="" />
          </div>
          <div className="admin-content-body-topProducts-products-product-name">
            Áo Phi Hành Giaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div className="admin-content-body-topProducts-products-product-price">
            259.000 vnđ
          </div>
        </div>
        <div className="admin-content-body-topProducts-products-product">
          <div className="admin-content-body-topProducts-products-product-image">
            <img src={AiryWTS} alt="" />
          </div>
          <div className="admin-content-body-topProducts-products-product-name">
            Áo Phi Hành Giaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div className="admin-content-body-topProducts-products-product-price">
            259.000 vnđ
          </div>
        </div>
        <div className="admin-content-body-topProducts-products-product">
          <div className="admin-content-body-topProducts-products-product-image">
            <img src={TheNewCouple} alt="" />
          </div>
          <div className="admin-content-body-topProducts-products-product-name">
            Áo Phi Hành Giaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div className="admin-content-body-topProducts-products-product-price">
            259.000 vnđ
          </div>
        </div>
        <div className="admin-content-body-topProducts-products-product">
          <div className="admin-content-body-topProducts-products-product-image">
            <img src={PhiHanhGia} alt="" />
          </div>
          <div className="admin-content-body-topProducts-products-product-name">
            Áo Phi Hành Giaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div className="admin-content-body-topProducts-products-product-price">
            259.000 vnđ
          </div>
        </div>
        <div className="admin-content-body-topProducts-products-product">
          <div className="admin-content-body-topProducts-products-product-image">
            <img src={PhiHanhGia} alt="" />
          </div>
          <div className="admin-content-body-topProducts-products-product-name">
            Áo Phi Hành Giaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div className="admin-content-body-topProducts-products-product-price">
            259.000 vnđ
          </div>
        </div>
        <div className="admin-content-body-topProducts-products-product">
          <div className="admin-content-body-topProducts-products-product-image">
            <img src={PhiHanhGia} alt="" />
          </div>
          <div className="admin-content-body-topProducts-products-product-name">
            Áo Phi Hành Giaaaaaaaaaaaaaaaaaaaaaa
          </div>
          <div className="admin-content-body-topProducts-products-product-price">
            259.000 vnđ
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
