import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddlewareMiddle) =>
    getDefaultMiddlewareMiddle().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
