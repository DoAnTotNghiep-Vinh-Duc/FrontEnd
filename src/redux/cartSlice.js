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
  },
});

const { actions, reducer } = listCartSlice;
export const { addToPayment, removeFromPayment } = actions;
export default reducer;
