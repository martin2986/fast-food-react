import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cart";
import appReducer from "./appState";

const store = configureStore({
  reducer: { cart: cartreducer, app: appReducer },
});

export default store;
