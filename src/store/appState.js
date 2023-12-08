import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orderListItems: [],
  items: [],
  searchInput: "",
  casheirLoggedIn: "Sarah Smith",
};
const appState = createSlice({
  name: "app",
  initialState,
  reducers: {
    orderedData(state, action) {
      const updatedOrderItems = action.payload;

      return {
        ...state,
        orderListItems: updatedOrderItems,
      };
    },

    searchItems(state, action) {
      const searchItem = action.payload;
      return {
        ...state,
        searchInput: searchItem,
      };
    },
  },
});

export const appAction = appState.actions;
export default appState.reducer;
