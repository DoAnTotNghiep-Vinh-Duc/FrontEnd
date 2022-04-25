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
    const url2 = `/product/types-with-limit-page/${params._page}/${
      params._limit
    }?listType=${JSON.stringify(params.listType)}`;

    const total = await axiosClient.get(url, { params: params.listType });

    const productList = await axiosClient.get(url2, {
      params: params.listType,
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
