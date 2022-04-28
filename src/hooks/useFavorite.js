import { useEffect, useState } from "react";
import favoriteAPI from "../api/favoriteAPI";

export default function useFavorite() {
  const [listFavorite, setListFavorite] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await favoriteAPI.getAll();
        setListFavorite(response.data.data.listProduct);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return { listFavorite };
}
