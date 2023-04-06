import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProduct = createAsyncThunk(
  "Allproduct/fetchAllProduct",
  async ({ catId, filters }, { rejectWithValue }) => {
    try {
      const response = catId
        ? await axios.get(
            `http://localhost:5000/api/products/?category=${filters}`
          )
        : await axios.get(`http://localhost:5000/api/products/ `);

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const createProduct = createAsyncThunk(
  "Allproduct/createProduct",
  async (
    { name, images, countInStock, description, price },
    { rejectWithValue }
  ) => {
    const token1 = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).LoginInUser
    ).currentUser.accessToken;
    const config = {
      headers: {
        token: `Bearer ${token1}`,
      },
    };
    try {
      const response = await axios.post(
        `http://localhost:5000/api/products`,
        { name, images, countInStock, description, price },
        config
      );

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "Allproduct/deleteProduct",
  async ({ id }, { rejectWithValue }) => {
    const token1 = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).LoginInUser
    ).currentUser.accessToken;
    const config = {
      headers: {
        token: `Bearer ${token1}`,
      },
    };
    console.log(id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/products/${id}`,

        config
      );

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  AllProduct: [],
  isLoading: false,
  isError: null,
};
export const getAllProduct = createSlice({
  name: "AllProduct",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.AllProduct = action.payload;
      state.isError = null;
    });
    builder.addCase(fetchAllProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
    //create product

    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.AllProduct.push(action.payload);
      state.isError = null;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });

    //delete products
    builder.addCase(deleteProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.AllProduct = state.AllProduct.filter(
        (item) => item._id !== action.payload
      );

      state.isError = null;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default getAllProduct.reducer;
