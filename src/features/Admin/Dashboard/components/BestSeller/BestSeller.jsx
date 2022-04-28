import React, { useEffect, useState } from "react";
import adminAPI from "../../../../../api/adminAPI";
import "./BestSeller.scss";

BestSeller.propTypes = {};

function BestSeller(props) {
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getBestSellerProduct();
        setBestSeller(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="admin-content-body-topProducts">
      <div className="admin-content-body-topProducts-title">
        Sản phẩm bán chạy
      </div>
      <div className="admin-content-body-topProducts-products">
        {bestSeller.slice(0, 6).map((product, index) => {
          return (
            <div
              className="admin-content-body-topProducts-products-product"
              key={index}
            >
              <div className="admin-content-body-topProducts-products-product-image">
                <img
                  src={
                    product.product[0].images[
                      Math.floor(
                        Math.random() * product.product[0].images.length
                      )
                    ]
                  }
                  alt=""
                />
              </div>
              <div className="admin-content-body-topProducts-products-product-name">
                {product.product[0].name}
              </div>
              <div className="admin-content-body-topProducts-products-product-price">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.product[0].price)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestSeller;
