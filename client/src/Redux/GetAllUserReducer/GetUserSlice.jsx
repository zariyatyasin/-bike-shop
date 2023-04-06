import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUser = createAsyncThunk("fetchAllUser", async () => {
  const token = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).LoginInUser
  ).currentUser.accessToken;

  const config = {
    headers: {
      token: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(
      `http://localhost:5000/api/users/find/`,

      config
    );

    return response.data;
  } catch (error) {
    return error;
  }
});
const initialState = {
  alluser: [],
  isLoading: false,
  isError: null,
};
export const getAlluser = createSlice({
  name: "getUsers",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchAllUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.alluser = action.payload;
      state.isError = null;
    });
    builder.addCase(fetchAllUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default getAlluser.reducer;
