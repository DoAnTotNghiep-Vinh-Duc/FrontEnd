import Rating from "@material-ui/lab/Rating";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import cartAPI from "../../api/cartAPI";
import favoriteAPI from "../../api/favoriteAPI";
import productAPI from "../../api/productAPI";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Menu from "../../components/Menu/Menu";
import { ACTIONS } from "../../context/actions";
import { GlobalContext } from "../../context/context";
import useFavorite from "../../hooks/useFavorite";
import ProductImageSlider from "./components/ProductImageSlider";
import RateAndComment from "./components/RateAndComment/RateAndComment";
import "./css/ProductDetailPage.scss";

toast.configure();
ProductDetailPage.propTypes = {};

function ProductDetailPage(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    params: { productId },
  } = useRouteMatch();

  const [product, setProduct] = useState({});
  const [colorDetails, setColorDetails] = useState([]);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const [sizeDetails, setSizeDetails] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [activeThumbsColor, setActiveThumbsColor] = useState();
  const [btnAdd, setBtnAdd] = useState(false);
  const [disable, setDisable] = useState(true);

  const { dispatch, state } = useContext(GlobalContext);
  const { listFavorite } = useFavorite();
  const userLogin = useSelector((state) => state.user.currentUser);

  let index = listFavorite.findIndex((x) => x._id === productId);

  useEffect(() => {
    (async () => {
      try {
        const result = await productAPI.getProductById(productId);
        setColorDetails(result.data.data.listProductDetail);
        setProduct(result.data.data.product);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productId]);

  const handleClickColor = (item) => {
    setColor(Object.keys(item)[0]);
    setSizeDetails(Object.values(item)[0]);
    setSize(undefined);
    dispatch({
      type: ACTIONS.changeColor,
      payload: true,
    });
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
      alert("Vui l??ng ch???n m??u s???c");
      return false;
    }
    if (size === undefined) {
      alert("Vui l??ng ch???n k??ch c???");
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (color === undefined || size === undefined) {
      setBtnAdd(false);
      setDisable(true);
    } else if (!userLogin) {
      setDisable(true);
    } else {
      setBtnAdd(true);
      setDisable(false);
    }
  }, [color, size, userLogin]);

  const addToCart = () => {
    setLoadingAdd(true);
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

            toast.success("Th??m v??o gi??? h??nh th??nh c??ng", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000,
              theme: "dark",
            });
          }
        } catch (error) {
          console.log(error);
          toast.error(error, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
        }
      })();
    }
    setTimeout(() => {
      setLoadingAdd(false);
    }, 300);
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
          toast.success("Th??m v??o danh s??ch y??u th??ch th??nh c??ng", {
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
    toast.warning("S???n ph???m ???? t???n t???i trong danh s??ch y??u th??ch", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
      theme: "colored",
    });
  };

  return (
    <>
      {loadingAdd && <Loading />}
      <div className="product-details">
        <Header />
        <Menu />
        <div className="product-details-title">
          <div className="title">
            <Link to="/">Trang ch??? / </Link>
            <span>Chi ti???t s???n ph???m</span>
          </div>
        </div>
        <div className="product-details-content">
          <div className="product-details-content-product">
            <div className="product-details-content-product-left">
              <ProductImageSlider
                data={product?.images}
                activeThumbsColor={activeThumbsColor}
              />
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
                      value={product.point ?? 0}
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
                  {product.priceDiscount !== product.price ? (
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
                        }).format(product.priceDiscount)}
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
                    M??u s???c
                  </span>

                  <Swiper
                    onSwiper={setActiveThumbsColor}
                    slidesPerView={4}
                    spaceBetween={5}
                    modules={[Navigation, Thumbs]}
                    className="product-details-content-product-infor-color-filter"
                  >
                    {colorDetails.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div
                          key={index}
                          className={`${"product-details-content-product-infor-color-filter-container"} ${
                            color === Object.keys(item)[0] ? "active-color" : ""
                          }`}
                          onClick={() => handleClickColor(item)}
                        >
                          <div
                            className={`circle`}
                            style={{
                              backgroundColor: `${Object.keys(item)[0]}`,
                            }}
                          ></div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="product-details-content-product-infor-size">
                  <span className="product-details-content-product-infor-size-title">
                    K??ch c???
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
                      <p>Vui l??ng ch???n m??u tr?????c</p>
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
                  <button
                    className={`${"product-details-content-product-infor-action-btnadd"} ${
                      userLogin ? "" : "notadd"
                    } ${btnAdd ? "" : "notadd"}`}
                    disabled={disable}
                    onClick={addToCart}
                  >
                    <i className="bi bi-handbag"></i>
                    Th??m v??o gi??? h??ng
                  </button>

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
          <RateAndComment product={product} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProductDetailPage;
