import { baseApi } from "@/redux/api/baseApi";
import type { IBookResponse } from "@/utils/book.interface";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<IBookResponse, { limit?: number; page?: number }>({
      query: ({ limit = 6, page = 1 }) => `books?limit=${limit}&page=${page}`,
      providesTags: ["Books"],
    }),

    getBookById: builder.query({
      query: (id) => `books/${id}`,
      providesTags: ["Books"],
    }),

    addBook: builder.mutation({
      query: (bookData) => ({
        url: "books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["Books"],
    }),

    updateBook: builder.mutation({
      query: ({ id, bookData }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: bookData,
      }),
      invalidatesTags: ["Books"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
