import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import adminAPI from "../../../../api/adminAPI";
import Header from "../../components/Header/Header";
import NavBars from "../../components/NavBars/NavBars";
import "./OrderDetail.scss";
import { toast } from "react-toastify";
import "moment/locale/vi";

moment.locale("vi");
toast.configure();
OrderDetail.propTypes = {};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const theme = createTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function OrderDetail(props) {
  const classes = useStyles();
  const History = useHistory();

  const {
    params: { orderId },
  } = useRouteMatch();
  const [orderDetail, setOrderDetail] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getOrderById(orderId);
        setOrderDetail(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [orderId]);

  const handleAcceptOrder = () => {
    (async () => {
      try {
        const response = await adminAPI.nextStatus(orderId);
        if (response.status === 204) {
          toast.success("Nhận đơn hàng thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          History.push("/admin/orders");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const handleDoneOrder = () => {
    (async () => {
      try {
        const response = await adminAPI.nextStatus(orderId);
        if (response.status === 204) {
          toast.success("Đơn hàng giao hàng thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          History.push("/admin/orders");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const handleCancelOrder = () => {
    (async () => {
      try {
        const response = await adminAPI.cancelOrder(orderId);
        if (response.status === 204) {
          toast.success("Hủy đơn hàng thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
          History.push("/admin/orders");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className="admin-orderDetail">
      <NavBars />
      <div className="admin-orderDetail-content">
        <Header />
        <div className="admin-orderDetail-body">
          <div className="admin-orderDetail-title">
            <div className="admin-orderDetail-title-left">
              <p>Chi tiết đơn hàng</p>
            </div>
            <div className="admin-orderDetail-title-right">
              <Link className="admin-orderDetail-dashboard" to="/admin">
                Dashboard
              </Link>
              <i className="bi bi-chevron-right"></i>
              <p className="admin-orderDetail-order">Đơn hàng</p>
            </div>
          </div>
          <div className="admin-orderDetail-infor">
            <div className="admin-orderDetail-infor-top">
              Mã đơn hàng:
              <span>
                #
                {orderDetail._id?.substring(
                  orderDetail._id?.length - 5,
                  orderDetail._id?.length
                )}
              </span>
            </div>
            <div className="admin-orderDetail-infor-bot">
              <div className="admin-orderDetail-infor-card">
                <div className="admin-orderDetail-infor-card-title">
                  Khách hàng
                </div>
                <div className="admin-orderDetail-infor-card-content">
                  <p className="admin-orderDetail-infor-card-content-text">
                    {orderDetail.account?.information.name === ""
                      ? orderDetail.account?.nameDisplay
                      : orderDetail.account?.information.name}
                  </p>
                  <p className="admin-orderDetail-infor-card-content-text">
                    {orderDetail.account?.email}
                  </p>
                  <p className="admin-orderDetail-infor-card-content-text">
                    {orderDetail.account?.information.phone}
                  </p>
                </div>
              </div>
              <div className="admin-orderDetail-infor-card">
                <div className="admin-orderDetail-infor-card-title">
                  Giao tới
                </div>
                <div className="admin-orderDetail-infor-card-content">
                  <p className="admin-orderDetail-infor-card-content-text">
                    {orderDetail.name}
                  </p>
                  <p className="admin-orderDetail-infor-card-content-text">
                    {orderDetail.street}, {orderDetail.ward},{" "}
                    {orderDetail.district}, {orderDetail.city}
                  </p>
                </div>
              </div>
              <div className="admin-orderDetail-infor-card">
                <div className="admin-orderDetail-infor-card-title">
                  Phương thức thanh toán
                </div>
                <div className="admin-orderDetail-infor-card-content">
                  <p className="admin-orderDetail-infor-card-content-text">
                    {orderDetail.typePayment === "CASH"
                      ? "Thanh toán khi nhận hàng"
                      : "Thanh toán bằng thẻ VISA"}
                  </p>
                </div>
              </div>
              <div className="admin-orderDetail-infor-card">
                <div className="admin-orderDetail-infor-card-title">
                  Ngày đặt hàng
                </div>
                <div className="admin-orderDetail-infor-card-content">
                  <p className="admin-orderDetail-infor-card-content-text">
                    {moment(orderDetail.createdAt).format("LLLL")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-orderDetail-status">
            <div className="admin-orderDetail-status-title">
              TÌNH TRẠNG ĐƠN HÀNG
            </div>
            <div
              className={`${"admin-orderDetail-status-body"} ${
                orderDetail.status === "CANCELED" ? "cancel" : ""
              }`}
            >
              <div
                className={`${"admin-orderDetail-status-body-card"} ${
                  orderDetail.status === "DELIVERING"
                    ? "shipping"
                    : orderDetail.status === "DONE"
                    ? "done"
                    : ""
                }`}
              >
                <div className="admin-orderDetail-status-body-card-confirm">
                  <i className="bi bi-cart-check-fill"></i>
                </div>
                <div className="line-confirm"></div>
                <div className="admin-orderDetail-status-body-card-handling">
                  <i className="bi bi-arrow-repeat"></i>
                </div>
                <div className="line-handling"></div>
                <div className="admin-orderDetail-status-body-card-shipping">
                  <i className="bi bi-truck"></i>
                </div>
                <div className="line-shipping"></div>
                <div className="admin-orderDetail-status-body-card-done">
                  <i className="bi bi-check-circle"></i>
                </div>
                <div className="admin-orderDetail-status-body-card-cancel">
                  ĐÃ BỊ HỦY
                </div>
              </div>
              <div className="admin-orderDetail-status-body-text">
                <div className="admin-orderDetail-status-body-text-confirm">
                  Đã đặt hàng
                </div>
                <div className="admin-orderDetail-status-body-text-handling">
                  Chờ xử lý
                </div>
                <div className="admin-orderDetail-status-body-text-shipping">
                  Đang vận chuyển
                </div>
                <div className="admin-orderDetail-status-body-text-done">
                  Hoàn thành
                </div>
              </div>
            </div>
          </div>
          <div className="admin-orderDetail-table-title">CHI TIẾT HÓA ĐƠN</div>
          <div className="admin-orderDetail-table">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell width="5%">#</StyledTableCell>
                    <StyledTableCell width="10%">HÌNH ẢNH</StyledTableCell>
                    <StyledTableCell width="40%">SẢN PHẨM</StyledTableCell>
                    <StyledTableCell width="15%">GIÁ</StyledTableCell>
                    <StyledTableCell width="15%">SỐ LƯỢNG</StyledTableCell>
                    <StyledTableCell width="15%">TỔNG</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderDetail.listOrderDetail?.map((product, index) => {
                    return (
                      <StyledTableRow key={index}>
                        <StyledTableCell>{index + 1}</StyledTableCell>
                        <StyledTableCell>
                          <div className="admin-orderDetail-table-image">
                            <img src={product.productDetail.image} alt="" />
                          </div>
                        </StyledTableCell>
                        <StyledTableCell>
                          {product.productDetail.product.name}
                          <p className="admin-orderDetail-table-size">
                            Size: {product.productDetail.size}
                          </p>
                          <p className="admin-orderDetail-table-size">
                            Màu: {product.productDetail.color.name}
                          </p>
                        </StyledTableCell>
                        <StyledTableCell>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.price)}
                        </StyledTableCell>
                        <StyledTableCell>{product.quantity}</StyledTableCell>
                        <StyledTableCell>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.price * product.quantity)}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="admin-orderDetail-table-footer">
            <div className="admin-orderDetail-table-footer-subtotal">
              <div className="admin-orderDetail-table-footer-subtotal-title">
                THÀNH TIỀN
              </div>
              <div className="admin-orderDetail-table-footer-subtotal-cost">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(orderDetail.subTotal)}
              </div>
            </div>
            <div className="admin-orderDetail-table-footer-subtotal">
              <div className="admin-orderDetail-table-footer-subtotal-title">
                PHÍ VẬN CHUYỂN
              </div>
              <div className="admin-orderDetail-table-footer-subtotal-cost">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(30000)}
              </div>
            </div>
            <div className="admin-orderDetail-table-footer-total">
              <div className="admin-orderDetail-table-footer-total-title">
                TỔNG
              </div>
              <div className="admin-orderDetail-table-footer-total-cost">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(orderDetail.total)}
              </div>
            </div>
          </div>

          {orderDetail.status === "CANCELED" ? (
            ""
          ) : orderDetail.status === "DONE" ? (
            ""
          ) : (
            <>
              <div className="admin-orderDetail-btn">
                <div className="admin-orderDetail-btn-cancel">
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.button}
                    startIcon={<CancelIcon />}
                    onClick={handleCancelOrder}
                  >
                    HỦY ĐƠN
                  </Button>
                </div>
                <div className="admin-orderDetail-btn-shipping">
                  {orderDetail.status === "HANDLING" ? (
                    <>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<LocalShippingIcon />}
                        onClick={handleAcceptOrder}
                      >
                        CHẤP NHẬN
                      </Button>
                    </>
                  ) : orderDetail.status === "DELIVERING" ? (
                    <>
                      <ThemeProvider theme={theme}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          className={classes.margin}
                          startIcon={<CheckCircleOutlineIcon />}
                          onClick={handleDoneOrder}
                        >
                          HOÀN THÀNH
                        </Button>
                      </ThemeProvider>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
