import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import colorAPI from "../../../../../api/colorAPI";
import AddSize from "../AddSize/AddSize";

AddColor.propTypes = {
  id: PropTypes.number,
};

function AddColor(props) {
  const { id } = props;
  const [colorProduct, setColorProduct] = useState({
    _id: "6230af3a0977b634fd932330",
    value: "#F3FF00",
    label: "Vàng",
  });
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [listSize, setListSize] = useState([]);
  const [color_temp, setColor_temp] = useState([]);
  let listColor = [];
  const [send, setSend] = useState(false);
  const [listProductDetail_add, setListProductDetail_add] = useState([]);
  let a = [];

  useEffect(() => {
    (async () => {
      try {
        const response = await colorAPI.getAll();
        if (response.status === 200) {
          setColor_temp(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  color_temp.forEach((element) => {
    listColor.push({
      _id: element._id,
      value: element.color,
      label: element.name,
    });
  });

  const handleAddSize = () => {
    setListSize(
      listSize.concat(
        <AddSize
          key={listSize.length}
          color={colorProduct._id}
          gen={Math.floor(Math.random() * 1000 + 1)}
          sendSizeAndQuantity={handleReceiveSizeAndQuantityByAddSize}
          sendSizeDelete={handleReceiveSizeWantToDeleteByAddSize}
        />
      )
    );
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

  const handleSelectColor = (newValue) => {
    setColorProduct(newValue);
  };

  const handleReceiveSizeAndQuantityByAddSize = (value) => {
    setSend(true);
    if (!listProductDetail_add.length) {
      setListProductDetail_add([value]);
    } else {
      const index = listProductDetail_add.findIndex((x) => x.gen === value.gen);
      if (index >= 0) {
        setListProductDetail_add(listProductDetail_add.splice(index, 1));
        setListProductDetail_add([...listProductDetail_add, value]);
      } else {
        setListProductDetail_add([...listProductDetail_add, value]);
      }
    }
  };

  const handleReceiveSizeWantToDeleteByAddSize = (value) => {
    const index = listSize.findIndex((x) => x.props.gen === value.gen);
    setListSize(listSize.splice(index, 1));

    const index2 = listProductDetail_add.findIndex((x) => x.gen === value.gen);
    setListProductDetail_add(listProductDetail_add.splice(index2, 1));
  };

  const handleDeleteColor = () => {
    props.sendColorWantDelete({ colorProduct, id });
  };

  useEffect(() => {
    listProductDetail_add.forEach((element) => {
      a.push({
        _id: element._id,
        size: element.value,
        quantity: element.quantity,
        status: element.status,
      });
    });

    if (listProductDetail_add.length) {
      props.sendColorAndProductDetails({
        color: listProductDetail_add[0].color,
        listProductDetail: a,
        image:
          image ??
          "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc=",
      });
    }
  }, [a, image, listProductDetail_add, props, send]);

  return (
    <div className="admin-addproduct-product">
      <div className="admin-addproduct-product-image">
        <div className="image-product">
          <img
            src={
              imagePreview ??
              "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
            }
            alt=""
          />
        </div>
        <button>
          <input type="file" accept="image/*" onChange={handleAddImage} />
          THAY ĐỔI HÌNH ẢNH
        </button>
      </div>
      <div className="admin-addproduct-product-infor">
        <div className="admin-addproduct-product-infor-color-btn">
          <div className="admin-addproduct-product-infor-color">
            <Select
              fullWidth
              options={listColor}
              defaultValue={colorProduct}
              onChange={handleSelectColor}
            />
          </div>
          <div className="admin-addproduct-product-infor-btn">
            <button onClick={handleAddSize}>Thêm size</button>
          </div>
        </div>
        <div className="admin-addproduct-product-infor-listSize">
          {listSize}
        </div>
      </div>
      <div className="admin-addproduct-product-button">
        <button onClick={handleDeleteColor}>XÓA</button>
      </div>
    </div>
  );
}

export default AddColor;
