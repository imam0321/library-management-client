import Main from "@/layout/Main";
import AllBooks from "@/pages/BooksPage/AllBooks/AllBooks";
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
    ],
  },
]);
