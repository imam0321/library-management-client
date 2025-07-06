import { baseApi } from "@/redux/api/baseApi";

export const borrowApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    borrowBook: builder.mutation({
      query: (data) => ({
        url: "borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books", "Borrow"],
    }),

    getBorrowSummary: builder.query({
      query: () => "borrow",
      providesTags: ["Borrow"],
    }),
    
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery} = borrowApi;
