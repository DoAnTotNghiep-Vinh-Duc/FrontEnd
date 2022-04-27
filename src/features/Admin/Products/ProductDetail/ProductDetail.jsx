import TextField from "@material-ui/core/TextField";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import Select from "react-select";
import useProductDetail from "../../../../hooks/useProductDetail";
import Header from "../../components/Header/Header";
import NavBars from "../../components/NavBars/NavBars";
import "./ProductDetail.scss";

ProductDetail.propTypes = {};

function ProductDetail(props) {
  const {
    params: { productId },
  } = useRouteMatch();
  const gender = [
    {
      value: "Nam",
      label: "Nam",
    },
    {
      value: "Nữ",
      label: "Nữ",
    },
  ];
  const category = [
    {
      value: "Tay Ngắn",
      label: "Tay Ngắn",
    },
    {
      value: "Tay Dài",
      label: "Tay Dài",
    },
  ];
  const collar = [
    {
      value: "Cổ Tròn",
      label: "Cổ Tròn",
    },
    {
      value: "Cổ Vuông",
      label: "Cổ Vuông",
    },
  ];

  const { product, loading, colorDetails } = useProductDetail(productId);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="admin-orderDetail">
      <NavBars />
      <div className="admin-orderDetail-content">
        <Header />
        <div className="admin-orderDetail-content-body">
          <div className="admin-orderDetail-content-body-left">
            <div className="admin-orderDetail-title">
              CHỈNH SỬA THÔNG TIN SẢN PHẨM
            </div>
            <div className="admin-orderDetail-body">
              <div className="admin-orderDetail-name">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  fullWidth
                  label="Tên Sản Phẩm"
                  value={product.name}
                />
              </div>
              <div className="admin-orderDetail-description">
                <TextField
                  id="outlined-multiline-static"
                  label="Mô Tả"
                  multiline
                  rows={11}
                  fullWidth
                  variant="outlined"
                  value={product.description}
                />
              </div>
              <div className="admin-orderDetail-category">
                <label htmlFor="">Danh Mục</label>
                <div className="admin-orderDetail-category-group">
                  <div className="sort-select-gender">
                    <Select
                      fullWidth
                      options={gender}
                      defaultValue={{
                        value: "Nam",
                        label: "Nam",
                      }}
                    />
                  </div>
                  <div className="sort-select-long-short">
                    <Select
                      fullWidth
                      options={category}
                      defaultValue={{
                        value: "Tay Ngắn",
                        label: "Tay Ngắn",
                      }}
                    />
                  </div>
                  <div className="sort-select-collar">
                    <Select
                      fullWidth
                      options={collar}
                      defaultValue={{
                        value: "Cổ Tròn",
                        label: "Cổ Tròn",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="admin-orderDetail-discount-price">
                <div className="admin-orderDetail-discount">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    label="Giảm Giá"
                    value={`${product.discount.percentDiscount * 100}%`}
                  />
                </div>
                <div className="admin-orderDetail-price">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    label="Giá"
                    value={product.price}
                  />
                </div>
              </div>
            </div>
            <div className="admin-orderDetail-button">
              <button>LƯU THÔNG TIN SẢN PHẨM</button>
            </div>
          </div>
          <div className="admin-orderDetail-content-body-right">
            {colorDetails.map((item, index) => {
              return (
                <div className="admin-productDetail-product" key={index}>
                  <div className="admin-productDetail-product-image">
                    <div className="image-product">
                      <img src={Object.values(item)[0][0].image} alt="" />
                    </div>
                    <button>THAY ĐỔI HÌNH ẢNH</button>
                  </div>
                  <div className="admin-productDetail-product-infor">
                    <div className="admin-productDetail-product-infor-color">
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        fullWidth
                        label="Màu Sắc"
                        value={Object.values(item)[0][0].color.name}
                      />
                    </div>
                    <div className="admin-productDetail-product-infor-listSize">
                      {Object.values(item)[0].map((item, index) => {
                        return (
                          <div
                            className="admin-productDetail-product-infor-size"
                            key={index}
                          >
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              size="small"
                              fullWidth
                              label={`${"Size "} ${item.size}`}
                              value={item.quantity}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
