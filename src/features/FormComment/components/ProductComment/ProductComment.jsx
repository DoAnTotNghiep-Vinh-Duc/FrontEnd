import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import GradeIcon from "@material-ui/icons/Grade";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import orderAPI from "../../../../api/orderAPI";
import productAPI from "../../../../api/productAPI";
import { ACTIONS } from "../../../../context/actions";
import { GlobalContext } from "../../../../context/context";
import "./ProductComment.scss";

ProductComment.propTypes = {
  product: PropTypes.object,
};

function ProductComment(props) {
  const { product } = props;

  const {
    params: { orderId },
  } = useRouteMatch();
  const { dispatch } = useContext(GlobalContext);

  const [productComment, setProductComment] = useState({
    productId: product._id,
    point: 0,
    content: "",
  });
  const [listImage, setListImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [button, setButton] = useState(false);

  const handleClose = () => {
    props.closeComment(false);
  };

  const handleChangeRating = (event, newValue) => {
    setProductComment({
      ...productComment,
      point: newValue,
    });
  };
  const handleChangeContent = (event) => {
    setProductComment({
      ...productComment,
      content: event.target.value,
    });
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    const fileSelected = e.target.files[0];

    if (fileSelected && fileSelected.type.substr(0, 5) === "image") {
      setListImage([
        ...listImage,
        { file: fileSelected, key: Math.floor(Math.random() * 1000) },
      ]);
    } else {
      setListImage([...listImage]);
    }
  };

  useEffect(() => {
    if (listImage.length) {
      listImage.forEach((image) => {
        if (image) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const index = imagePreview.findIndex((x) => x.key === image.key);
            if (index < 0) {
              setImagePreview([
                ...imagePreview,
                { key: image.key, url: reader.result },
              ]);
            }
          };
          reader.readAsDataURL(image.file);
        } else {
          setImagePreview([...imagePreview]);
        }
      });
    }
  }, [listImage]);

  const handleDeleteImage = (image) => {
    setListImage((listImage) =>
      listImage.filter((item) => item.key !== image.key)
    );

    setImagePreview((imagePreview) =>
      imagePreview.filter((x) => x.key !== image.key)
    );
  };

  const handleRate = () => {
    (async () => {
      try {
        const fd = new FormData();
        fd.append("rateInfo", JSON.stringify(productComment));

        if (listImage.length) {
          listImage.forEach((element, index) => {
            fd.append(index, element.image);
          });
        }

        const response = await productAPI.rateProduct(fd);

        if (response.status === 201) {
          (async () => {
            try {
              const response = await orderAPI.getProductForRate(orderId);
              dispatch({
                type: ACTIONS.dataProductForRate,
                payload: response.data.data,
              });
            } catch (error) {
              console.log(error);
            }
          })();
          props.closeComment(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  useEffect(() => {
    if (productComment.point === 0 || productComment.content === "") {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [productComment.content, productComment.point]);

  return (
    <>
      <DialogTitle id="responsive-dialog-title">
        {"Đánh giá sản phẩm"}
      </DialogTitle>
      <DialogContent>
        <div className="product-comment">
          <div className="product-comment-image-name">
            <div className="product-comment-image">
              <img
                src={
                  product.images[
                    Math.floor(Math.random() * product.images.length)
                  ]
                }
                alt=""
              />
            </div>
            <div className="product-comment-name">{product.name}</div>
          </div>
          <div className="product-comment-rating">
            <Rating
              name="customized-empty"
              size="large"
              value={productComment.point}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              onChange={handleChangeRating}
            />
          </div>
          <div className="product-comment-content">
            <TextField
              id="outlined-multiline-static"
              label="Nhận xét"
              multiline
              fullWidth
              rows={4}
              variant="outlined"
              value={productComment.content}
              onChange={handleChangeContent}
            />
          </div>
          <div className="product-comment-image-upload">
            {imagePreview.length ? (
              <>
                {imagePreview.map((image) => {
                  return (
                    <div
                      className="product-comment-image-upload-item"
                      key={image.key}
                    >
                      <img src={image.url} alt="" />
                      <i
                        className="bi bi-x"
                        onClick={() => handleDeleteImage(image)}
                      ></i>
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </div>

          <div className="product-comment-btn">
            <Button
              variant="outlined"
              color="primary"
              startIcon={<CameraAltIcon />}
            >
              Thêm hình ảnh
              <input type="file" accept="image/*" onChange={handleAddImage} />
            </Button>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          HỦY
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          startIcon={<GradeIcon />}
          onClick={handleRate}
          disabled={button ? false : true}
        >
          Đánh giá
        </Button>
      </DialogActions>
    </>
  );
}

export default ProductComment;
