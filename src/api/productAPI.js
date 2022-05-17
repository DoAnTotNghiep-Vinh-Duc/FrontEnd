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

  async getProductWithFilters(data) {
    const url = "/product/filter-product";
    const total = await axiosClient.post(url, {
      listType: data.listType,
      optionSort: data.filters.optionSort,
      optionPrice: data.filters.optionPrice,
      optionSizes: data.filters.optionSizes,
      optionColors: data.filters.optionColors,
      optionRates: data.filters.optionRates,
      keySearch: data.listSearch,
    });

    const start =
      data.filters._page * data.filters._limit - data.filters._limit;
    const end = data.filters._page * data.filters._limit - 1;
    return {
      data: total.data.data.slice(start, end + 1),
      pagination: {
        page: data.filters._page,
        limit: data.filters._limit,
        total: total.data.data.length,
      },
    };
  },

  async getProductNameFind(filters, listSearch) {
    console.log(filters);
    console.log(listSearch);
    const url = `/product/find/${listSearch}`;
    const total = await axiosClient.get(url);
    console.log(total);
    const start = filters._page * filters._limit - filters._limit;
    const end = filters._page * filters._limit - 1;
    return {
      data: total.data.data.slice(start, end + 1),
      pagination: {
        page: filters._page,
        limit: filters._limit,
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

  getSortPointProduct() {
    const url = "/product/sort-point";
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
