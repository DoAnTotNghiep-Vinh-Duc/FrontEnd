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

  async getProductWithFilters(value) {
    const url = "/product/filter-product";
    const total = await axiosClient.post(url, value);

    const start = value._page * value._limit - value._limit;
    const end = value._page * value._limit - 1;
    return {
      data: total.data.data.slice(start, end + 1),
      pagination: {
        page: value._page,
        limit: value._limit,
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

  async getAllRateByProductId({ filters, productId }) {
    const url = `/rate/all/${productId}`;
    const total = await axiosClient.get(url);

    const start = filters._page * filters._limit - filters._limit;
    const end = filters._page * filters._limit - 1;
    return {
      dataSummary: total.data.data.rateAndCount,
      dataPercent: total.data.data.ratePercent,
      dataRates: total.data.data.rates.slice(start, end + 1),
      pagination: {
        page: filters._page,
        limit: filters._limit,
        total: total.data.data.rates.length,
      },
    };
  },

  rateProduct(value) {
    const url = "/rate";
    return axiosClient.post(url, value);
  },
};
export default productAPI;
