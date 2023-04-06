// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useSelector } from "react-redux";

// export const fetchUserUpdate = createAsyncThunk(
//   "updateUser/fetchUserUpdate",
//   async ({ email, fullname, id, username }, { rejectWithValue }) => {
//     console.log("dispatching now");
//     const token1 = JSON.parse(
//       JSON.parse(localStorage.getItem("persist:root")).LoginInUser
//     ).currentUser.accessToken;
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         token: `Bearer ${token1}`,
//       },
//     };
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/users/63b9012a75bf1111015a88b6`,
//         { email, fullname, username },
//         config
//       );

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const initialState = {
//   newState: null,
//   isLoading: false,
//   isError: false,
// };

// export const UpdateUserSlice = createSlice({
//   name: "updateUser",
//   initialState,

//   extraReducers: (builder) => {
//     builder.addCase(fetchUserUpdate.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchUserUpdate.fulfilled, (state, action) => {
//       state.isLoading = false;

//       JSON.stringify(localStorage.setItem("persist:root"));

//       state.isError = null;
//     });
//     builder.addCase(fetchUserUpdate.rejected, (state, action) => {
//       state.isLoading = false;
//       state.isError = action.payload;
//     });
//   },
// });

// export default UpdateUserSlice.reducer;
