import axiosClient from "./axiosClient";

const adminAPI = {
  statistical(typeRequest, beginDate, endDate) {
    const url = "/admin/order/by-date";
    return axiosClient.post(url, typeRequest, beginDate, endDate);
  },

  // product
  async getAllProduct(params) {
    const url = "/admin/product";
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
    const url = "/admin/product/top-sell";
    return axiosClient.get(url);
  },
  async topProductLowQuantity(params) {
    const url = "/admin/product/low-quantity";
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
    const url = "/admin/product";
    return axiosClient.post(url, value);
  },
  updateProduct(value) {
    const url = `/admin/product/${value.id}`;
    return axiosClient.put(url, value.fd);
  },
  getProductById(id) {
    const url = `/admin/product/${id}`;
    return axiosClient.get(url);
  },
  stopSellProduct(id) {
    const url = `/admin/product/stop-selling-product/${id}`;
    return axiosClient.put(url);
  },
  continueSellProduct(id) {
    const url = `/admin/product/resale-product/${id}`;
    return axiosClient.put(url);
  },

  testImage(image) {
    const url = "/rate/upload-image";
    return axiosClient.post(url, image);
  },

  // customer
  async topCustomer(params) {
    const url = "/admin/order/all-top-customer";
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
  async getAllCustomer(params) {
    const url = "/admin/account";
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
  blockCustomer(accountId) {
    const url = "/admin/account/close-account";
    return axiosClient.post(url, { accountId });
  },
  unBlockCustomer(accountId) {
    const url = "/admin/account/active-account";
    return axiosClient.post(url, { accountId });
  },
  getOrderByCustomerId(accountId, statusOrder) {
    const url = "/admin/order/get-user-order";
    return axiosClient.get(url, {
      params: {
        accountId,
        statusOrder,
      },
    });
  },

  // order
  async getAllOrder(params) {
    const url = "/admin/order/all-order-with-user";
    const listOrder = await axiosClient.get(url);

    const start = params._page * params._limit - params._limit;
    const end = params._page * params._limit - 1;

    return {
      data: listOrder.data.data.slice(start, end + 1),
      pagination: {
        page: params._page,
        limit: params._limit,
        total: listOrder.data.data.length,
      },
    };
  },
  getOrderById(orderId) {
    const url = `/admin/order/get-order-by-id/${orderId}`;
    return axiosClient.get(url);
  },
  nextStatus(orderId) {
    const url = `/admin/order/next-status-order/${orderId}`;
    return axiosClient.put(url);
  },
  cancelOrder(orderId) {
    const url = `/admin/order/cancel-order/${orderId}`;
    return axiosClient.put(url);
  },
  sortOrder(typeSort, sort, typeOrderStatus) {
    const url = "/admin/order/sortOrder";
    return axiosClient.get(url, {
      params: {
        typeSort,
        sort,
        typeOrderStatus,
      },
    });
  },
};

export default adminAPI;
