import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LocalPrintshopIcon from "@material-ui/icons/LocalPrintshop";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import adminAPI from "../../../../api/adminAPI";
import "./PrintOrder.scss";

PrintOrder.propTypes = {};

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

function PrintOrder(props) {
  const classes = useStyles();

  const {
    params: { orderId },
  } = useRouteMatch();

  const [orderDetail, setOrderDetail] = useState({});

  const handleClose = () => {
    props.closePrint(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getOrderById(orderId);
        setOrderDetail(response.data.data.order[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [orderId]);

  class ComponentToPrint extends React.Component {
    render() {
      return (
        <div className="print-order">
          <div className="print-order-company">
            <div className="print-order-company-left">
              <div className="print-order-company-text">Tên cửa hàng</div>
              <div className="print-order-company-text">Địa chỉ</div>
              <div className="print-order-company-text">Số điện thoại</div>
            </div>
            <div className="print-order-company-right">
              <div className="print-order-company-text">: LemonShop</div>
              <div className="print-order-company-text">
                : 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP. Hồ Chí Minh
              </div>
              <div className="print-order-company-text">: 0359 806 666</div>
            </div>
          </div>
          <div className="print-order-title">
            <div className="print-order-title-text">PHIẾU GIAO HÀNG</div>
            <div className="print-order-title-date">
              <span>
                {moment(new Date()).format("LTS")} -{" "}
                {moment(new Date()).format("L")}
              </span>
            </div>
          </div>
          <div className="print-order-logo">
            <p>Lemon</p>
          </div>
          <div className="print-order-detail">
            <div className="print-order-detail-side">
              <div className="print-order-detail-side-text">
                <label htmlFor="">Đến: </label>
                <span>{orderDetail.name}</span>
              </div>
              <div className="print-order-detail-side-text">
                <label htmlFor="">Địa chỉ: </label>
                <span>
                  {orderDetail.street}, {orderDetail.ward},{" "}
                  {orderDetail.district}, {orderDetail.city}
                </span>
              </div>
              <div className="print-order-detail-side-text">
                <label htmlFor="">Số điện thoại: </label>
                <span>{orderDetail.account?.information.phone}</span>
              </div>
            </div>
            <div className="print-order-detail-side">
              <div className="print-order-detail-side-text">
                <label htmlFor="">Mã hóa đơn: </label>
                <span>{orderDetail._id}</span>
              </div>
              <div className="print-order-detail-side-text">
                <label htmlFor="">Ngày đặt hàng: </label>
                <span>
                  {moment(orderDetail.createdAt).format("LTS")} -{" "}
                  {moment(orderDetail.createdAt).format("L")}
                </span>
              </div>
            </div>
          </div>
          <div className="print-table-title">CHI TIẾT HÓA ĐƠN</div>
          <div className="print-order-table">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell width="5%">#</StyledTableCell>
                    <StyledTableCell width="50%">SẢN PHẨM</StyledTableCell>
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
                          {product.productDetail.product.name}
                          <p className="print-table-size">
                            Size: {product.productDetail.size}
                          </p>
                          <p className="print-table-size">
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
          <div className="print-table-footer">
            <div className="print-table-footer-subtotal">
              <div className="print-table-footer-subtotal-title">
                THÀNH TIỀN
              </div>
              <div className="print-table-footer-subtotal-cost">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(orderDetail.subTotal)}
              </div>
            </div>
            <div className="print-table-footer-subtotal">
              <div className="print-table-footer-subtotal-title">
                PHÍ VẬN CHUYỂN
              </div>
              <div className="print-table-footer-subtotal-cost">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(30000)}
              </div>
            </div>
            <div className="print-table-footer-total">
              <div className="print-table-footer-total-title">TỔNG</div>
              <div className="print-table-footer-total-cost">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(orderDetail.total)}
              </div>
            </div>
          </div>
          <div className="print-order-dateSignal">
            <span>Ngày ........ </span>
            <span>tháng ........ </span>
            <span>năm 2022 </span>
          </div>
          <div className="print-order-Signal">
            <div className="print-order-Signal-customer">Người nhận hàng</div>
            <div className="print-order-Signal-shipper">Người giao hàng</div>
          </div>
        </div>
      );
    }
  }

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <ComponentToPrint ref={componentRef} />
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Đóng
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="medium"
          className={classes.button}
          startIcon={<LocalPrintshopIcon />}
          onClick={handlePrint}
        >
          In hóa đơn
        </Button>
      </DialogActions>
    </>
  );
}

export default PrintOrder;
