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
import icon_order from "../../assets/images/icon-order.jpg";
import NavbarUser from "../../components/NavBarUser/NavbarUser";
import "./MyOrder.scss";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import a from "../../assets/product/AiryWTS-black.jpg";

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
  const [value, setValue] = useState("ALL");

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        {listOrder.length ? (
          <>
            {/* <div className="myOrder-listOrder">
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
            </div> */}
            <div className="myOrder-listOrder-title">
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab
                  value="ALL"
                  label="tất cả"
                  style={{ minWidth: "20%", fontSize: "12px" }}
                />
                <Tab
                  value="HANDLING"
                  label="chờ xử lí"
                  style={{ minWidth: "20%", fontSize: "12px" }}
                />
                <Tab
                  value="DELIVERING"
                  label="đang vận chuyển"
                  style={{ minWidth: "20%", fontSize: "12px" }}
                />
                <Tab
                  value="DONE"
                  label="đã giao"
                  style={{ minWidth: "20%", fontSize: "12px" }}
                />
                <Tab
                  value="CANCELED"
                  label="đã hủy"
                  style={{ minWidth: "20%", fontSize: "12px" }}
                />
              </Tabs>
            </div>
            <div className="myOrder-listOrder-title-list">
              {listOrder.map((order) => {
                return (
                  <div
                    className="myOrder-listOrder-title-list-order"
                    key={order._id}
                  >
                    <div className="myOrder-listOrder-title-list-order-header">
                      <div className="myOrder-listOrder-title-list-order-header-id">
                        <p>
                          Mã hóa đơn: <b>123</b>
                        </p>
                      </div>
                      <div className="myOrder-listOrder-title-list-order-header-status">
                        <div
                          className={`${"myOrder-listOrder-title-list-order-header-status-container"} ${
                            order.status
                          }`}
                        >
                          <p>
                            {order.status === "DONE"
                              ? "Đã hoàn tất"
                              : order.status === "CANCELED"
                              ? "Đã bị hủy"
                              : order.status === "DELIVERING"
                              ? "Đang vận chuyển"
                              : order.status === "HANDLING"
                              ? "Chờ xử lí"
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="myOrder-listOrder-title-list-order-product">
                      <div className="myOrder-listOrder-title-list-order-product-image">
                        <img src={a} alt="" />
                      </div>
                      <div className="myOrder-listOrder-title-list-order-product-infor">
                        <div className="myOrder-listOrder-title-list-order-product-infor-name">
                          fdffef
                        </div>
                        <div className="myOrder-listOrder-title-list-order-product-infor-size">
                          Màu: êfegrg
                        </div>
                        <div className="myOrder-listOrder-title-list-order-product-infor-size">
                          Kích cỡ: grfgrgd
                        </div>
                        <div className="myOrder-listOrder-title-list-order-product-infor-name">
                          x2
                        </div>
                      </div>
                      <div className="myOrder-listOrder-title-list-order-product-price">
                        <span className="myOrder-listOrder-title-list-order-product-price-main">
                          150.000 đ
                        </span>
                        <span className="myOrder-listOrder-title-list-order-product-price-sale">
                          150.000 đ
                        </span>
                      </div>
                    </div>

                    <div className="myOrder-listOrder-title-list-order-footer">
                      <div className="myOrder-listOrder-title-list-order-footer-btn">
                        <button onClick={() => handleClickViewDetail(order)}>
                          Xem chi tiết
                        </button>
                      </div>
                      <div className="myOrder-listOrder-title-list-order-footer-total">
                        <i className="bi bi-coin"></i>
                        Tổng số tiền:{" "}
                        <span>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(order.total)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="myOrder-listOrder-notfound">
              <img src={icon_order} alt="" />
              <p>Chưa có đơn hàng</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MyOrder;
