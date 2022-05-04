import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Select from "react-select";
import discountAPI from "../../../../api/discountAPI";
import collar_female from "../../../../data/collar_female.json";
import collar_male from "../../../../data/collar_male.json";
import gender from "../../../../data/gender.json";
import typeProduct from "../../../../data/short_long.json";
import useProductDetail from "../../../../hooks/useProductDetail";
import Header from "../../components/Header/Header";
import NavBars from "../../components/NavBars/NavBars";
import Color from "./Color/Color";
import "./ProductDetail.scss";

ProductDetail.propTypes = {};

function ProductDetail(props) {
  const {
    params: { productId },
  } = useRouteMatch();

  const [discount_temp, setDiscount_temp] = useState([]);
  let listDiscount = [];

  const { product, loading, colorDetails } = useProductDetail(productId);
  const [productEdit, setProductEdit] = useState(() => {
    const product_temp = product;
    return product_temp;
  });
  const [genderProduct, setGenderProduct] = useState({
    _id: "62296d1b2ce44107de398a91",
    value: "nam",
    label: "Nam",
  });
  const [type, setType] = useState({
    _id: "62296d1b2ce44107de398a94",
    value: "tay dài",
    label: "Tay dài",
  });
  const [collarProduct, setCollarProduct] = useState({
    _id: "62296d1b2ce44107de398a95",
    value: "cổ tròn",
    label: "Cổ tròn",
  });

  const [discountProduct, setDiscountProduct] = useState({
    _id: productEdit.discount?._id,
    value: productEdit.discount?.percentDiscount,
    label: productEdit.discount?.nameDiscount,
  });

  useEffect(() => {
    setProductEdit(product);
  }, [product]);

  useEffect(() => {
    (async () => {
      try {
        const response = await discountAPI.getAll();
        if (response.status === 200) {
          setDiscount_temp(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  discount_temp.forEach((element) => {
    listDiscount.push({
      _id: element._id,
      value: element.percentDiscount,
      label: element.nameDiscount,
    });
  });

  useEffect(() => {
    typeProduct.forEach((x) => {
      productEdit.typeProducts?.forEach((y) => {
        if (x._id === y) {
          setType({
            _id: x._id,
            value: x.value,
            label: x.label,
          });
        }
      });
    });
  }, [productEdit.typeProducts]);

  // useEffect(() => {
  //   productEdit.typeProducts?.forEach((x) => {
  //     gender.forEach((y) => {
  //       if (x === y._id) {
  //         setGenderProduct(y);
  //       }
  //     });
  //     typeProduct.forEach((y) => {
  //       if (x === y._id) {
  //         setType(y);
  //       }
  //     });
  //     if (gender.value === "nam") {
  //       collar_male.forEach((y) => {
  //         if (x === y._id) {
  //           setCollarProduct(y);
  //         }
  //       });
  //     } else {
  //       collar_female.forEach((y) => {
  //         if (x === y._id) {
  //           setCollarProduct(y);
  //         }
  //       });
  //     }
  //   });
  // }, [productEdit.typeProducts]);

  if (loading) {
    return <div>Loading</div>;
  }

  const handleChangeNameProduct = (event) => {
    setProductEdit({
      ...productEdit,
      name: event.target.value,
    });
  };

  const handleSelectGenderProduct = (newValue) => {
    setGenderProduct(newValue);
  };
  const handleSelectTypeProduct = (newValue) => {
    setType(newValue);
  };
  const handleSelectCollarProduct = (newValue) => {
    setCollarProduct(newValue);
  };
  const handleSelectDiscount = (newValue) => {
    setDiscountProduct(newValue);
  };
  const handleChangePriceProduct = (event) => {
    setProductEdit({
      ...productEdit,
      price: event.target.value,
    });
  };
  const handleChangeDescriptionProduct = (event) => {
    setProductEdit({
      ...productEdit,
      description: event.target.value,
    });
  };

  console.log(productEdit);

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
                  value={productEdit.name}
                  onChange={handleChangeNameProduct}
                />
              </div>
              <div className="admin-orderDetail-category">
                <label htmlFor="">Danh Mục</label>
                <div className="admin-orderDetail-category-group">
                  <div className="sort-select-gender">
                    <Select
                      fullWidth
                      options={gender}
                      defaultValue={genderProduct}
                      onChange={handleSelectGenderProduct}
                    />
                  </div>
                  <div className="sort-select-long-short">
                    <Select
                      fullWidth
                      options={typeProduct}
                      defaultValue={type}
                      onChange={handleSelectTypeProduct}
                    />
                  </div>
                  <div className="sort-select-collar">
                    <Select
                      fullWidth
                      options={
                        genderProduct.value === "nam"
                          ? collar_male
                          : collar_female
                      }
                      defaultValue={collarProduct}
                      onChange={handleSelectCollarProduct}
                    />
                  </div>
                </div>
              </div>
              <div className="admin-orderDetail-discount-price">
                <div className="admin-orderDetail-discount">
                  <label htmlFor="">Giảm giá</label>
                  <div className="admin-orderDetail-discount-select">
                    <Select
                      fullWidth
                      options={listDiscount}
                      defaultValue={discountProduct}
                      onChange={handleSelectDiscount}
                    />
                  </div>
                </div>
                <div className="admin-orderDetail-price">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    label="Giá sản phẩm"
                    value={productEdit.price}
                    onChange={handleChangePriceProduct}
                  />
                </div>
              </div>
              <div className="admin-orderDetail-description">
                <TextField
                  id="outlined-multiline-static"
                  label="Mô Tả"
                  multiline
                  rows={11}
                  fullWidth
                  variant="outlined"
                  value={productEdit.description}
                  onChange={handleChangeDescriptionProduct}
                />
              </div>
            </div>
            <div className="admin-orderDetail-button">
              <button>LƯU THÔNG TIN SẢN PHẨM</button>
            </div>
          </div>
          <div className="admin-orderDetail-content-body-right">
            {colorDetails.map((item, index) => {
              return <Color key={index} color={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
