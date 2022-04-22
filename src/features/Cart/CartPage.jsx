import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import useCart from "../../hooks/useCart";
import "./css/CartPage.scss";
import Product from "./Product/Product";

CartPage.propTypes = {};

function CartPage(props) {
  const History = useHistory();
  const match = useRouteMatch();

  const local = localStorage.getItem("account");
  const account = local && JSON.parse(local);

  let quantityTotal = 0;
  let totalOrder = 0;

  const { cart } = useCart(account?._id);

  const listProductCart = useSelector((state) => state.listProductCart);

  listProductCart.listProductCart.forEach((element) => {
    quantityTotal += element.quantity;
    totalOrder += element.quantity * element.priceDiscount;
  });

  const handleClickPayment = () => {
    History.push(`${match.url}/information`);
  };
  const handleClickContinue = () => {
    History.push("/");
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
                  <div className="cart-content-cart-header-check"></div>
                  <div className="cart-content-cart-header-container">
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
                    <span className="cart-content-cart-header-delete"></span>
                  </div>
                </div>

                {cart.listCartDetail?.map((element) => {
                  return (
                    <Product
                      product={element}
                      key={element.productDetail._id}
                    />
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
                      }).format(totalOrder)}
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
                      {listProductCart.listProductCart.length ? (
                        <>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(totalOrder + 30000)}
                        </>
                      ) : (
                        <>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(0)}
                        </>
                      )}
                    </div>
                  </div>
                  <button
                    className={`${"cart-content-payment-container-btnpayment"} ${
                      listProductCart.listProductCart.length ? "" : "empty"
                    }`}
                    disabled={
                      listProductCart.listProductCart.length ? false : true
                    }
                    onClick={handleClickPayment}
                  >
                    THANH TOÁN
                  </button>
                  <button
                    className="cart-content-payment-container-btnshoppping"
                    onClick={handleClickContinue}
                  >
                    Tiếp tục mua sắm
                  </button>
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
    </>
  );
}

export default CartPage;
