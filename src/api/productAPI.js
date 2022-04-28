import axiosClient from "./axiosClient";

const productAPI = {
  getNewProducts() {
    const url = "/product/new-product";
    return axiosClient.get(url);
  },

  getProductById(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },

  async getProductWithType(params) {
    const url = `/product/types?listType=${JSON.stringify(params.listType)}`;
    const total = await axiosClient.get(url, { params: params.listType });

    const start = params._page * params._limit - params._limit;
    const end = params._page * params._limit - 1;
    return {
      data: total.data.data.slice(start, end + 1),
      pagination: {
        page: params._page,
        limit: params._limit,
        total: total.data.data.length,
      },
    };
  },

  getBestSellerProduct() {
    const url = "/product/top-sell";
    return axiosClient.get(url);
  },

  getSaleProduct() {
    const url = "/product/on-sell";
    return axiosClient.get(url);
  },
};
export default productAPI;
