import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  orderItems: [],
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      const existingCartItem = state.items[existingItemIndex];
      state.changed = true;
      state.totalQuantity++;
      let updatedItems;
      state.totalAmount = state.totalAmount + newItem.price;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
          totalPrice: existingCartItem.totalPrice + newItem.price,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(newItem);
      }

      state.items = updatedItems;
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalAmount -= existingItem.price;
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.totalPrice -= existingItem.price;
        existingItem.quantity--;
      }
    },

    deleteItem(state, action) {
      const id = action.payload;
      const updateCart = state.items.filter((item) => item.id !== id);
      const removedItem = state.items.find((item) => item.id === id);
      const updatedTotalAmount = state.totalAmount - removedItem.totalPrice;
      const updatedQuantity = state.totalQuantity - removedItem.quantity;

      return {
        ...state,
        items: updateCart,
        totalAmount: updatedTotalAmount,
        totalQuantity: updatedQuantity,
        changed: true,
      };
    },
    updateCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
    emptyCart(state) {
      state.items = [];
      state.changed = true;
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    updateChange(state) {
      state.changed = false;
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
