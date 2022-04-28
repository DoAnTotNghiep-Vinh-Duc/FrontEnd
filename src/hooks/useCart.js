import { useEffect, useState } from "react";
import cartAPI from "../api/cartAPI";

export default function useCart() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await cartAPI.getCartByAccountId();
        setCart(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { cart };
}
