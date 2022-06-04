import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import productAPI from "../../../../api/productAPI";
import "./ListProduct.scss";
import Product from "./Product/Product";

ListProduct.propTypes = {};

function ListProduct(props) {
  const history = useHistory();

  const filters = [
    { value: 0, label: "Mới nhất" },
    { value: 1, label: "Bán chạy" },
    { value: 2, label: "Giảm giá" },
  ];
  const [filterSelected, setFilterSelected] = useState(0);
  const [listProduct, setListProduct] = useState([]);

  const handleClickFilter = (item) => {
    setFilterSelected(item.value);
    if (item.value === 0) {
      (async () => {
        try {
          const response = await productAPI.getNewProducts();
          setListProduct(response.data.data);
        } catch (error) {
          console.log(error);
        }
      })();
    } else if (item.value === 1) {
      (async () => {
        try {
          const response = await productAPI.getBestSellerProduct();
          setListProduct(response.data.data);
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      (async () => {
        try {
          const response = await productAPI.getSaleProduct();
          setListProduct(response.data.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await productAPI.getNewProducts();
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
              onClick={() => handleClickFilter(item)}
            >
              {item.label}
              <div className="line"></div>
            </div>
          );
        })}
      </div>
      <div className="home-products-list">
        {listProduct.slice(0, 16).map((data) => {
          return <Product product={data} key={data._id} />;
        })}
      </div>
      <div className="home-products-more">
        <div className="home-products-more-background">
          <div className="home-products-more-title" onClick={handleViewMore}>
            Xem thêm
          </div>
          <div className="home-products-more-icon">
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
