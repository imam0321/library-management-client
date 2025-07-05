import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ph-l2-b5-assignment-3.vercel.app/api" }),
  tagTypes: ["Books", "Borrow"],
  endpoints: () => ({}),
});
