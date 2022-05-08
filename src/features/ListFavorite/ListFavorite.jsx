import React from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Scroll from "../../components/Scroll/Scroll";
import useFavorite from "../../hooks/useFavorite";
import "./ListFavorite.scss";
import ProductFavorite from "./ProductFavorite/ProductFavorite";

ListFavorite.propTypes = {};

function ListFavorite(props) {
  const History = useHistory();

  const { listFavorite } = useFavorite();

  const handleClickContinue = () => {
    History.goBack();
  };

  return (
    <div className="favorite">
      <Header />
      <Menu />
      <Scroll showBelow={250} />
      <div className="favorite-title">
        <div className="title">
          <Link to="/">Trang chủ / </Link>
          <span>Sản Phẩm Yêu Thích</span>
        </div>
      </div>
      <div className="favorite-content">
        {listFavorite.length ? (
          <>
            <div className="favorite-header">
              <div className="favorite-header-product">Sản phẩm</div>
              <div className="favorite-header-price">Giá</div>
              <div className="favorite-header-stock">Tình trạng</div>
              <div className="favorite-header-delete"></div>
              <div className="favorite-header-add"></div>
            </div>
            <div className="favorite-body">
              {listFavorite.map((product, index) => {
                return <ProductFavorite product={product} key={index} />;
              })}
            </div>
          </>
        ) : (
          <>
            <p className="favorite-notfound">
              Hiện tại không có sản phẩm yêu thích <br />
              <button onClick={handleClickContinue}>Tiếp tục mua sắm</button>
            </p>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ListFavorite;
