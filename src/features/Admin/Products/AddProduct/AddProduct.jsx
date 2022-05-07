import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import adminAPI from "../../../../api/adminAPI";
import discountAPI from "../../../../api/discountAPI";
import supplierAPI from "../../../../api/supplierAPI";
import collar_female from "../../../../data/collar_female.json";
import collar_male from "../../../../data/collar_male.json";
import gender from "../../../../data/gender.json";
import short_long from "../../../../data/short_long.json";
import Header from "../../components/Header/Header";
import NavBars from "../../components/NavBars/NavBars";
import AddColor from "./AddColor/AddColor";
import "./AddProduct.scss";

toast.configure();
AddProduct.propTypes = {};

function AddProduct(props) {
  const History = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [supplier, setSupplier] = useState({
    label: "Canada",
    value: "Uriel Pharmacy Inc",
    _id: "6235aa99fc13ae4969000721",
  });
  const [genderProduct, setGenderProduct] = useState({
    _id: "62296d1b2ce44107de398a91",
    value: "nam",
    label: "Nam",
  });
  const [typeProduct, setTypeProduct] = useState({
    _id: "62296d1b2ce44107de398a93",
    value: "tay ngắn",
    label: "Tay ngắn",
  });
  const [collarProduct, setCollarProduct] = useState({
    _id: "62296d1b2ce44107de398a95",
    value: "cổ tròn",
    label: "Cổ tròn",
  });
  const [discount, setDiscount] = useState({
    label: "Mặc định - 0%",
    value: 0,
    _id: "62599849f8f6be052f0a901d",
  });
  const [price, setPrice] = useState(0);
  const [listColorDetailAdd, setListColorDetailAdd] = useState([]);
  const [colorComponent, setColorComponent] = useState([]);
  const [listSupplier_temp, setListSupplier_temp] = useState([]);
  const [listDiscount_temp, setListDiscount_temp] = useState([]);
  const [btnAddProduct, setBtnAddProduct] = useState(false);

  let listSupplier = [];
  let listDiscount = [];

  useEffect(() => {
    (async () => {
      try {
        const response = await supplierAPI.getAll();
        if (response.status === 200) {
          setListSupplier_temp(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  listSupplier_temp.forEach((element) => {
    listSupplier.push({
      _id: element._id,
      value: element.name,
      label: element.information,
    });
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await discountAPI.getAll();
        if (response.status === 200) {
          setListDiscount_temp(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  listDiscount_temp.forEach((element) => {
    listDiscount.push({
      _id: element._id,
      value: element.percentDiscount,
      label: `${element.nameDiscount} - ${element.percentDiscount * 100}%`,
    });
  });

  const handleClickAddColor = (event) => {
    setColorComponent(
      colorComponent.concat(
        <AddColor
          key={colorComponent.length}
          id={Math.floor(Math.random() * 1000 + 1)}
          sendColorAndProductDetails={
            handleReceiveColorAndProductDetailsByAddColor
          }
          sendColorWantDelete={handleReceiveColorWantDeleteByAddColor}
        />
      )
    );
  };

  const handleNameProduct = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionProduct = (event) => {
    setDescription(event.target.value);
  };
  const handleSelectSupplier = (newValue) => {
    setSupplier(newValue);
  };
  const handleSelectGender = (newValue) => {
    setGenderProduct(newValue);
  };
  const handleSelectType = (newValue) => {
    setTypeProduct(newValue);
  };
  const handleSelectCollar = (newValue) => {
    setCollarProduct(newValue);
  };
  const handleDiscountProduct = (newValue) => {
    setDiscount(newValue);
  };
  const handlePriceProduct = (event) => {
    setPrice(event.target.value);
  };

  const handleReceiveColorAndProductDetailsByAddColor = (value) => {
    if (listColorDetailAdd.length < 1) {
      setListColorDetailAdd([value]);
    } else {
      const index = listColorDetailAdd.findIndex(
        (x) => x.color === value.color
      );
      if (index > -1) {
        setListColorDetailAdd([listColorDetailAdd.splice(index, 1)]);
        setListColorDetailAdd([...listColorDetailAdd, value]);
      } else {
        setListColorDetailAdd([...listColorDetailAdd, value]);
      }
    }
  };
  const handleReceiveColorWantDeleteByAddColor = ({ colorProduct, id }) => {
    const index = colorComponent.findIndex((x) => x.props.id === id);
    setColorComponent(colorComponent.splice(index, 1));

    const index2 = listColorDetailAdd.findIndex(
      (x) => x.color === colorProduct._id
    );
    setListColorDetailAdd(listColorDetailAdd.splice(index2, 1));
  };

  useEffect(() => {
    if (
      !name ||
      !description ||
      !supplier ||
      !genderProduct ||
      !typeProduct ||
      !collarProduct ||
      !discount ||
      !price ||
      !listColorDetailAdd.length
    ) {
      setBtnAddProduct(false);
    } else {
      setBtnAddProduct(true);
    }
  }, [
    collarProduct,
    description,
    discount,
    genderProduct,
    listColorDetailAdd.length,
    name,
    price,
    supplier,
    typeProduct,
  ]);

  const handleClickAddProduct = () => {
    (async () => {
      try {
        const fd = new FormData();
        fd.append(
          "product",
          JSON.stringify({
            supplier: supplier._id,
            discount: discount._id,
            name: name,
            description: description,
            typeProducts: [
              genderProduct._id,
              typeProduct._id,
              collarProduct._id,
            ],
            price: Number(price),
          })
        );
        fd.append("productDetails", JSON.stringify(listColorDetailAdd));
        listColorDetailAdd.forEach((element) => {
          fd.append(element.color, element.image);
        });
        const response = await adminAPI.addProduct(fd);
        if (response.status === 201) {
          toast.success("Thêm sản phẩm mới thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          History.push("/admin/products");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className="admin-addproduct">
      <NavBars />
      <div className="admin-addproduct-content">
        <Header />
        <div className="admin-addproduct-content-body">
          <div className="admin-addproduct-content-body-left">
            <div className="admin-addproduct-title">THÊM SẢN PHẨM</div>
            <div className="admin-addproduct-body">
              <div className="admin-addproduct-name">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  fullWidth
                  label="Tên Sản Phẩm"
                  value={name}
                  onChange={handleNameProduct}
                />
              </div>
              <div className="admin-addproduct-supplier">
                <label htmlFor="">Nhà cung cấp</label>
                <div className="admin-addproduct-supplier-select">
                  <Select
                    fullWidth
                    options={listSupplier}
                    defaultValue={supplier}
                    onChange={handleSelectSupplier}
                  />
                </div>
              </div>
              <div className="admin-addproduct-category">
                <label htmlFor="">Danh Mục</label>
                <div className="admin-addproduct-category-group">
                  <div className="sort-select">
                    <Select
                      fullWidth
                      options={gender}
                      defaultValue={genderProduct}
                      onChange={handleSelectGender}
                    />
                  </div>
                  <div className="sort-select">
                    <Select
                      fullWidth
                      options={short_long}
                      defaultValue={typeProduct}
                      onChange={handleSelectType}
                    />
                  </div>
                  <div className="sort-select">
                    <Select
                      fullWidth
                      options={
                        genderProduct.value === "nữ"
                          ? collar_female
                          : collar_male
                      }
                      defaultValue={collarProduct}
                      onChange={handleSelectCollar}
                    />
                  </div>
                </div>
              </div>
              <div className="admin-addproduct-discount-price">
                <div className="admin-addproduct-discount">
                  <label htmlFor="">Giảm giá</label>
                  <div className="admin-addproduct-discount-select">
                    <Select
                      fullWidth
                      options={listDiscount}
                      defaultValue={discount}
                      onChange={handleDiscountProduct}
                    />
                  </div>
                </div>
                <div className="admin-addproduct-price">
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    label="Giá"
                    type="number"
                    value={price}
                    onChange={handlePriceProduct}
                  />
                </div>
              </div>
              <div className="admin-addproduct-description">
                <TextField
                  id="outlined-multiline-static"
                  label="Mô Tả"
                  multiline
                  rows={8}
                  fullWidth
                  variant="outlined"
                  value={description}
                  onChange={handleDescriptionProduct}
                />
              </div>
              <div className="admin-product-button">
                <button
                  className={`${"admin-product-button-addProduct"} ${
                    btnAddProduct ? "" : "isActive"
                  }`}
                  disabled={btnAddProduct ? false : true}
                  onClick={handleClickAddProduct}
                >
                  Thêm Sản Phẩm
                </button>
                <button
                  className="admin-product-button-addColor"
                  onClick={handleClickAddColor}
                >
                  Thêm Màu Sắc
                </button>
              </div>
            </div>
          </div>
          <div className="admin-addproduct-content-body-right">
            {colorComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
