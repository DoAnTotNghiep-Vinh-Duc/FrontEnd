import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import listProductCartReduce from "../redux/cartSlice";

const rootReducer = {
  user: userReducer,
  listProductCart: listProductCartReduce,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (
    getDefaultMiddleware //khỏi bị lỗi anon serializeable
  ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
