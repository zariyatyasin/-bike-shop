import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserLogin = createAsyncThunk(
  "login/fetchUserLogin",
  async ({ email, password }, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        config
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserUpdate = createAsyncThunk(
  "updateUser/fetchUserUpdate",
  async ({ email, fullname, id, username }, { rejectWithValue }) => {
    console.log("dispatching now");
    const token = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).LoginInUser
    ).currentUser.accessToken;
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.put(
        `http://localhost:5000/api/users/${id}`,
        { email, fullname, username },
        config
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  currentUser: null,
  isLoading: false,
  isError: false,
};

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogOut: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.isError = null;
    });
    builder.addCase(fetchUserLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
    //Update

    builder.addCase(fetchUserUpdate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserUpdate.fulfilled, (state, action) => {
      state.isLoading = false;

      state.currentUser = action.payload;

      state.isError = null;
    });
    builder.addCase(fetchUserUpdate.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});
export const { userLogOut } = LoginSlice.actions;
export default LoginSlice.reducer;
