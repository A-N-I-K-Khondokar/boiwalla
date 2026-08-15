import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots/Roots";
import ErrorElements from "../Pages/ErrorPage/ErrorElements";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
