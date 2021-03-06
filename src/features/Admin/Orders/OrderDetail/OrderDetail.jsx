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
          toast.success("Nh???n ????n h??ng th??nh c??ng", {
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
          toast.success("H???y ????n h??ng th??nh c??ng", {
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
                <p>Chi ti???t ????n h??ng</p>
              </div>
              <div className="admin-orderDetail-title-right">
                <Link className="admin-orderDetail-dashboard" to="/admin">
                  Dashboard
                </Link>
                <i className="bi bi-chevron-right"></i>
                <p className="admin-orderDetail-order">????n h??ng</p>
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
                In h??a ????n
              </Button>
            </div>

            <div className="admin-orderDetail-infor">
              <div className="admin-orderDetail-infor-top">
                M?? ????n h??ng:
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
                    Kh??ch h??ng
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
                    Giao t???i
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
                    Ph????ng th???c thanh to??n
                  </div>
                  <div className="admin-orderDetail-infor-card-content">
                    <p className="admin-orderDetail-infor-card-content-text">
                      {orderDetail.typePayment === "CASH"
                        ? "Thanh to??n khi nh???n h??ng"
                        : "Thanh to??n paypal"}
                    </p>
                  </div>
                </div>
                <div
                  className="admin-orderDetail-infor-card"
                  style={{ width: "25%" }}
                >
                  <div className="admin-orderDetail-infor-card-title">
                    S??? ki???n
                  </div>
                  <div className="admin-orderDetail-infor-card-content">
                    <p className="admin-orderDetail-infor-card-content-text">
                      Ng??y ?????t h??ng:{" "}
                      {moment(orderDetail.createdAt).format("LTS")} -{" "}
                      {moment(orderDetail.createdAt).format("L")}
                    </p>
                    {orderDetail.status === "DELIVERING" && (
                      <p className="admin-orderDetail-infor-card-content-text">
                        Ng??y giao h??ng: {orderDetail.deliveryDay.slice(11, 19)}{" "}
                        - {moment(orderDetail.deliveryDay).format("L")}
                      </p>
                    )}
                    {orderDetail.status === "DONE" && (
                      <>
                        <p className="admin-orderDetail-infor-card-content-text">
                          Ng??y giao h??ng:{" "}
                          {orderDetail.deliveryDay.slice(11, 19)} -{" "}
                          {moment(orderDetail.deliveryDay).format("L")}
                        </p>
                        <p className="admin-orderDetail-infor-card-content-text">
                          Ng??y nh???n h??ng: {orderDetail.receiveDay.slice(11, 19)}{" "}
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
                T??NH TR???NG ????N H??NG
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
                    ???? B??? H???Y
                  </div>
                </div>
                <div className="admin-orderDetail-status-body-text">
                  <div className="admin-orderDetail-status-body-text-confirm">
                    ???? ?????t h??ng
                  </div>
                  <div className="admin-orderDetail-status-body-text-handling">
                    Ch??? x??? l??
                  </div>
                  <div className="admin-orderDetail-status-body-text-waiting">
                    Ch??? nh???n h??ng
                  </div>
                  <div className="admin-orderDetail-status-body-text-shipping">
                    ??ang v???n chuy???n
                  </div>
                  <div className="admin-orderDetail-status-body-text-done">
                    Ho??n th??nh
                  </div>
                </div>
              </div>
            </div>
            <div className="admin-orderDetail-table-title">
              CHI TI???T H??A ????N
            </div>
            <div className="admin-orderDetail-table">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell width="5%">#</StyledTableCell>
                      <StyledTableCell width="10%">H??NH ???NH</StyledTableCell>
                      <StyledTableCell width="40%">S???N PH???M</StyledTableCell>
                      <StyledTableCell width="15%">GI??</StyledTableCell>
                      <StyledTableCell width="15%">S??? L?????NG</StyledTableCell>
                      <StyledTableCell width="15%">T???NG</StyledTableCell>
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
                              M??u: {product.productDetail.color.name}
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
                  TH??NH TI???N
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
                  PH?? V???N CHUY???N
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
                  T???NG
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
                  Ng?????i v???n chuy???n:
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
                    Ng?????i v???n chuy???n:
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
                    Ng?????i v???n chuy???n:
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
                        Ng?????i v???n chuy???n:
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
                          H???Y ????N
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
                          CH???P NH???N
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
