import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.totalAmount = state.totalAmount + +newItem.price * newItem.quantity;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      const existingCartItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + newItem.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(newItem);
        state.totalQuantity++;
      }

      state.items = updatedItems;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      } else {
        existingItem.quantity--;
        state.totalAmount -= existingItem.price;
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalAmount = 0;
      }
    },
    updateItem(state, action) {},
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
