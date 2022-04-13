import { useEffect, useState } from "react";
import cartAPI from "../api/cartAPI";

export default function useCart(accountId) {
  const [cart, setCart] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await cartAPI.getCartByAccountId(accountId);
        setCart(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [accountId]);

  return { cart };
}
