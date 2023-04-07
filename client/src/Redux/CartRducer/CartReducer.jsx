import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
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
      toast.success("Product added to cart", {
        position: "bottom-left",
      });
    },
    removeItem: (state, action) => {
      state.cartProduct = state.cartProduct.filter(
        (item) => item.id !== action.payload
      );

      toast.error("Product removed from cart", {
        position: "bottom-left",
      });
    },
    resetCart: (state, action) => {
      state.cartProduct = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
