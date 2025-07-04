import Main from "@/layout/Main";
import BookDetailPage from "@/pages/BookDetailPage/BookDetailPage";
import AllBooks from "@/pages/BooksPage/AllBooks";
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
    ],
  },
]);
