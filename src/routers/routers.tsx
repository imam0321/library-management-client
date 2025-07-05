import Main from "@/layout/Main";
import AddBookPage from "@/pages/AddBookPage/AddBookPage";
import BookDetailPage from "@/pages/BookDetailPage/BookDetailPage";
import AllBooks from "@/pages/BooksPage/AllBooks";
import BorrowBook from "@/pages/BorrowBook/BorrowBook";
import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";
import { createBrowserRouter } from "react-router";

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
