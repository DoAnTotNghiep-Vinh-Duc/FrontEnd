import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";

const rootReducer = {
  user: userReducer,
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
