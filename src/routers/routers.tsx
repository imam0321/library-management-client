import { lazy } from "react";
import { createBrowserRouter } from "react-router";
const Main = lazy(() => import("@/layout/Main"));
const AddBookPage = lazy(() => import("@/pages/AddBookPage/AddBookPage"));
const BookDetailPage = lazy(() => import("@/pages/BookDetailPage/BookDetailPage"));
const AllBooks = lazy(() => import("@/pages/BooksPage/AllBooks"));
const BorrowBook = lazy(() => import("@/pages/BorrowBook/BorrowBook"));
const BorrowSummary = lazy(() => import("@/pages/BorrowSummary/BorrowSummary"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <AllBooks />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/books/:id",
        element: <BookDetailPage />,
      },
      {
        path: "/create-book",
        element: <AddBookPage />,
      },
      {
        path: "/edit-book/:id",
        element: <AddBookPage />,
      },
      {
        path: "/borrow/:bookId",
        element: <BorrowBook />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
    ],
  },
]);
