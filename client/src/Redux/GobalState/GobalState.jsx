import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    OpenSidebar: true,
  },
  reducers: {
    SidebarOpen: (state) => {
      state.OpenSidebar = state.OpenSidebar === true ? false : true;
    },
  },
});

export const { SidebarOpen } = globalSlice.actions;

export default globalSlice.reducer;
