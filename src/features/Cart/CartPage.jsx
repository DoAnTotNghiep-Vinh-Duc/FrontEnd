import { Dialog, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import cartAPI from "../../api/cartAPI";
import product2 from "../../assets/product/product2.jpg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import useCart from "../../hooks/useCart";
import RemoveItemFromCart from "../RemoveItemFromCart/RemoveItemFromCart";
import "./css/CartPage.scss";

CartPage.propTypes = {};

function CartPage(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const match = useRouteMatch();
  const local = localStorage.getItem("account");
  const account = local && JSON.parse(local);
  let quantityTotal = 0;

  const [open, setOpen] = React.useState(false);
  const [itemRemove, setItemRemove] = useState({});

  const { cart } = useCart(account._id);

  const handleIncreaseQuantity = (element) => {
    (async () => {
      try {
        const response = await cartAPI.increaseQuantity({
          accountId: account._id,
          productDetailId: element.productDetail,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const handleDecreaseQuantity = (element) => {
    (async () => {
      try {
        const response = await cartAPI.decreaseQuantity({
          accountId: account._id,
          productDetailId: element.productDetail,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const handleClickOpen = (element) => {
    setOpen(true);
    setItemRemove(element);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="cart">
        <Header />
        <Menu />
        <div className="cart-title">
          <div className="title">
            <span className="cart-title-cart">Giỏ hàng</span>
            <span className="cart-title-next">{">"}</span>
            <span className="cart-title-infor">Thông tin</span>
            <span className="cart-title-next">{">"}</span>
            <span className="cart-title-payment">Thanh toán</span>
            <span className="cart-title-next">{">"}</span>
            <span className="cart-title-bill">Đơn hàng</span>
          </div>
        </div>
        <div className="cart-content">
          {cart.listCartDetail?.length ? (
            <>
              <div className="cart-content-cart">
                <div className="cart-content-cart-header">
                  <span className="cart-content-cart-header-productname">
                    Sản phẩm
                  </span>
                  <span className="cart-content-cart-header-price">
                    Đơn giá
                  </span>
                  <span className="cart-content-cart-header-quantity">
                    Số lượng
                  </span>
                  <span className="cart-content-cart-header-total">Tổng</span>
                </div>

                {cart.listCartDetail?.map((element) => {
                  quantityTotal += element.quantity;
                  return (
                    <div
                      className="cart-content-cart-product"
                      key={element.productDetail}
                    >
                      <div className="cart-content-cart-product-image">
                        <img src={product2} alt="" />
                      </div>
                      <div className="cart-content-cart-product-infor">
                        <div className="cart-content-cart-product-infor-name">
                          AIRism Cotton Áo Thun Chống UV Cổ Tròn Dài Tay
                        </div>
                        <div className="cart-content-cart-product-infor-color">
                          Màu sắc: Trắng
                        </div>
                        <div className="cart-content-cart-product-infor-size">
                          Kích cỡ: M
                        </div>
                      </div>
                      <div className="cart-content-cart-product-price">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(element.price)}
                      </div>
                      <div className="cart-content-cart-product-quantity">
                        <i
                          className="bi bi-dash-lg"
                          onClick={() => handleDecreaseQuantity(element)}
                        ></i>
                        <div className="cart-content-cart-product-quantity-number">
                          {element.quantity}
                        </div>
                        <i
                          className="bi bi-plus-lg"
                          onClick={() => handleIncreaseQuantity(element)}
                        ></i>
                      </div>
                      <div className="cart-content-cart-product-total">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(element.total)}
                      </div>
                      <div className="cart-content-cart-product-delete">
                        <i
                          className="fas fa-times"
                          onClick={() => handleClickOpen(element)}
                        ></i>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="cart-content-payment">
                <div className="cart-content-payment-container">
                  <div className="cart-content-payment-container-title">
                    TỔNG ĐƠN HÀNG {quantityTotal} SẢN PHẨM
                  </div>
                  <div className="cart-content-payment-container-productprice">
                    <div className="cart-content-payment-container-productprice-title">
                      Thành tiền
                    </div>
                    <div className="cart-content-payment-container-productprice-price">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(cart.total)}
                    </div>
                  </div>
                  <div className="cart-content-payment-container-vattitle">
                    Đã bao gồm thuế giá trị gia tăng
                  </div>
                  <div className="cart-content-payment-container-ship">
                    <div className="cart-content-payment-container-ship-title">
                      Phí vận chuyển
                    </div>
                    <div className="cart-content-payment-container-ship-price">
                      30.000
                    </div>
                  </div>
                  <div className="cart-content-payment-container-total">
                    <div className="cart-content-payment-container-total-title">
                      TỔNG ĐƠN ĐẶT HÀNG
                    </div>
                    <div className="cart-content-payment-container-total-price">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(cart.total + 30000)}
                    </div>
                  </div>
                  <div className="cart-content-payment-container-btnpayment">
                    <Link to={`${match.url}/information`}>THANH TOÁN</Link>
                  </div>
                  <div className="cart-content-payment-container-btnshoppping">
                    <Link to="/">Tiếp tục mua sắm</Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p style={({ textAlign: "center" }, { fontSize: "20px" })}>
              Hiện tại không có sản phẩm nào trong giỏ hàng
            </p>
          )}
        </div>
        <Footer />
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <RemoveItemFromCart
          closeRemoveItem={handleClose}
          productDetail={itemRemove}
        />
      </Dialog>
    </>
  );
}

export default CartPage;
