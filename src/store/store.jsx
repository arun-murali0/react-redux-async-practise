import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice";
import ProductSlice from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: ProductSlice,
  },
});

export default store;
