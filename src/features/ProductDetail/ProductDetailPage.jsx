import { makeStyles, withStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React, { useContext, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import cartAPI from "../../api/cartAPI";
import favoriteAPI from "../../api/favoriteAPI";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { ACTIONS } from "../../context/actions";
import { GlobalContext } from "../../context/context";
import useFavorite from "../../hooks/useFavorite";
import useProductDetail from "../../hooks/useProductDetail";
import ProductImageSlider from "./components/ProductImageSlider";
import "./css/ProductDetailPage.scss";
import LinearProgress from "@material-ui/core/LinearProgress";

toast.configure();
ProductDetailPage.propTypes = {};

const StyledRating = withStyles({
  root: {
    color: "#FE8C23",
  },
  iconFilled: {
    color: "#FE8C23",
  },
  iconHover: {
    color: "#fff",
    backgroundColor: "#000",
  },
})(Rating);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing(1),
  },
  colorPrimary: { backgroundColor: "#EEEEEE" },
  barColorPrimary: {
    backgroundColor: "#FE8C23",
  },
}));

function ProductDetailPage(props) {
  const { dispatch } = useContext(GlobalContext);
  const classes = useStyles();

  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const [sizeDetails, setSizeDetails] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading, colorDetails } = useProductDetail(productId);
  const { listFavorite } = useFavorite();

  let index = listFavorite.findIndex((x) => x._id === productId);

  if (loading) {
    return <div>Loading</div>;
  }

  const handleClickColor = (item) => {
    setColor(Object.keys(item)[0]);
    setSizeDetails(Object.values(item)[0]);
    setSize(undefined);
  };

  const handleClickSize = (item) => {
    setSize(item.size);
    setProductDetails(item);
  };

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu sắc");
      return false;
    }
    if (size === undefined) {
      alert("Vui lòng chọn kích cỡ");
      return false;
    }
    return true;
  };

  const addToCart = () => {
    if (check()) {
      (async () => {
        try {
          const response = await cartAPI.addItemToCart({
            productDetailId: productDetails._id,
            quantity: quantity,
          });
          if (response.status === 204) {
            (async () => {
              try {
                const response = await cartAPI.getCartByAccountId();
                dispatch({
                  type: ACTIONS.dataCart,
                  payload: response.data.data,
                });
              } catch (error) {
                console.log(error);
              }
            })();
            toast.success("Thêm vào giỏ hành thành công", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000,
              theme: "dark",
            });
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  const handleClickAddToFavorite = () => {
    (async () => {
      try {
        const response = await favoriteAPI.addProductToFavorite({
          productId: productId,
        });
        if (response.status === 200) {
          (async () => {
            try {
              const response = await favoriteAPI.getAll();
              dispatch({
                type: ACTIONS.dataFavorite,
                payload: response.data.data.listProduct,
              });
            } catch (error) {
              console.log(error);
            }
          })();
          toast.success("Thêm vào danh sách yêu thích thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "colored",
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const handleClickAddedToFavorite = () => {
    toast.warning("Sản phẩm đã tồn tại trong danh sách yêu thích", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
      theme: "colored",
    });
  };

  return (
    <div className="product-details">
      <Header />
      <Menu />
      <div className="product-details-title">
        <div className="title">
          <Link to="/">Trang chủ / </Link>
          <span>Chi tiết sản phẩm</span>
        </div>
      </div>
      <div className="product-details-content">
        <div className="product-details-content-product">
          <div className="product-details-content-product-left">
            <ProductImageSlider data={product.images} />
          </div>

          <div className="product-details-content-product-right">
            <div className="product-details-content-product-infor">
              <div className="product-details-content-product-infor-name">
                {product.name}
              </div>
              <div className="product-details-content-product-infor-rate">
                <div className="product-details-content-product-infor-rate-start">
                  <Rating
                    name="half-rating-read"
                    defaultValue={product.point}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                </div>
                <div className="product-details-content-product-infor-rate-number">
                  ({product.voted})
                </div>
              </div>
              <div className="product-details-content-product-infor-price">
                {product.discount.percentDiscount > 0 ? (
                  <>
                    <span className="product-details-content-product-infor-price-original">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price)}
                    </span>
                    <span className="product-details-content-product-infor-price-sale">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(
                        product.price * (1 - product.discount.percentDiscount)
                      )}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="product-details-content-product-infor-price-sale">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(product.price)}
                    </span>
                  </>
                )}
              </div>
              <div className="product-details-content-product-infor-descripton">
                {product.description}
              </div>
              <div className="product-details-content-product-infor-color">
                <span className="product-details-content-product-infor-color-title">
                  Màu sắc
                </span>
                <div className="product-details-content-product-infor-color-filter">
                  {colorDetails.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`${"product-details-content-product-infor-color-filter-container"} ${
                          color === Object.keys(item)[0] ? "active-color" : ""
                        }`}
                        onClick={() => handleClickColor(item)}
                      >
                        <div
                          className={`circle`}
                          style={{ backgroundColor: `${Object.keys(item)[0]}` }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="product-details-content-product-infor-size">
                <span className="product-details-content-product-infor-size-title">
                  Kích cỡ
                </span>
                <div className="product-details-content-product-infor-size-container">
                  {sizeDetails.length ? (
                    <>
                      {sizeDetails.map((item, index) => (
                        <span
                          key={index}
                          className={`${"size"} ${
                            size === item.size ? "active-size" : ""
                          }`}
                          onClick={() => handleClickSize(item)}
                        >
                          {item.size}
                        </span>
                      ))}
                    </>
                  ) : (
                    <p>Vui lòng chọn màu trước</p>
                  )}
                </div>
              </div>
              <div className="product-details-content-product-infor-action">
                <i
                  className="bi bi-dash-lg"
                  onClick={() => updateQuantity("minus")}
                ></i>
                <div className="product-details-content-product-infor-action-quantity">
                  {quantity}
                </div>
                <i
                  className="bi bi-plus-lg"
                  onClick={() => updateQuantity("plus")}
                ></i>
                <div
                  className="product-details-content-product-infor-action-btnadd"
                  onClick={addToCart}
                >
                  <i className="bi bi-handbag"></i>
                  Thêm vào giỏ hàng
                </div>

                <span className="product-details-content-product-infor-wishlist">
                  {index >= 0 ? (
                    <i
                      className="bi bi-suit-heart-fill"
                      onClick={handleClickAddedToFavorite}
                      style={{ color: "#fb2e86" }}
                    ></i>
                  ) : (
                    <i
                      className="bi bi-suit-heart"
                      onClick={handleClickAddToFavorite}
                    ></i>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="product-details-content-rate">
          <div className="product-details-content-rate-left">
            <div className="product-details-content-rate-left-name">
              <p>Áo thun tay dài màu đen</p>
            </div>
            <div className="product-details-content-rate-left-container">
              <div className="product-details-content-rate-left-container-left">
                <div className="product-details-content-rate-left-container-left-total">
                  <span className="total">4.6</span>

                  <StyledRating
                    name="half-rating-read"
                    defaultValue={product.point}
                    precision={0.1}
                    readOnly
                    size="large"
                    color="#fb2e86"
                  />
                </div>
                <div className="product-details-content-rate-left-container-left-vote">
                  <div className="product-details-content-rate-left-container-left-vote-item">
                    <div className="product-details-content-rate-left-container-left-vote-item-title">
                      <span>5</span> <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="product-details-content-rate-left-container-left-vote-item-line">
                      <LinearProgress
                        variant="determinate"
                        value={66}
                        classes={{
                          colorPrimary: classes.colorPrimary,
                          barColorPrimary: classes.barColorPrimary,
                        }}
                      />
                    </div>
                    <div className="product-details-content-rate-left-container-left-vote-item-percent">
                      66%
                    </div>
                  </div>
                  <div className="product-details-content-rate-left-container-left-vote-item">
                    <div className="product-details-content-rate-left-container-left-vote-item-title">
                      <span>4</span> <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="product-details-content-rate-left-container-left-vote-item-line">
                      <LinearProgress
                        variant="determinate"
                        value={66}
                        classes={{
                          colorPrimary: classes.colorPrimary,
                          barColorPrimary: classes.barColorPrimary,
                        }}
                      />
                    </div>
                    <div className="product-details-content-rate-left-container-left-vote-item-percent">
                      66%
                    </div>
                  </div>
                  <div className="product-details-content-rate-left-container-left-vote-item">
                    <div className="product-details-content-rate-left-container-left-vote-item-title">
                      <span>3</span> <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="product-details-content-rate-left-container-left-vote-item-line">
                      <LinearProgress
                        variant="determinate"
                        value={66}
                        classes={{
                          colorPrimary: classes.colorPrimary,
                          barColorPrimary: classes.barColorPrimary,
                        }}
                      />
                    </div>
                    <div className="product-details-content-rate-left-container-left-vote-item-percent">
                      66%
                    </div>
                  </div>
                  <div className="product-details-content-rate-left-container-left-vote-item">
                    <div className="product-details-content-rate-left-container-left-vote-item-title">
                      <span>2</span> <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="product-details-content-rate-left-container-left-vote-item-line">
                      <LinearProgress
                        variant="determinate"
                        value={66}
                        classes={{
                          colorPrimary: classes.colorPrimary,
                          barColorPrimary: classes.barColorPrimary,
                        }}
                      />
                    </div>
                    <div className="product-details-content-rate-left-container-left-vote-item-percent">
                      66%
                    </div>
                  </div>
                  <div className="product-details-content-rate-left-container-left-vote-item">
                    <div className="product-details-content-rate-left-container-left-vote-item-title">
                      <span>1</span> <i className="bi bi-star-fill"></i>
                    </div>
                    <div className="product-details-content-rate-left-container-left-vote-item-line">
                      <LinearProgress
                        variant="determinate"
                        value={66}
                        classes={{
                          colorPrimary: classes.colorPrimary,
                          barColorPrimary: classes.barColorPrimary,
                        }}
                      />
                    </div>
                    <div className="product-details-content-rate-left-container-left-vote-item-percent">
                      66%
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-details-content-rate-left-container-right">
                <p>11 đánh giá</p>
              </div>
            </div>
          </div>
          <div className="product-details-content-rate-right">
            <div className="product-details-content-rate-right-title">
              <p>XEM THÔNG TIN TÓM LƯỢC</p>
              <span>ĐÁNH GIÁ CỦA KHÁCH HÀNG</span>
            </div>
            <div className="product-details-content-rate-right-rating">
              <div className="product-details-content-rate-right-rating-item">
                <Rating
                  name="half-rating-read"
                  defaultValue={product.point}
                  precision={0.1}
                  readOnly
                  size="medium"
                />
                <span className="total">(10)</span>
              </div>
              <div className="product-details-content-rate-right-rating-item">
                <Rating
                  name="half-rating-read"
                  defaultValue={product.point}
                  precision={0.1}
                  readOnly
                  size="medium"
                />
                <span className="total">(10)</span>
              </div>
              <div className="product-details-content-rate-right-rating-item">
                <Rating
                  name="half-rating-read"
                  defaultValue={product.point}
                  precision={0.1}
                  readOnly
                  size="medium"
                />
                <span className="total">(10)</span>
              </div>
              <div className="product-details-content-rate-right-rating-item">
                <Rating
                  name="half-rating-read"
                  defaultValue={product.point}
                  precision={0.1}
                  readOnly
                  size="medium"
                />
                <span className="total">(10)</span>
              </div>
              <div className="product-details-content-rate-right-rating-item">
                <Rating
                  name="half-rating-read"
                  defaultValue={product.point}
                  precision={0.1}
                  readOnly
                  size="medium"
                />
                <span className="total">(10)</span>
              </div>
            </div>
            <div className="product-details-content-rate-right-btn">
              <button>Viết bài đánh giá</button>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="comment-list">
            <div className="comment-list-comment">
              <div className="comment-list-comment-name-date">
                <div className="comment-list-comment-name">Đạt Đức</div>
                <div className="comment-list-comment-date">14/05/2022</div>
              </div>
              <div className="comment-list-comment-name-rate">
                <Rating
                  name="half-rating-read"
                  defaultValue={product.point}
                  precision={0.1}
                  readOnly
                  size="small"
                />
              </div>
              <div className="comment-list-comment-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                voluptas magnam reiciendis minus modi. Maxime qui iure, omnis
                perspiciatis labore id. Neque nihil autem minus sapiente velit
                vero dicta labore!
              </div>
            </div>
            <div className="comment-list-comment">
              <div className="comment-list-comment-name-date">
                <div className="comment-list-comment-name">Đạt Đức</div>
                <div className="comment-list-comment-date">14/05/2022</div>
              </div>
              <div className="comment-list-comment-name-rate">
                <Rating
                  name="half-rating-read"
                  defaultValue={product.point}
                  precision={0.1}
                  readOnly
                  size="small"
                />
              </div>
              <div className="comment-list-comment-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                voluptas magnam reiciendis minus modi. Maxime qui iure, omnis
                perspiciatis labore id. Neque nihil autem minus sapiente velit
                vero dicta labore!
              </div>
            </div>
          </div>
          <div className="comment-pagination">pagination</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetailPage;
