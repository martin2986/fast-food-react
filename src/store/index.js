import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import appReducer from "./appState";

const store = configureStore({
  reducer: { cart: cartReducer, app: appReducer },
});

export default store;
