import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Select from "react-select";
import adminAPI from "../../../../api/adminAPI";
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

  const [send, setSend] = useState(false);
  const [discount_temp, setDiscount_temp] = useState([]);
  let listDiscount = [];
  let listColorDetail = [];

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
    _id: "62296d1b2ce44107de398a93",
    value: "tay ngắn",
    label: "Tay ngắn",
  });
  const [collarProduct, setCollarProduct] = useState({
    _id: "62296d1b2ce44107de398a95",
    value: "cổ tròn",
    label: "Cổ tròn",
  });

  const [discountProduct, setDiscountProduct] = useState({
    element: {
      createdAt: "2021-09-02T16:29:38.000Z",
      description: "Mặc định",
      endDate: "2122-05-22T17:44:24.000Z",
      nameDiscount: "Mặc định",
      percentDiscount: 0,
      startDate: "1990-03-20T09:19:34.000Z",
      _id: "62599849f8f6be052f0a901d",
    },
    label: "Mặc định",
    value: "62599849f8f6be052f0a901d",
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
      element,
      label: element.nameDiscount,
      value: element._id,
    });
  });

  useEffect(() => {
    listDiscount.forEach((element) => {
      if (productEdit.discount?._id === element.value) {
        setDiscountProduct(element);
      }
    });
  }, [productEdit.discount?._id]);

  useEffect(() => {
    productEdit.typeProducts?.forEach((x) => {
      gender.forEach((y) => {
        if (x === y._id) {
          setGenderProduct(y);
        }
      });
      typeProduct.forEach((y) => {
        if (x === y._id) {
          setType(y);
        }
      });
      if (gender.value === "nam") {
        collar_male.forEach((y) => {
          if (x === y._id) {
            setCollarProduct(y);
          }
        });
      } else {
        collar_female.forEach((y) => {
          if (x === y._id) {
            setCollarProduct(y);
          }
        });
      }
    });
  }, [productEdit.typeProducts]);

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
    setProductEdit({
      ...productEdit,
      typeProducts: [newValue._id, type._id, collarProduct._id],
    });
  };
  const handleSelectTypeProduct = (newValue) => {
    setType(newValue);
    setProductEdit({
      ...productEdit,
      typeProducts: [genderProduct._id, newValue._id, collarProduct._id],
    });
  };
  const handleSelectCollarProduct = (newValue) => {
    setCollarProduct(newValue);
    setProductEdit({
      ...productEdit,
      typeProducts: [genderProduct._id, type._id, newValue._id],
    });
  };
  const handleSelectDiscount = (newValue) => {
    setDiscountProduct(newValue);
    setProductEdit({
      ...productEdit,
      discount: newValue.element,
    });
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

  const handleReceiveColorAndProductDetails = (value) => {
    if (listColorDetail.length < 1) {
      listColorDetail.push(value);
    } else {
      const index = listColorDetail.findIndex((x) => x.color === value.color);
      if (index > -1) {
        listColorDetail.splice(index, 1);
        listColorDetail.push(value);
      } else {
        listColorDetail.push(value);
      }
    }
  };

  const handleUpdateProduct = () => {
    (async () => {
      const fd = new FormData();

      fd.append("productDetails", JSON.stringify(listColorDetail));
      fd.append("product", JSON.stringify(productEdit));
      listColorDetail.forEach((element) => {
        fd.append(element.color, element.image);
      });

      try {
        const response = await adminAPI.updateProduct({
          id: productEdit._id,
          fd,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  };

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
              <button onClick={handleUpdateProduct}>
                LƯU THÔNG TIN SẢN PHẨM
              </button>
            </div>
          </div>
          <div className="admin-orderDetail-content-body-right">
            {colorDetails.map((item, index) => {
              return (
                <Color
                  key={index}
                  color={item}
                  sendColorAndProductDetails={
                    handleReceiveColorAndProductDetails
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
