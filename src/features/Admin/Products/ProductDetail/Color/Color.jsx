import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Size from "../Size/Size";

Color.propTypes = {
  color: PropTypes.object,
};

function Color(props) {
  const { color } = props;

  let listProductDetail = [];
  let a = [];
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [send, setSend] = useState(false);

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

  useEffect(() => {
    listProductDetail.forEach((element) => {
      a.push({
        _id: element._id,
        size: element.value,
        quantity: element.quantity,
        status: element.status,
      });
    });
    if (image) {
      props.sendColorAndProductDetails({
        color: listProductDetail[0].color,
        listProductDetail: a,
        image: image,
      });
      setSend(false);
    } else {
      props.sendColorAndProductDetails({
        color: listProductDetail[0].color,
        listProductDetail: a,
        image: Object.values(color)[0][0].image,
      });
      setSend(false);
    }
  }, [a, color, image, listProductDetail, props]);

  return (
    <div className="admin-productDetail-product">
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
            <button>Thêm size</button>
          </div>
        </div>
        <div className="admin-productDetail-product-infor-listSize">
          {Object.values(color)[0].map((item, index) => {
            return (
              <Size
                key={index}
                size={item}
                sendSizeAndQuantity={handleReceiveSizeAndQuantity}
              />
            );
          })}
        </div>
      </div>
      <div className="admin-productDetail-product-button">
        <button>XÓA</button>
      </div>
    </div>
  );
}

export default Color;
