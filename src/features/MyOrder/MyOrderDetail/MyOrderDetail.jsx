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
import GradeIcon from "@material-ui/icons/Grade";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import orderAPI from "../../../api/orderAPI";
import NavbarUser from "../../../components/NavBarUser/NavbarUser";
import FormComment from "../../FormComment/FormComment";
import CancelOrder from "../CancelOrder/CancelOrder";
import Product from "../Product/Product";
import "./MyOrderDetail.scss";

MyOrderDetail.propTypes = {};

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
}));

function MyOrderDetail(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const {
    params: { orderId },
  } = useRouteMatch();

  const [open, setOpen] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [myOrder, setMyOrder] = useState({});
  const [canCancel, setCanCancel] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await orderAPI.getOrderByOrderId(orderId);
        setMyOrder(response.data.data.order[0]);
        setCanCancel(response.data.data.canCancelOrder);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [orderId]);

  const handleClickOpenComment = () => {
    setOpen(true);
  };

  const handleCloseComment = () => {
    setOpen(false);
  };

  const handleClickOpenCancel = () => {
    setCancel(true);
  };

  const handleCloseCancel = () => {
    setCancel(false);
  };

  return (
    <>
      <div className="myOrderDetail">
        <NavbarUser />
        <div className="myOrderDetail-content">
          <div className="myOrderDetail-title">
            <div className="myOrderDetail-title-left">
              <p>Chi ti???t ????n h??ng</p>
            </div>
            <div className="myOrderDetail-title-right">
              <Link className="myOrderDetail-title-right-home" to="/">
                Trang ch???
              </Link>
              <i className="bi bi-chevron-right"></i>
              <p className="myOrderDetail-title-right-order">????n h??ng</p>
            </div>
          </div>

          {canCancel && (
            <div className="myOrderDetail-cancel">
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                onClick={handleClickOpenCancel}
              >
                h???y ????n h??ng
              </Button>
            </div>
          )}

          <div className="myOrderDetail-status">
            <div className="myOrderDetail-status-title">
              T??NH TR???NG ????N H??NG
            </div>
            <div
              className={`${"myOrderDetail-status-body"} ${
                myOrder?.status === "CANCELED" ? "cancel" : ""
              }`}
            >
              <div
                className={`${"myOrderDetail-status-body-card"} ${
                  myOrder?.status === "WAITING"
                    ? "waiting"
                    : myOrder?.status === "DELIVERING"
                    ? "shipping"
                    : myOrder?.status === "DONE"
                    ? "done"
                    : ""
                }`}
              >
                <div className="myOrderDetail-status-body-card-confirm">
                  <i className="bi bi-cart-check-fill"></i>
                </div>
                <div className="line-confirm"></div>
                <div className="myOrderDetail-status-body-card-handling">
                  <i className="bi bi-arrow-repeat"></i>
                </div>
                <div className="line-handling"></div>
                <div className="myOrderDetail-status-body-card-waiting">
                  <i className="bi bi-box2"></i>
                </div>
                <div className="line-waiting"></div>
                <div className="myOrderDetail-status-body-card-shipping">
                  <i className="bi bi-truck"></i>
                </div>
                <div className="line-shipping"></div>
                <div className="myOrderDetail-status-body-card-done">
                  <i className="bi bi-check-circle"></i>
                </div>
                <div className="myOrderDetail-status-body-card-cancel">
                  ???? B??? H???Y
                </div>
              </div>
              <div className="myOrderDetail-status-body-text">
                <div className="myOrderDetail-status-body-text-confirm">
                  ???? ?????t h??ng
                </div>
                <div className="myOrderDetail-status-body-text-handling">
                  Ch??? x??? l??
                </div>
                <div className="myOrderDetail-status-body-text-waiting">
                  Ch??? nh???n h??ng
                </div>
                <div className="myOrderDetail-status-body-text-shipping">
                  ??ang v???n chuy???n
                </div>
                <div className="myOrderDetail-status-body-text-done">
                  Ho??n th??nh
                </div>
              </div>
            </div>
          </div>
          <div className="myOrderDetail-order">
            <div className="myOrderDetail-order-logo">
              <p>Lemon</p>
            </div>
            <div className="myOrderDetail-order-detail">
              <div className="myOrderDetail-order-detail-side">
                <div className="myOrderDetail-order-detail-side-text">
                  <label htmlFor="">?????n: </label>
                  <span>{myOrder?.name}</span>
                </div>
                <div className="myOrderDetail-order-detail-side-text">
                  <label htmlFor="">?????a ch???: </label>
                  <span>
                    {myOrder?.street}, {myOrder?.ward}, {myOrder?.district},{" "}
                    {myOrder?.city}
                  </span>
                </div>
                <div className="myOrderDetail-order-detail-side-text">
                  <label htmlFor="">S??? ??i???n tho???i: </label>
                  <span>{myOrder?.account?.information.phone}</span>
                </div>
              </div>
              <div className="myOrderDetail-order-detail-side">
                <div className="myOrderDetail-order-detail-side-text">
                  <label htmlFor="">M?? h??a ????n: </label>
                  <span>{myOrder?._id}</span>
                </div>
                <div className="myOrderDetail-order-detail-side-text">
                  <label htmlFor="">Ng??y ?????t h??ng: </label>
                  <span>
                    {moment(myOrder?.createdAt).format("LTS")} -{" "}
                    {moment(myOrder?.createdAt).format("L")}
                  </span>
                </div>

                {myOrder.status === "DELIVERING" && (
                  <div className="myOrderDetail-order-detail-side-text">
                    <label htmlFor="">Ng??y giao h??ng: </label>
                    <span>
                      {myOrder.deliveryDay.slice(11, 19)}{" "}
                      {moment(myOrder?.deliveryDay).format("L")}
                    </span>
                  </div>
                )}
                {myOrder.status === "DONE" && (
                  <>
                    <div className="myOrderDetail-order-detail-side-text">
                      <label htmlFor="">Ng??y giao h??ng: </label>
                      <span>
                        {myOrder.deliveryDay.slice(11, 19)}{" "}
                        {moment(myOrder?.deliveryDay).format("L")}
                      </span>
                    </div>
                    <div className="myOrderDetail-order-detail-side-text">
                      <label htmlFor="">Ng??y nh???n h??ng: </label>
                      <span>
                        {myOrder.receiveDay.slice(11, 19)}{" "}
                        {moment(myOrder?.receiveDay).format("L")}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="myOrderDetail-table-title">CHI TI???T H??A ????N</div>
            <div className="myOrderDetail-order-table">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <>
                        <StyledTableCell width="5%">#</StyledTableCell>
                        <StyledTableCell width="10%">H??NH ???NH</StyledTableCell>
                        <StyledTableCell width="40%">S???N PH???M</StyledTableCell>
                        <StyledTableCell width="15%">GI??</StyledTableCell>
                        <StyledTableCell width="15%">S??? L?????NG</StyledTableCell>
                        <StyledTableCell width="15%">T???NG</StyledTableCell>
                      </>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {myOrder?.listOrderDetail?.map((product, index) => {
                      return (
                        <Product
                          key={index}
                          product={product}
                          index={index}
                          myOrder={myOrder}
                        />
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="myOrderDetail-table-footer">
              <div className="myOrderDetail-table-footer-subtotal">
                <div className="myOrderDetail-table-footer-subtotal-title">
                  TH??NH TI???N
                </div>
                <div className="myOrderDetail-table-footer-subtotal-cost">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(myOrder?.subTotal)}
                </div>
              </div>
              <div className="myOrderDetail-table-footer-subtotal">
                <div className="myOrderDetail-table-footer-subtotal-title">
                  PH?? V???N CHUY???N
                </div>
                <div className="myOrderDetail-table-footer-subtotal-cost">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(30000)}
                </div>
              </div>
              <div className="myOrderDetail-table-footer-total">
                <div className="myOrderDetail-table-footer-total-title">
                  T???NG
                </div>
                <div className="myOrderDetail-table-footer-total-cost">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(myOrder?.total)}
                </div>
              </div>
            </div>
          </div>

          {myOrder.status === "DONE" && (
            <div className="myOrderDetail-comment">
              <Button
                variant="outlined"
                color="secondary"
                size="medium"
                startIcon={<GradeIcon />}
                onClick={handleClickOpenComment}
              >
                ????nh gi??
              </Button>
            </div>
          )}
        </div>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleCloseComment}
        aria-labelledby="responsive-dialog-title"
      >
        <FormComment closeComment={handleCloseComment} />
      </Dialog>

      <Dialog
        fullScreen={fullScreen}
        open={cancel}
        onClose={handleCloseCancel}
        aria-labelledby="responsive-dialog-title"
      >
        <CancelOrder closeCancel={handleCloseCancel} myOrder={myOrder} />
      </Dialog>
    </>
  );
}

export default MyOrderDetail;
