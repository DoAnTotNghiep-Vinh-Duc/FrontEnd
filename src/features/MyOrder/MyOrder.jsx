import React, { useEffect, useState } from "react";
import NavbarUser from "../../components/NavBarUser/NavbarUser";
import "./MyOrder.scss";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import orderAPI from "../../api/orderAPI";

MyOrder.propTypes = {};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function MyOrder(props) {
  const classes = useStyles();
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

  console.log(listOrder);

  return (
    <div className="myOrder">
      <NavbarUser />
      <div className="myOrder-container">
        <div className="myOrder-title">
          <div className="myOrder-title-left">
            <p>Lịch sử mua hàng</p>
          </div>
          <div className="myOrder-title-right">
            <p className="myOrder-title-right-home">Trang chủ</p>
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
                    <TableCell width="10%">ID</TableCell>
                    <TableCell width="20%">Người nhận</TableCell>
                    <TableCell width="10%">Số sản phẩm</TableCell>
                    <TableCell width="10%">Tổng tiền</TableCell>
                    <TableCell width="10%">Phương thức</TableCell>
                    <TableCell width="15%">Trạng thái</TableCell>
                    <TableCell width="15%">Ngày đặt hàng</TableCell>
                    <TableCell width="5%">...</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listOrder.map((order, index) => {
                    console.log(order);
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
                        <TableCell>{order.total}</TableCell>
                        {/* <TableCell>{order.protein}</TableCell>
                        <TableCell>{order.protein}</TableCell>
                        <TableCell>{order.protein}</TableCell>
                        <TableCell>{order.protein}</TableCell> */}
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
