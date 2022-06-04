import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import productAPI from "../../../../api/productAPI";
import "./ListFavoriteProduct.scss";
import Product from "./Product/Product";

ListFavoriteProduct.propTypes = {};

function ListFavoriteProduct(props) {
  const [listProduct, setListProduct] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const response = await productAPI.getSortPointProduct();
        setListProduct(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleViewMore = () => {
    history.push("/products");
  };

  return (
    <div className="listfavoriteproduct">
      <div className="listfavoriteproduct-title">Sản phẩm yêu thích</div>
      <div className="listfavoriteproduct-list">
        {listProduct.slice(0, 16).map((data) => {
          return <Product key={data._id} product={data} />;
        })}
      </div>
      <div className="home-favoriteproduct-more">
        <div className="home-favoriteproduct-more-background">
          <div
            className="home-favoriteproduct-more-title"
            onClick={handleViewMore}
          >
            Xem thêm
          </div>
          <div className="home-favoriteproduct-more-icon">
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListFavoriteProduct;
