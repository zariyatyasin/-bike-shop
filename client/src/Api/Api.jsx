import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminUserListApi",
  tagTypes: ["AdminUserList"],
  endpoints: (build) => ({
    getUserList: build.query({
      query: () => `/users/find/`,
    }),
  }),
});
