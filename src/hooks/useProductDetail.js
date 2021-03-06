import { useEffect, useState } from "react";
import productAPI from "../api/productAPI";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [colorDetails, setColorDetails] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await productAPI.getProductById(productId);
        setColorDetails(result.data.data.listProductDetail);
        setProduct(result.data.data.product);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [productId]);

  return { product, colorDetails };
}
