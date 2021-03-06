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
import { toast } from "react-toastify";
import rateAPI from "../../../api/rateAPI";
import { ACTIONS } from "../../../context/actions";
import { GlobalContext } from "../../../context/context";

toast.configure();
UpdateRated.propTypes = {
  rate: PropTypes.object,
};

function UpdateRated(props) {
  const { rate } = props;
  const { dispatch } = useContext(GlobalContext);

  const [productComment, setProductComment] = useState({
    rateId: rate._id,
    point: rate.point,
    content: rate.content,
  });
  const [imageRated, setImageRated] = useState([]);
  const [listImage, setListImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [button, setButton] = useState(false);

  useEffect(() => {
    if (rate.image.length) {
      rate.image.forEach((x) => {
        setImagePreview((pre) => [
          ...pre,
          {
            key: Math.floor(Math.random() * 1000),
            url: x,
          },
        ]);
        setImageRated((pre) => [
          ...pre,
          {
            url: x,
          },
        ]);
      });
    }
  }, [rate.image]);

  const handleClose = () => {
    props.closeUpdateRated(false);
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

    setImageRated((imageRated) =>
      imageRated.filter((x) => x.url !== image.url)
    );
  };

  const handleUpdateRate = () => {
    let product_temp = {
      rateId: productComment.rateId,
      point: Number(productComment.point),
      content: productComment.content,
      image: imageRated,
    };

    (async () => {
      try {
        const fd = new FormData();
        fd.append("newRate", JSON.stringify(product_temp));

        if (listImage.length) {
          listImage.forEach((element, index) => {
            fd.append(index.toString(), element.file);
          });
        }

        const response = await rateAPI.updateRate(fd);

        if (response.status === 204) {
          (async () => {
            try {
              const response = await rateAPI.getAllProductRated();
              dispatch({
                type: ACTIONS.dataProductRated,
                payload: response.data.data,
              });
            } catch (error) {
              console.log(error);
            }
          })();
          toast.success("S???a ????nh gi?? s???n ph???m th??nh c??ng", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          props.closeUpdateRated(false);
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
        {"C???p nh???p ????nh gi?? s???n ph???m"}
      </DialogTitle>
      <DialogContent>
        <div className="product-comment">
          <div className="product-comment-image-name">
            <div className="product-comment-image">
              <img
                src={rate.product.images[rate.product.images.length - 1]}
                alt=""
              />
            </div>
            <div className="product-comment-name">{rate.product.name}</div>
          </div>
          <div className="product-comment-rating">
            <Rating
              name="customized-empty"
              size="large"
              value={productComment.point ?? 0}
              precision={1}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              onChange={handleChangeRating}
            />
          </div>
          <div className="product-comment-content">
            <TextField
              id="outlined-multiline-static"
              label="Nh???n x??t"
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
              Th??m h??nh ???nh
              <input type="file" accept="image/*" onChange={handleAddImage} />
            </Button>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          H???Y
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          startIcon={<GradeIcon />}
          onClick={handleUpdateRate}
          disabled={button ? false : true}
        >
          ????nh gi??
        </Button>
      </DialogActions>
    </>
  );
}

export default UpdateRated;
