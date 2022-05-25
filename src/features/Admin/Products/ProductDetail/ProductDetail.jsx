import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import adminAPI from "../../../../api/adminAPI";
import discountAPI from "../../../../api/discountAPI";
import collar_female from "../../../../data/collar_female.json";
import collar_male from "../../../../data/collar_male.json";
import gender from "../../../../data/gender.json";
import typeProduct from "../../../../data/short_long.json";
import useProductDetailAdmin from "../../../../hooks/useProductDetailAdmin";
import Header from "../../components/Header/Header";
import NavBars from "../../components/NavBars/NavBars";
import AddColor from "./AddColor/AddColor";
import Color from "./Color/Color";
import "./ProductDetail.scss";

toast.configure();
ProductDetail.propTypes = {};

function ProductDetail(props) {
  const History = useHistory();
  const {
    params: { productId },
  } = useRouteMatch();

  const [listColor_add, setListColor_add] = useState([]);
  const [discount_temp, setDiscount_temp] = useState([]);
  let listDiscount = [];
  let listColorDetail = [];
  const [listColorDetailAdd, setListColorDetailAdd] = useState([]);
  const { product, loading, colorDetails } = useProductDetailAdmin(productId);
  const [colorDetails_temp, setColorDetails_temp] = useState([]);
  const [productEdit, setProductEdit] = useState(() => {
    const product_temp = product;
    return product_temp;
  });
  const [genderProduct, setGenderProduct] = useState({});
  const [type, setType] = useState({});
  const [collarProduct, setCollarProduct] = useState({});
  const [discountProduct, setDiscountProduct] = useState({});

  const [temp, setTemp] = useState();
  const [deleteTemp, setDeleteTemp] = useState();

  useEffect(() => {
    setProductEdit(product);
  }, [product]);

  useEffect(() => {
    setColorDetails_temp(colorDetails);
  }, [colorDetails]);

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
      label: `${element.nameDiscount} - ${element.percentDiscount * 100}%`,
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

  useEffect(() => {
    if (temp) {
      console.log(temp);
      console.log(listColorDetailAdd);
      if (!listColorDetailAdd.length) {
        setListColorDetailAdd([temp]);
      } else {
        const index = listColorDetailAdd.findIndex((x) => x.gen === temp.gen);
        if (index >= 0) {
          const a = listColorDetailAdd.slice(0, index);
          const b = listColorDetailAdd.slice(
            index + 1,
            listColorDetailAdd.length
          );
          const new_arr = [...a, ...b];
          new_arr.push(temp);
          setListColorDetailAdd(new_arr);
        } else {
          setListColorDetailAdd([...listColorDetailAdd, temp]);
        }
      }
    }
  }, [temp]);

  useEffect(() => {
    if (deleteTemp) {
      const index = listColor_add.findIndex(
        (x) => x.props.id === deleteTemp.id
      );
      const a = listColor_add.slice(0, index);
      const b = listColor_add.slice(index + 1, listColor_add.length);
      const new_arr = [...a, ...b];
      setListColor_add(new_arr);

      const index2 = listColorDetailAdd.findIndex(
        (x) => x.color === deleteTemp.colorProduct._id
      );
      const c = listColorDetailAdd.slice(0, index2);
      const d = listColorDetailAdd.slice(index2 + 1, listColorDetailAdd.length);
      const new_arr1 = [...c, ...d];
      setListColorDetailAdd(new_arr1);
    }
  }, [deleteTemp]);

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

  const handleAddColor = () => {
    setListColor_add(
      listColor_add.concat(
        <AddColor
          key={listColor_add.length}
          id={Math.floor(Math.random() * 1000 + 1)}
          sendColorAndProductDetails={
            handleReceiveColorAndProductDetailsByAddColor
          }
          sendColorWantDelete={handleReceiveColorWantDeleteByAddColor}
        />
      )
    );
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

  const handleReceiveColorAndProductDetailsByAddColor = (value) => {
    setTemp(value);
  };

  const handleReceiveColorWantDelete = (value) => {
    var result = colorDetails_temp.map((element) =>
      Object.keys(element)[0] === Object.keys(value)[0]
        ? {
            deleted: Object.values(element)[0].map((el) =>
              el.color.color === Object.keys(value)[0]
                ? { ...el, status: "DELETE" }
                : el
            ),
          }
        : element
    );
    setColorDetails_temp(result);
  };

  const handleReceiveColorWantDeleteByAddColor = (value) => {
    setDeleteTemp(value);
  };

  const handleUpdateProduct = () => {
    (async () => {
      const arr = [...listColorDetail, ...listColorDetailAdd];
      const fd = new FormData();

      fd.append("productDetails", JSON.stringify(arr));
      fd.append("product", JSON.stringify(productEdit));
      arr.forEach((element) => {
        fd.append(element.color, element.image);
      });

      try {
        const response = await adminAPI.updateProduct({
          id: productEdit._id,
          fd,
        });
        if (response.status === 204) {
          toast.success("Cập nhập sản phẩm thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "colored",
          });
          History.push("/admin/products");
        }
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
                      value={genderProduct}
                      onChange={handleSelectGenderProduct}
                    />
                  </div>
                  <div className="sort-select-long-short">
                    <Select
                      fullWidth
                      options={typeProduct}
                      value={type}
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
                      value={collarProduct}
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
                      value={discountProduct}
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
              <button
                className="admin-orderDetail-button-btnUpdate"
                onClick={handleUpdateProduct}
              >
                LƯU THÔNG TIN SẢN PHẨM
              </button>
              <button
                className="admin-orderDetail-button-btnAddColor"
                onClick={handleAddColor}
              >
                THÊM MÀU
              </button>
            </div>
          </div>
          <div className="admin-orderDetail-content-body-right">
            {colorDetails_temp.map((item, index) => {
              return (
                <Color
                  key={index}
                  color={item}
                  sendColorAndProductDetails={
                    handleReceiveColorAndProductDetails
                  }
                  sendColorWantDelete={handleReceiveColorWantDelete}
                />
              );
            })}
            {listColor_add}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
