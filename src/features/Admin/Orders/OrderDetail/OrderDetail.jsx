import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CancelIcon from "@material-ui/icons/Cancel";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import adminAPI from "../../../../api/adminAPI";
import a from "../../../../assets/product/PhiHanhGia-blue.jpg";
import Header from "../../components/Header/Header";
import NavBars from "../../components/NavBars/NavBars";
import "./OrderDetail.scss";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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

  const {
    params: { orderId },
  } = useRouteMatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getOrderById(orderId);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [orderId]);

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
              Mã đơn hàng:<span>#95461</span>
            </div>
            <div className="admin-orderDetail-infor-bot">
              <div className="admin-orderDetail-infor-card">
                <div className="admin-orderDetail-infor-card-title">
                  Khách hàng
                </div>
                <div className="admin-orderDetail-infor-card-content">
                  <p className="admin-orderDetail-infor-card-content-text">
                    Đỗ Đạt Đức
                  </p>
                  <p className="admin-orderDetail-infor-card-content-text">
                    25 Khu Phố 3A, Phường Thới Hòa, huyện Bến Cát, tỉnh Bình
                    Dương
                  </p>
                  <p className="admin-orderDetail-infor-card-content-text">
                    0359806602
                  </p>
                </div>
              </div>
              <div className="admin-orderDetail-infor-card">
                <div className="admin-orderDetail-infor-card-title">
                  Giao tới
                </div>
                <div className="admin-orderDetail-infor-card-content">
                  <p className="admin-orderDetail-infor-card-content-text">
                    Đỗ Đạt Đức
                  </p>
                  <p className="admin-orderDetail-infor-card-content-text">
                    25 Khu Phố 3A, Phường Thới Hòa, huyện Bến Cát, tỉnh Bình
                    Dương
                  </p>
                </div>
              </div>
              <div className="admin-orderDetail-infor-card">
                <div className="admin-orderDetail-infor-card-title">
                  Phương thức thanh toán
                </div>
                <div className="admin-orderDetail-infor-card-content">
                  <p className="admin-orderDetail-infor-card-content-text">
                    Thanh toán khi nhận hàng
                  </p>
                </div>
              </div>
              <div className="admin-orderDetail-infor-card">
                <div className="admin-orderDetail-infor-card-title">
                  Ngày đặt hàng
                </div>
                <div className="admin-orderDetail-infor-card-content">
                  <p className="admin-orderDetail-infor-card-content-text">
                    6:10PM, Chủ nhật, 08/05/2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="admin-orderDetail-status">
            <div className="admin-orderDetail-status-title">
              TÌNH TRẠNG ĐƠN HÀNG
            </div>
            <div className="admin-orderDetail-status-body">
              <div className="admin-orderDetail-status-body-card">
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
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell>1</StyledTableCell>
                      <StyledTableCell>
                        <div className="admin-orderDetail-table-image">
                          <img src={a} alt="" />
                        </div>
                      </StyledTableCell>
                      <StyledTableCell>Áo thun biểu cảm vui vẻ</StyledTableCell>
                      <StyledTableCell>369.000 đ</StyledTableCell>
                      <StyledTableCell>5</StyledTableCell>
                      <StyledTableCell>1.265.000 đ</StyledTableCell>
                    </StyledTableRow>
                  ))}
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
                1.054.000 đ
              </div>
            </div>
            <div className="admin-orderDetail-table-footer-subtotal">
              <div className="admin-orderDetail-table-footer-subtotal-title">
                PHÍ VẬN CHUYỂN
              </div>
              <div className="admin-orderDetail-table-footer-subtotal-cost">
                30.000 đ
              </div>
            </div>
            <div className="admin-orderDetail-table-footer-total">
              <div className="admin-orderDetail-table-footer-total-title">
                TỔNG
              </div>
              <div className="admin-orderDetail-table-footer-total-cost">
                1.954.000 đ
              </div>
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
              >
                CHẤP NHẬN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
