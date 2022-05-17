import { TextField } from "@material-ui/core";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import queryString from "query-string";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import product_female from "../../data/product_female.json";
import product_male from "../../data/product_male.json";
import useCart from "../../hooks/useCart";
import useFavorite from "../../hooks/useFavorite";
import "./menu.scss";

Menu.propTypes = {};

function Menu(props) {
  const { cart } = useCart();
  const { listFavorite } = useFavorite();

  const { state } = useContext(GlobalContext);
  const userLogIn = useSelector((state) => state.user.currentUser);
  const History = useHistory();

  const [scroll, setScroll] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -160) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  const handleClickCart = () => {
    if (userLogIn) {
      History.push("/cart");
    } else {
      History.push("/auth");
    }
  };

  const handleClickFavorite = () => {
    if (userLogIn) {
      History.push("/favorites");
    } else {
      History.push("/auth");
    }
  };

  const handleClickProductMale = () => {
    History.push({
      pathname: "/products",
      search: queryString.stringify({ listType: ["nam"] }),
    });
  };
  const handleClickProductMaleLong = () => {
    History.push({
      pathname: "/products",
      search: queryString.stringify({ listType: ["nam", "tay dài"] }),
    });
  };
  const handleClickProductMaleShort = () => {
    History.push({
      pathname: "/products",
      search: queryString.stringify({ listType: ["nam", "tay ngắn"] }),
    });
  };
  const handleClickProductMaleLongDetails = (element) => {
    History.push({
      pathname: "/products",
      search: queryString.stringify({
        listType: ["nam", "tay dài", `${element.value}`],
      }),
    });
  };
  const handleClickProductMaleShortDetails = (element) => {
    History.push({
      pathname: "/products",
      search: queryString.stringify({
        listType: ["nam", "tay ngắn", `${element.value}`],
      }),
    });
  };

  const handleClickProductFeMale = () => {
    History.push({
      pathname: "/products",
      search: queryString.stringify({ listType: ["nữ"] }),
    });
  };
  const handleClickProductFeMaleLong = () => {
    History.push({
      pathname: "/products",
      search: queryString.stringify({ listType: ["nữ", "tay dài"] }),
    });
  };
  const handleClickProductFeMaleLongDetail = (element) => {
    History.push({
      pathname: "/products",
      search: queryString.stringify({
        listType: ["nữ", "tay dài", `${element.value}`],
      }),
    });
  };
  const handleClickProductFeMaleShort = () => {
    History.push({
      pathname: "/products",
      search: queryString.stringify({ listType: ["nữ", "tay ngắn"] }),
    });
  };
  const handleClickProductFeMaleShortDetail = (element) => {
    History.push({
      pathname: "/products",
      search: queryString.stringify({
        listType: ["nữ", "tay ngắn", `${element.value}`],
      }),
    });
  };

  const handleChangeSearch = (event) => {
    setTextSearch(event.target.value);
  };

  const handleClickSearch = () => {
    History.push({
      pathname: "/products",
      search: queryString.stringify({
        search: textSearch,
      }),
    });
  };

  return (
    <div className={`${"menu"} ${scroll ? "menu-scroll" : ""}`}>
      <div className="menu-left">
        <ul className="list_menu">
          <li className="home_menu">
            <a href="\" className="h">
              Trang chủ
              <i className="bi bi-chevron-down"></i>
            </a>
          </li>
          <li className="product_menu">
            <a onClick={handleClickProductMale}>
              Nam<i className="bi bi-chevron-down"></i>
            </a>
            <div className="dropdown_product">
              <ul className="shoplayout">
                <li>
                  <a
                    className="title_product"
                    onClick={handleClickProductMaleLong}
                  >
                    Tay dài
                  </a>
                </li>
                {product_male.map((element, index) => {
                  return (
                    <li key={index}>
                      <a
                        onClick={() =>
                          handleClickProductMaleLongDetails(element)
                        }
                      >
                        {element.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul className="productlayout">
                <li>
                  <a
                    className="title_product"
                    onClick={handleClickProductMaleShort}
                  >
                    Tay ngắn
                  </a>
                </li>
                {product_male.map((element, index) => {
                  return (
                    <li key={index}>
                      <a
                        onClick={() =>
                          handleClickProductMaleShortDetails(element)
                        }
                      >
                        {element.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="product_menu">
            <a onClick={handleClickProductFeMale}>
              Nữ<i className="bi bi-chevron-down"></i>
            </a>
            <div className="dropdown_product">
              <ul className="shoplayout">
                <li>
                  <a
                    className="title_product"
                    onClick={handleClickProductFeMaleLong}
                  >
                    Tay dài
                  </a>
                </li>
                {product_female.map((element, index) => {
                  return (
                    <li key={index}>
                      <a
                        onClick={() =>
                          handleClickProductFeMaleLongDetail(element)
                        }
                      >
                        {element.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul className="productlayout">
                <li>
                  <a
                    className="title_product"
                    onClick={handleClickProductFeMaleShort}
                  >
                    Tay ngắn
                  </a>
                </li>
                {product_female.map((element, index) => {
                  return (
                    <li key={index}>
                      <a
                        onClick={() =>
                          handleClickProductFeMaleShortDetail(element)
                        }
                      >
                        {element.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="knowDress_menu">
            <a href="\products">
              Liên hệ<i className="bi bi-chevron-down"></i>
            </a>
            <div className="dropdown_knowDress">
              <ul>
                <li>
                  <a href="\products">Về chúng tôi</a>
                </li>
                <li>
                  <a href="\products">Liên hệ</a>
                </li>
                <li>
                  <a href="\products">Khách hàng hài lòng 100%</a>
                </li>
                <li>
                  <a href="\products">Tài khoản của tôi</a>
                </li>
              </ul>
            </div>
          </li>
          {userLogIn ? (
            <>
              {userLogIn.role === "Admin" && (
                <li>
                  <a href="/admin">Admin</a>
                </li>
              )}
            </>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="menu-center">
        <div className="logo">Lemon</div>
      </div>
      <div className="menu-right">
        <div className="menu-right-search">
          <TextField
            id="standard-search"
            label="Tìm kiếm"
            type="search"
            size="small"
            fullWidth
            value={textSearch}
            onChange={handleChangeSearch}
          />
          <i className="fas fa-search" onClick={handleClickSearch}></i>
        </div>
        <div className="menu-right-wishlist" onClick={handleClickFavorite}>
          <i className="bi bi-suit-heart"></i>
          <span>{state.dataFavorite.length ?? 0}</span>
        </div>
        <div className="menu-right-bag" onClick={handleClickCart}>
          <i className="bi bi-handbag"></i>
          <span>{state.dataCart?.listCartDetail?.length ?? 0}</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
