import axiosClient from "./axiosClient";
import axiosClient2 from "./axiosClient2";

const productAPI = {
  async getAll(params) {
    const newParams = { ...params };
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 50);

    delete newParams._page;

    const productList = await axiosClient.get("/products", {
      params: newParams,
    });
    const count = await axiosClient.get("/products/count", {
      params: newParams,
    });

    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },
  getProducts() {
    const url = "/product";
    return axiosClient2.get(url);
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getProductById(id) {
    const url = `/product/${id}`;
    return axiosClient2.get(url);
  },
};

export default productAPI;
