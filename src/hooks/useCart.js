import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import cartAPI from "../api/cartAPI";
import { ACTIONS } from "../context/actions";
import { GlobalContext } from "../context/context";

export default function useCart() {
  const [cart, setCart] = useState({});
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      try {
        if (Cookies.get("token")) {
          const response = await cartAPI.getCartByAccountId();
          dispatch({
            type: ACTIONS.dataCart,
            payload: response.data.data,
          });
          setCart(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return { cart };
}
