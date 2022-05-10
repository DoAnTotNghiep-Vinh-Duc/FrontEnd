import { useEffect, useState } from "react";
import adminAPI from "../api/adminAPI";

export default function useProductDetailAdmin(productId) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colorDetails, setColorDetails] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await adminAPI.getProductById(productId);
        setColorDetails(result.data.data.listProductDetail);
        setProduct(result.data.data.product);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [productId]);

  return { product, loading, colorDetails };
}
