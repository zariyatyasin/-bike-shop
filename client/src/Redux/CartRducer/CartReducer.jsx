import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProduct: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartProduct.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.qty += action.payload.qty;
      } else {
        state.cartProduct.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.cartProduct = state.cartProduct.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.cartProduct = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
