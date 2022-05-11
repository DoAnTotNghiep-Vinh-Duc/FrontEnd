import { createSlice } from "@reduxjs/toolkit";

const listCartSlice = createSlice({
  name: "cart",
  initialState: {
    listProductCart: [],
    listIdProductCart: [],
  },
  reducers: {
    addToPayment(state, action) {
      const productDetail = action.payload.product;
      const index = state.listProductCart.findIndex(
        (x) => x.productDetail._id === productDetail.productDetail._id
      );
      if (index < 0) {
        state.listProductCart.push(productDetail);
        state.listIdProductCart.push(productDetail.productDetail._id);
      }
    },
    removeFromPayment(state, action) {
      const idNeedToRemove = action.payload.idNeedToRemove;
      state.listProductCart = state.listProductCart.filter(
        (x) => x.productDetail._id !== idNeedToRemove
      );
      state.listIdProductCart = state.listIdProductCart.filter(
        (x) => x !== idNeedToRemove
      );
    },
    increaseQuantity(state, action) {
      const idProduct = action.payload.idProduct;
      const index = state.listProductCart.findIndex(
        (x) => x.productDetail._id === idProduct
      );
      state.listProductCart[index].quantity =
        state.listProductCart[index].quantity + 1;
    },
    decreaseQuantity(state, action) {
      const idProduct = action.payload.idProduct;
      const index = state.listProductCart.findIndex(
        (x) => x.productDetail._id === idProduct
      );
      state.listProductCart[index].quantity =
        state.listProductCart[index].quantity - 1;
    },
    deleteItem(state, action) {
      const idProduct = action.payload.idProduct;
      console.log(idProduct);
      state.listProductCart = state.listProductCart.filter(
        (x) => x.productDetail._id !== idProduct
      );
      state.listIdProductCart = state.listIdProductCart.filter(
        (x) => x !== idProduct
      );
    },
  },
});

const { actions, reducer } = listCartSlice;
export const {
  addToPayment,
  removeFromPayment,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
} = actions;
export default reducer;
