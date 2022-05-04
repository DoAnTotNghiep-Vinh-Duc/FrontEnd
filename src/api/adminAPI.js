import axiosClient from "./axiosClient";

const adminAPI = {
  statistical(typeRequest, beginDate, endDate) {
    const url = "/order/by-date";
    return axiosClient.post(url, typeRequest, beginDate, endDate);
  },

  async getAllProduct(params) {
    const url = "/product";
    const total = await axiosClient.get(url);

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
    const url = "/order/all-top-sell-product";
    return axiosClient.get(url);
  },

  async topCustomer(params) {
    const url = "/order/all-top-customer";
    const listCustomer = await axiosClient.get(url);

    const start = params._page * params._limit - params._limit;
    const end = params._page * params._limit - 1;
    return {
      data: listCustomer.data.data.slice(start, end + 1),
      pagination: {
        page: params._page,
        limit: params._limit,
        total: listCustomer.data.data.length,
      },
    };
  },

  async topProductLowQuantity(params) {
    const url = "/product/low-quantity";
    const listProduct = await axiosClient.get(url);

    const start = params._page * params._limit - params._limit;
    const end = params._page * params._limit - 1;

    return {
      data: listProduct.data.data.slice(start, end + 1),
      pagination: {
        page: params._page,
        limit: params._limit,
        total: listProduct.data.data.length,
      },
    };
  },

  addProduct(value) {
    const url = "/product";
    return axiosClient.post(url, {
      product: value.product,
      productDetails: value.productDetails,
    });
  },

  testImage(image) {
    const url = "/rate/upload-image";
    return axiosClient.post(url, image);
  },
};

export default adminAPI;
