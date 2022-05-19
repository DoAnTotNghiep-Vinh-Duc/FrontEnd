import { makeStyles, withStyles } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Pagination from "@material-ui/lab/Pagination";
import Rating from "@material-ui/lab/Rating";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import productAPI from "../../../../api/productAPI";

RateAndComment.propTypes = {
  product: PropTypes.object,
};
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

function RateAndComment({ product }) {
  const classes = useStyles();
  const {
    params: { productId },
  } = useRouteMatch();

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 5,
  });
  const [pagination, setPagination] = useState({
    limit: 5,
    page: 1,
  });
  const [summary, setSummary] = useState([]);
  const [percent, setPercent] = useState([]);
  const [listComment, setListComment] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await productAPI.getAllRateByProductId({
          productId,
          filters,
        });
        setSummary(response.dataSummary);
        setPercent(response.dataPercent);
        setListComment(response.dataRates);
        setPagination(response.pagination);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [filters, productId]);

  const handlePaginationChange = (event, page) => {
    setFilters((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  return (
    <>
      <div className="product-details-content-rate">
        <div className="product-details-content-rate-left">
          <div className="product-details-content-rate-left-name">
            <p>Áo thun tay dài màu đen</p>
          </div>
          <div className="product-details-content-rate-left-container">
            <div className="product-details-content-rate-left-container-left">
              <div className="product-details-content-rate-left-container-left-total">
                <span className="total">{product.point}</span>
                <StyledRating
                  name="half-rating-read"
                  value={product.point ?? 2}
                  precision={0.1}
                  readOnly
                  size="large"
                  color="#fb2e86"
                />
              </div>
              <div className="product-details-content-rate-left-container-left-vote">
                {percent.map((item, index) => {
                  return (
                    <div
                      className="product-details-content-rate-left-container-left-vote-item"
                      key={index}
                    >
                      <div className="product-details-content-rate-left-container-left-vote-item-title">
                        <span>{Number(item.rate)}</span>{" "}
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div className="product-details-content-rate-left-container-left-vote-item-line">
                        <LinearProgress
                          variant="determinate"
                          value={
                            item.percent ? Number(item.percent.toFixed()) : 0
                          }
                          classes={{
                            colorPrimary: classes.colorPrimary,
                            barColorPrimary: classes.barColorPrimary,
                          }}
                        />
                      </div>
                      <div className="product-details-content-rate-left-container-left-vote-item-percent">
                        {item.percent ? Number(item.percent.toFixed()) : 0}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="product-details-content-rate-left-container-right">
              <p>{product.voted} đánh giá</p>
            </div>
          </div>
        </div>
        <div className="product-details-content-rate-right">
          <div className="product-details-content-rate-right-title">
            <p>XEM THÔNG TIN TÓM LƯỢC</p>
            <span>ĐÁNH GIÁ CỦA KHÁCH HÀNG</span>
          </div>
          <div className="product-details-content-rate-right-rating">
            {summary.map((item, index) => {
              return (
                <div
                  className="product-details-content-rate-right-rating-item"
                  key={index}
                >
                  <Rating
                    name="half-rating-read"
                    value={Number(item._id)}
                    precision={0.1}
                    readOnly
                    size="medium"
                  />
                  <span className="total">({item.count})</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="comment">
        <div className="comment-title">Đánh Giá - Nhận Xét Từ Khách Hàng</div>
        {listComment.length ? (
          <>
            <div className="comment-list">
              {listComment.map((comment) => {
                return (
                  <div className="comment-list-comment" key={comment._id}>
                    <div className="comment-list-comment-avatar">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                        alt=""
                      />
                    </div>
                    <div className="comment-list-comment-comment">
                      <div className="comment-list-comment-name-date">
                        <div className="comment-list-comment-name">
                          {comment.account.nameDisplay}
                        </div>
                        <div className="comment-list-comment-date">
                          {moment(comment.createdAt).format("L")}
                        </div>
                      </div>
                      <div className="comment-list-comment-name-rate">
                        <Rating
                          name="half-rating-read"
                          value={comment.point}
                          precision={0.1}
                          readOnly
                          size="small"
                        />
                      </div>
                      <div className="comment-list-comment-text">
                        {comment.content}
                      </div>
                      <div className="comment-list-comment-images">
                        {comment.image.length ? (
                          <>
                            {comment.image.map((image, index) => {
                              return (
                                <div
                                  className="comment-list-comment-images-image"
                                  key={index}
                                >
                                  <img src={image} alt="" />
                                </div>
                              );
                            })}
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="comment-pagination">
              <Pagination
                shape="rounded"
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination.page}
                onChange={handlePaginationChange}
              />
            </div>
          </>
        ) : (
          <>
            <div className="comment-nolist">
              <i className="bi bi-emoji-smile"></i>
              <p>Chưa có đánh giá nào cho sản phẩm này</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default RateAndComment;
