import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import AddSize from "../AddSize/AddSize";
import Size from "../Size/Size";

Color.propTypes = {
  color: PropTypes.object,
};

function Color(props) {
  const { color } = props;

  let a = [];
  let listProductDetail = [];
  const [listProductDetail_add, setListProductDetail_add] = useState([]);
  const [listDeleteColor, setListDeleteColor] = useState();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [listSize, setListSize] = useState(Object.values(color)[0]);
  const [listSize_temp, setListSize_temp] = useState([]);
  const [send, setSend] = useState(false);

  useEffect(() => {
    setListSize(Object.values(color)[0]);
  }, [color]);

  const handleAddSize = () => {
    setListSize_temp(
      listSize_temp.concat(
        <AddSize
          key={listSize_temp.length}
          color={Object.values(color)[0][0].color._id}
          gen={Math.floor(Math.random() * 1000 + 1)}
          sendSizeAndQuantity={handleReceiveSizeAndQuantityByAddSize}
          sendSizeDelete={handleReceiveSizeWantToDeleteByAddSize}
        />
      )
    );
  };

  const handleReceiveSizeAndQuantity = (value) => {
    setSend(true);
    if (listProductDetail.length < 1) {
      listProductDetail.push(value);
    } else {
      const index = listProductDetail.findIndex((x) => x._id === value._id);
      if (index > -1) {
        listProductDetail.splice(index, 1);
        listProductDetail.push(value);
      } else {
        listProductDetail.push(value);
      }
    }
  };

  const handleReceiveSizeAndQuantityByAddSize = (value) => {
    setSend(true);
    if (listProductDetail_add.length < 1) {
      setListProductDetail_add([value]);
    } else {
      const index = listProductDetail_add.findIndex(
        (x) => x.value === value.value
      );
      if (index > -1) {
        setListProductDetail_add([listProductDetail_add.splice(index, 1)]);
        setListProductDetail_add([...listProductDetail_add, value]);
      } else {
        setListProductDetail_add([...listProductDetail_add, value]);
      }
    }
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    const fileSelected = e.target.files[0];

    if (fileSelected && fileSelected.type.substr(0, 5) === "image") {
      setImage(fileSelected);
    } else {
      setImage(undefined);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setImagePreview(undefined);
    }
  }, [image]);

  const handleReceiveSizeWantToDeleteByAddSize = (value) => {
    const index = listSize_temp.findIndex((x) => x.props.gen === value.gen);
    setListSize_temp(listSize_temp.splice(index, 1));

    const index2 = listProductDetail_add.findIndex(
      (x) => x.value === value.value
    );
    setListProductDetail_add(listProductDetail_add.splice(index2, 1));
  };

  const handleReceiveSizeWantDelete = (value) => {
    var result = listSize.map((el) =>
      el._id === value._id ? { ...el, status: "DELETE" } : el
    );
    setListSize(result);
  };

  const handleDeleteColor = () => {
    setSend(true);
    var result = listProductDetail.map((el) => ({ ...el, status: "DELETE" }));
    setListDeleteColor(result);
    props.sendColorWantDelete(color);
  };

  useEffect(() => {
    if (listDeleteColor) {
      listProductDetail.splice(0, listProductDetail.length);
      listDeleteColor.forEach((element) => {
        listProductDetail.push(element);
      });
    }
    const arr = [...listProductDetail, ...listProductDetail_add];

    arr.forEach((element) => {
      a.push({
        _id: element._id,
        size: element.value,
        quantity: element.quantity,
        status: element.status,
      });
    });
    if (image) {
      props.sendColorAndProductDetails({
        color: arr[0].color,
        listProductDetail: a,
        image: image,
      });
      setSend(false);
    } else {
      props.sendColorAndProductDetails({
        color: arr[0].color,
        listProductDetail: a,
        image: Object.values(color)[0][0].image,
      });
      setSend(false);
    }
  }, [
    a,
    color,
    image,
    listDeleteColor,
    listProductDetail,
    listProductDetail_add,
    props,
    send,
  ]);

  return (
    <div
      className={`${"admin-productDetail-product"} ${
        Object.keys(color)[0] === "deleted" ? "hidden-color" : ""
      }`}
    >
      <div className="admin-productDetail-product-image">
        <div className="image-product">
          <img src={imagePreview ?? Object.values(color)[0][0].image} alt="" />
        </div>
        <button>
          <input type="file" accept="image/*" onChange={handleAddImage} />
          THAY ĐỔI HÌNH ẢNH
        </button>
      </div>
      <div className="admin-productDetail-product-infor">
        <div className="admin-productDetail-product-infor-color-btn">
          <div className="admin-productDetail-product-infor-color">
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              fullWidth
              label="Màu Sắc"
              value={Object.values(color)[0][0].color.name}
            />
          </div>
          <div className="admin-productDetail-product-infor-btn">
            <button onClick={handleAddSize}>Thêm size</button>
          </div>
        </div>
        <div className="admin-productDetail-product-infor-listSize">
          {listSize.map((item, index) => {
            return (
              <Size
                key={index}
                size={item}
                sendSizeAndQuantity={handleReceiveSizeAndQuantity}
                sendSizeWantDelete={handleReceiveSizeWantDelete}
              />
            );
          })}
          {listSize_temp}
        </div>
      </div>
      <div className="admin-productDetail-product-button">
        <button onClick={handleDeleteColor}>XÓA</button>
      </div>
    </div>
  );
}

export default Color;
