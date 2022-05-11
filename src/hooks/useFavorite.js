import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import favoriteAPI from "../api/favoriteAPI";
import { ACTIONS } from "../context/actions";
import { GlobalContext } from "../context/context";

export default function useFavorite() {
  const [listFavorite, setListFavorite] = useState([]);
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      try {
        if (Cookies.get("token")) {
          const response = await favoriteAPI.getAll();
          dispatch({
            type: ACTIONS.dataFavorite,
            payload: response.data.data.listProduct,
          });
          setListFavorite(response.data.data.listProduct);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return { listFavorite };
}
