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
  const [temp, setTemp] = useState();
  const [listProductDetail, setListProductDetail] = useState([]);
  const [deleteTemp, setDeleteTemp] = useState();

  let listColor = [];
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
    setTemp(value);
  };

  useEffect(() => {
    if (temp) {
      if (!listProductDetail.length) {
        setListProductDetail([temp]);
      } else {
        const index = listProductDetail.findIndex((x) => x.gen === temp.gen);
        if (index >= 0) {
          const a = listProductDetail.slice(0, index);
          const b = listProductDetail.slice(
            index + 1,
            listProductDetail.length
          );
          const new_arr = [...a, ...b];
          new_arr.push(temp);
          setListProductDetail(new_arr);
        } else {
          setListProductDetail([...listProductDetail, temp]);
        }
      }
    }
  }, [temp]);

  const handleReceiveSizeWantToDeleteByAddSize = (value) => {
    setDeleteTemp(value);
  };

  useEffect(() => {
    if (deleteTemp) {
      const index = listSize.findIndex((x) => x.props.gen === deleteTemp.gen);
      const a = listSize.slice(0, index);
      const b = listSize.slice(index + 1, listSize.length);
      const new_arr = [...a, ...b];
      setListSize(new_arr);

      const index2 = listProductDetail.findIndex(
        (x) => x.gen === deleteTemp.gen
      );
      const c = listProductDetail.slice(0, index2);
      const d = listProductDetail.slice(index2 + 1, listProductDetail.length);
      const new_arr1 = [...c, ...d];
      setListProductDetail(new_arr1);
    }
  }, [deleteTemp]);

  const handleDeleteColor = () => {
    props.sendColorWantDelete({ colorProduct, id });
  };

  useEffect(() => {
    listProductDetail.forEach((element) => {
      a.push({
        _id: element._id,
        size: element.value,
        quantity: element.quantity,
        status: element.status,
      });
    });
    if (listProductDetail.length) {
      props.sendColorAndProductDetails({
        gen: id,
        color: colorProduct._id,
        listProductDetail: a,
        image:
          image ??
          "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc=",
      });
    }
  }, [a, colorProduct._id, id, image, listProductDetail, props]);

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
