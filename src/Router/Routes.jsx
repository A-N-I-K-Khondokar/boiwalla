import { createBrowserRouter } from "react-router";
import Roots from "../Pages/Roots/Roots";
import ErrorElements from "../Pages/ErrorPage/ErrorElements";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        index: true,
        loader:()=>fetch("/booksData.json").then(res=>res.json()), // loading data
        path: "/",
        Component: Home,
      },
      {
        path:'/about',
        Component:About
      },
      {
        path:'/bookDetails/:id',
        Component:BookDetails
      }
    ],
  },
]);
