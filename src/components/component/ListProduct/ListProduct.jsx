import Rating from "@material-ui/lab/Rating";
import React from "react";
import product2 from "../../../assets/product/product2.jpg";
import product2a from "../../../assets/product/product2a.jpg";
import "./ListProduct.scss";

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
  return (
    <div className="home-products">
      <div className="home-products-title">Sản phẩm</div>
      <div className="home-products-filter">
        <div className="home-products-filter-new">
          MỚI NHẤT
          <div className="line"></div>
        </div>
        <div className="home-products-filter-bestseller">
          BÁN CHẠY <div className="line"></div>
        </div>
        <div className="home-products-filter-sale">
          GIẢM GIÁ <div className="line"></div>
        </div>
      </div>
      <div className="home-products-list">
        {data.map((data) => {
          return (
            <div className="home-product">
              <div className="home-product-image">
                <img src={product2} alt="" />
                <img
                  src={product2a}
                  alt=""
                  className="home-product-img-hover"
                />
                <div className="home-product-group-fuction">
                  <div className="addtocart">
                    <i className="bi bi-handbag"></i>
                  </div>
                  <div className="addtolistwish">
                    <i className="bi bi-suit-heart"></i>
                  </div>
                  <div className="zoom">
                    <i className="bi bi-zoom-in"></i>
                  </div>
                </div>
                <div className="home-products-addtocart">
                  <i className="bi bi-handbag"></i>
                  Thêm vào giỏ hàng
                </div>
                <div className="home-products-promotion">Sale</div>
              </div>
              <div className="home-product-infor">
                <div className="home-product-rating">
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.1}
                    readOnly
                  />
                </div>
                <div className="home-product-name">{data.name}</div>
                <div className="home-product-price">
                  <p className="home-product-price-main">{data.price}</p>
                  <p className="home-product-price-sub ">{data.price}</p>
                </div>
              </div>
            </div>
          );
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
