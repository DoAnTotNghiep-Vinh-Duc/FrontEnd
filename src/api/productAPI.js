import axiosClient2 from "./axiosClient2";

const productAPI = {
  getNewProducts() {
    const url = "/product/new-product";
    return axiosClient2.get(url);
  },

  getProductById(id) {
    const url = `/product/${id}`;
    return axiosClient2.get(url);
  },

  async getProductWithType(params) {
    const url = `/product/types?listType=${JSON.stringify(params.listType)}`;
    const url2 = `/product/types-with-limit-page?listType=${JSON.stringify(
      params.listType
    )}`;

    const total = await axiosClient2.post(url, { params: params });
    const productList = await axiosClient2.post(url2, {
      params: params,
      page: params._page,
      limit: params._limit,
    });
    return {
      data: productList.data.data,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: total.data.data.length,
      },
    };
  },
};
export default productAPI;
