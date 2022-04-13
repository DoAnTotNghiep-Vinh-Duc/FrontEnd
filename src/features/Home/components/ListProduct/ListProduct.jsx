import React, { useEffect, useState } from "react";
import "./ListProduct.scss";
import Product from "./Product/Product";
import productAPI from "../../../../api/productAPI";

ListProduct.propTypes = {};

function ListProduct(props) {
  const [filterSelected, setFilterSelected] = useState(0);

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await productAPI.getProducts();
        setListProduct(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const filters = [
    { value: 0, label: "Mới nhất" },
    { value: 1, label: "Bán chạy" },
    { value: 2, label: "Giảm giá" },
  ];

  return (
    <div className="home-products">
      <div className="home-products-title">Sản phẩm</div>
      <div className="home-products-filter">
        {filters.map((item, index) => {
          return (
            <div
              className={`${"home-products-filter-item"} ${
                filterSelected === index ? "activeFilterItem" : ""
              }`}
              key={index}
              onClick={() => setFilterSelected(item.value)}
            >
              {item.label}
              <div className="line"></div>
            </div>
          );
        })}
      </div>
      <div className="home-products-list">
        {listProduct.map((data) => {
          return <Product product={data} key={data._id} />;
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
