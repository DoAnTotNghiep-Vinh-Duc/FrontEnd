import { useEffect, useState } from "react";
import productAPI from "../api/productAPI";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productAPI.getProductById(productId);
        console.log(result.data.data.listProductDetail);
        setProduct(result.data.data.product);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}
