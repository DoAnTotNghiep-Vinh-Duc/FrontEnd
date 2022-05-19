import { useEffect, useState } from "react";
import productAPI from "../api/productAPI";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [colorDetails, setColorDetails] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // setLoading(true);
        const result = await productAPI.getProductById(productId);
        setColorDetails(result.data.data.listProductDetail);
        setProduct(result.data.data.product);
      } catch (error) {
        console.log(error);
      }
      // setTimeout(() => {
      //   setLoading(false);
      // }, 300);
    })();
  }, [productId]);

  return { product, colorDetails };
}
