import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import cartAPI from "../api/cartAPI";

export default function useCart() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    (async () => {
      try {
        if (Cookies.get("token")) {
          const response = await cartAPI.getCartByAccountId();
          setCart(response.data.data);
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { cart };
}
