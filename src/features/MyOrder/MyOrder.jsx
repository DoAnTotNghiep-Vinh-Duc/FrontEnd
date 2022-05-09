import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import orderAPI from "../../api/orderAPI";
import NavbarUser from "../../components/NavBarUser/NavbarUser";
import "./MyOrder.scss";

MyOrder.propTypes = {};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function MyOrder(props) {
  const classes = useStyles();
  const History = useHistory();
  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await orderAPI.getAllOrderByAccount();
        setListOrder(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleClickViewDetail = (order) => {
    History.push(`${History.location.pathname}/${order._id}`);
  };

  return (
    <div className="myOrder">
      <NavbarUser />
      <div className="myOrder-container">
        <div className="myOrder-title">
          <div className="myOrder-title-left">
            <p>Lịch sử mua hàng</p>
          </div>
          <div className="myOrder-title-right">
            <Link className="myOrder-title-right-home" to="/">
              Trang chủ
            </Link>
            <i className="bi bi-chevron-right"></i>
            <p className="myOrder-title-right-order">Đơn hàng</p>
          </div>
        </div>
        <div className="myOrder-search">
          <input type="text" placeholder="Nhập mã đơn hàng..." />
          <div className="myOrder-search-icon">
            <i className="bi bi-search"></i>
          </div>
        </div>
        <div className="myOrder-listOrder">
          <div className="myOrder-listOrder-table">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell width="5%">STT</TableCell>
                    <TableCell width="5%">ID</TableCell>
                    <TableCell width="15%">Người nhận</TableCell>
                    <TableCell width="10%">Số sản phẩm</TableCell>
                    <TableCell width="10%">Tổng tiền</TableCell>
                    <TableCell width="20%">Phương thức</TableCell>
                    <TableCell width="15%">Trạng thái</TableCell>
                    <TableCell width="12%">Ngày đặt hàng</TableCell>
                    <TableCell width="8%"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listOrder.map((order, index) => {
                    return (
                      <TableRow key={order._id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          #
                          {order._id.substring(
                            order._id.length - 5,
                            order._id.length
                          )}
                        </TableCell>
                        <TableCell>{order.name}</TableCell>
                        <TableCell>{order.quantity}</TableCell>
                        <TableCell>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(order.total)}
                        </TableCell>
                        <TableCell>
                          {order.typePayment === "CASH"
                            ? "Thanh toán khi nhận hàng"
                            : "Thẻ VISA"}
                        </TableCell>
                        <TableCell>
                          <div
                            className={`${"myOrder-listOrder-table-status"} ${
                              order.status
                            }`}
                          >
                            {order.status === "HANDLING"
                              ? "Chờ xử lý"
                              : order.status === "CANCELED"
                              ? "Đã bị hủy"
                              : order.status === "DONE"
                              ? "Hoàn thành"
                              : order.status === "DELIVERING"
                              ? "Đang vận chuyển"
                              : ""}
                          </div>
                        </TableCell>
                        <TableCell>
                          {moment(order.createdAt).format("L")}
                        </TableCell>
                        <TableCell>
                          <button
                            className="myOrder-listOrder-table-view"
                            onClick={() => handleClickViewDetail(order)}
                          >
                            Xem
                          </button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
