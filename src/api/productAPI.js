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
    const newParams = { ...params };
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 1);

    delete newParams._page;

    const url = `/product/types?listType=${JSON.stringify(params.listType)}`;
    const productList = await axiosClient2.post(url, { params: newParams });
    return {
      data: productList.data.data,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: productList.data.data.length,
      },
    };
  },
};
export default productAPI;
