import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Rating from "@material-ui/lab/Rating";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rateAPI from "../../api/rateAPI";
import NavbarUser from "../../components/NavBarUser/NavbarUser";
import { ACTIONS } from "../../context/actions";
import { GlobalContext } from "../../context/context";
import "./Rated.scss";
import UpdateRated from "./UpdateRated/UpdateRated";

Rated.propTypes = {};

function Rated(props) {
  const { dispatch, state } = useContext(GlobalContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const [rate, setRated] = useState({});

  const handleClickOpen = (rated) => {
    setRated(rated);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
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
  }, [dispatch]);

  return (
    <>
      <div className="rated">
        <NavbarUser />
        <div className="rated-container">
          <div className="rated-title">
            <div className="rated-title-left">
              <p>Lịch sử đánh giá</p>
            </div>
            <div className="rated-title-right">
              <Link className="rated-title-right-home" to="/">
                Trang chủ
              </Link>
              <i className="bi bi-chevron-right"></i>
              <p className="rated-title-right-order">Đánh giá</p>
            </div>
          </div>
          <div className="rated-search">
            <input type="text" placeholder="Nhập mã sản phẩm..." />
            <div className="rated-search-icon">
              <i className="bi bi-search"></i>
            </div>
          </div>
          <div className="rated-list">
            {state.dataProductRated.length ? (
              <>
                {state.dataProductRated.map((rated) => {
                  return (
                    <div className="rated-list-rated" key={rated._id}>
                      <div className="rated-list-rated-product">
                        <div className="rated-list-rated-product-image">
                          <img
                            src={
                              rated.product.images[
                                Math.floor(
                                  Math.random() * rated.product.images.length
                                )
                              ]
                            }
                            alt=""
                          />
                        </div>
                        <div className="rated-list-rated-product-infor">
                          {rated.product.name}
                        </div>
                        <div className="rated-list-rated-product-btn">
                          <button onClick={() => handleClickOpen(rated)}>
                            Sửa
                          </button>
                        </div>
                      </div>
                      <div className="rated-list-rated-product-comment">
                        <div className="rated-list-rated-product-comment-infor">
                          <div className="rated-list-rated-product-comment-star">
                            <Rating
                              name="half-rating-read"
                              value={rated.point ?? 0}
                              precision={0.1}
                              readOnly
                              size="medium"
                            />
                          </div>
                          <div className="rated-list-rated-product-comment-text">
                            {rated.content}
                          </div>
                          {rated.image.length ? (
                            <>
                              <div className="rated-list-rated-product-comment-image">
                                {rated.image.map((image, index) => {
                                  return <img src={image} alt="" key={index} />;
                                })}
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="rated-list-rated-product-comment-time">
                          {moment(rated.createdAt).format("L")}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="rated-list-notfound">
                  <i className="bi bi-emoji-smile"></i>
                  <p>Bạn chưa có đánh giá nào</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <UpdateRated closeUpdateRated={handleClose} rate={rate} />
      </Dialog>
    </>
  );
}

export default Rated;
