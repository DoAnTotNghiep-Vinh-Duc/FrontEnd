import Rating from "@material-ui/lab/Rating";
import React from "react";
import AiryWTS from "../../../../assets/product/AiryWTS-black.jpg";
import TranhVintage from "../../../../assets/product/TranhVintage-gray.jpg";
import "./ListFavoriteProduct.scss";

ListFavoriteProduct.propTypes = {};

function ListFavoriteProduct(props) {
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
    <div className="listfavoriteproduct">
      <div className="listfavoriteproduct-title">Sản phẩm yêu thích</div>
      <div className="listfavoriteproduct-list">
        {data.map((data) => {
          return (
            <div className="home-favoriteproduct">
              <div className="home-favoriteproduct-image">
                <img src={TranhVintage} alt="" />
                <img
                  src={AiryWTS}
                  alt=""
                  className="home-favoriteproduct-img-hover"
                />
                <div className="home-favoriteproduct-group-fuction">
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
                <div className="home-favoriteproduct-addtocart">
                  <i className="bi bi-handbag"></i>
                  Thêm vào giỏ hàng
                </div>
                <div className="home-favoriteproduct-promotion">Top</div>
              </div>
              <div className="home-favoriteproduct-infor">
                <div className="home-favoriteproduct-rating">
                  <Rating
                    name="half-rating-read"
                    defaultValue={5}
                    precision={0.1}
                    readOnly
                  />
                </div>
                <div className="home-favoriteproduct-name">{data.name}</div>
                <div className="home-favoriteproduct-price">
                  <p className="home-favoriteproduct-price-main">
                    {data.price}
                  </p>
                  <p className="home-favoriteproduct-price-sub ">
                    {data.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="home-favoriteproduct-more">
        <div className="home-favoriteproduct-more-background">
          <div className="home-favoriteproduct-more-title">Xem thêm</div>
          <div className="home-favoriteproduct-more-icon">
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListFavoriteProduct;
