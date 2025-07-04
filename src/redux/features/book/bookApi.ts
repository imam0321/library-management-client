import { baseApi } from "@/redux/api/baseApi";
import type { IBookResponse } from "@/utils/book.interface";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<IBookResponse, { limit?: number; page?: number }>({
      query: ({ limit = 6, page = 1 }) => `books?limit=${limit}&page=${page}`,
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
