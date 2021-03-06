import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CancelIcon from "@material-ui/icons/Cancel";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import moment from "moment";
import "moment/locale/vi";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import Select from "react-select";
import { toast } from "react-toastify";
import adminAPI from "../../../../api/adminAPI";
import Header from "../../components/Header/Header";
import NavBars from "../../components/NavBars/NavBars";
import PrintOrder from "../PrintOrder/PrintOrder";
import "./OrderDetail.scss";

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

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function OrderDetail(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const History = useHistory();

  const {
    params: { orderId },
  } = useRouteMatch();

  const [openPrintOrder, setOpenPrintOrder] = useState(false);
  const [cancelOrder, setCancelOrder] = useState(false);
  const [orderDetail, setOrderDetail] = useState({});
  const [listShipper, setListShipper] = useState([]);
  const [shipper, setShipper] = useState(undefined);
  const [disable, setDisable] = useState(true);
  let tempListShipper = [];

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getOrderById(orderId);
        setOrderDetail(response.data.data.order[0]);
        setCancelOrder(response.data.data.canCancelOrder);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [orderId]);

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getAllShipperToSend();
        setListShipper(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  listShipper.forEach((shipper) => {
    tempListShipper.push({ label: shipper.nameDisplay, value: shipper._id });
  });

  const handleAcceptOrder = () => {
    (async () => {
      try {
        const response = await adminAPI.addShipperToOrder(
          orderId,
          shipper.value
        );
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

  const handleClickOpenPrintOrder = () => {
    setOpenPrintOrder(true);
  };

  const handleClosePrintOrder = () => {
    setOpenPrintOrder(false);
  };

  const handleSelectShipper = (newValue) => {
    setShipper(newValue);
  };

  useEffect(() => {
    if (shipper) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [shipper]);

  return (
    <>
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
            <div className="admin-orderDetail-print">
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                className={classes.button}
                startIcon={<LocalPrintshopIcon />}
                onClick={handleClickOpenPrintOrder}
              >
                In hóa đơn
              </Button>
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
                        : "Thanh toán paypal"}
                    </p>
                  </div>
                </div>
                <div
                  className="admin-orderDetail-infor-card"
                  style={{ width: "25%" }}
                >
                  <div className="admin-orderDetail-infor-card-title">
                    Sự kiện
                  </div>
                  <div className="admin-orderDetail-infor-card-content">
                    <p className="admin-orderDetail-infor-card-content-text">
                      Ngày đặt hàng:{" "}
                      {moment(orderDetail.createdAt).format("LTS")} -{" "}
                      {moment(orderDetail.createdAt).format("L")}
                    </p>
                    {orderDetail.status === "DELIVERING" && (
                      <p className="admin-orderDetail-infor-card-content-text">
                        Ngày giao hàng: {orderDetail.deliveryDay.slice(11, 19)}{" "}
                        - {moment(orderDetail.deliveryDay).format("L")}
                      </p>
                    )}
                    {orderDetail.status === "DONE" && (
                      <>
                        <p className="admin-orderDetail-infor-card-content-text">
                          Ngày giao hàng:{" "}
                          {orderDetail.deliveryDay.slice(11, 19)} -{" "}
                          {moment(orderDetail.deliveryDay).format("L")}
                        </p>
                        <p className="admin-orderDetail-infor-card-content-text">
                          Ngày nhận hàng: {orderDetail.receiveDay.slice(11, 19)}{" "}
                          - {moment(orderDetail.receiveDay).format("L")}
                        </p>
                      </>
                    )}
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
                    orderDetail.status === "WAITING"
                      ? "waiting"
                      : orderDetail.status === "DELIVERING"
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
                  <div className="admin-orderDetail-status-body-card-waiting">
                    <i className="bi bi-box2"></i>
                  </div>
                  <div className="line-waiting"></div>
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
                  <div className="admin-orderDetail-status-body-text-waiting">
                    Chờ nhận hàng
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
            <div className="admin-orderDetail-table-title">
              CHI TIẾT HÓA ĐƠN
            </div>
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

            {orderDetail.status === "WAITING" ? (
              <div className="admin-orderDetail-shipper-container">
                <div className="admin-orderDetail-shipper-container-title">
                  Người vận chuyển:
                  <span>
                    <b>
                      <i>{orderDetail.shipperName}</i>
                    </b>
                  </span>
                </div>
              </div>
            ) : orderDetail.status === "DELIVERING" ? (
              <>
                <div className="admin-orderDetail-shipper-container">
                  <div className="admin-orderDetail-shipper-container-title">
                    Người vận chuyển:
                    <span>
                      <b>
                        <i>{orderDetail.shipperName}</i>
                      </b>
                    </span>
                  </div>
                </div>
              </>
            ) : orderDetail.status === "DONE" ? (
              <>
                <div className="admin-orderDetail-shipper-container">
                  <div className="admin-orderDetail-shipper-container-title">
                    Người vận chuyển:
                    <span>
                      <b>
                        <i>{orderDetail.shipperName}</i>
                      </b>
                    </span>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}

            {orderDetail.status === "HANDLING" ? (
              <>
                {!cancelOrder && (
                  <>
                    <div className="admin-orderDetail-shipper-container">
                      <label htmlFor="admin-orderDetail-shipper-title">
                        Người vận chuyển:
                      </label>
                      <div className="admin-orderDetail-shipper">
                        <Select
                          options={tempListShipper}
                          onChange={handleSelectShipper}
                        />
                      </div>
                    </div>
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
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          className={classes.button}
                          startIcon={<LocalShippingIcon />}
                          onClick={handleAcceptOrder}
                          disabled={disable}
                        >
                          CHẤP NHẬN
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={openPrintOrder}
        onClose={handleClosePrintOrder}
        fullWidth
        maxWidth="md"
        aria-labelledby="responsive-dialog-title"
      >
        <PrintOrder closePrint={handleClosePrintOrder} />
      </Dialog>
    </>
  );
}

export default OrderDetail;
