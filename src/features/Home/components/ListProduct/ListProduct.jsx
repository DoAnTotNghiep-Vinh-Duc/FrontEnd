import React from "react";
import "./ListProduct.scss";
import Product from "./Product/Product";

ListProduct.propTypes = {};

function ListProduct(props) {
  const data = [
    { id: 1, name: "Áo Thun BC Space Theme", price: "350.000 VNĐ" },
    { id: 2, name: "Áo Thun BW Embroi Signature", price: "200.000 VNĐ" },
    { id: 3, name: "Áo Thun INF Washed Red Tag", price: "280.000 VNĐ" },
    { id: 4, name: "Áo Thun Numbi BFB 2M", price: "270.000 VNĐ" },
    { id: 5, name: "Áo Thun INF x Simpsons Wash", price: "300.000 VNĐ" },
    { id: 6, name: "Áo Thun Numbi Autumn Print 2M", price: "399.000 VNĐ" },
    { id: 7, name: "Áo Thun Teddy Bear White", price: "359.000 VNĐ" },
    { id: 8, name: "Áo Thun Cactus Always Be Smile", price: "350.000 VNĐ" },
  ];

  const filters = [
    { value: "", label: "MỚI NHẤT" },
    { value: "", label: "BÁN CHẠY" },
    { value: "", label: "GIẢM GIÁ" },
  ];

  return (
    <div className="home-products">
      <div className="home-products-title">Sản phẩm</div>
      <div className="home-products-filter">
        {filters.map((item, index) => {
          return (
            <div className="home-products-filter-new" key={index}>
              {item.label}
              <div className="line"></div>
            </div>
          );
        })}
        {/* <div className="home-products-filter-new">
          MỚI NHẤT
          <div className="line"></div>
        </div>
        <div className="home-products-filter-bestseller">
          BÁN CHẠY <div className="line"></div>
        </div>
        <div className="home-products-filter-sale">
          GIẢM GIÁ <div className="line"></div>
        </div> */}
      </div>
      <div className="home-products-list">
        {data.map((data) => {
          return <Product product={data} key={data.id} />;
        })}
      </div>
      <div className="home-products-more">
        <div className="home-products-more-background">
          <div className="home-products-more-title">Xem thêm</div>
          <div className="home-products-more-icon">
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
