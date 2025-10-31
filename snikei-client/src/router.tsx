import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import HomePage from "./Featured/Pages/HomePage";
import BlogPage from "./Featured/Pages/BlogPage";
import AboutPage from "./Featured/Pages/AboutPage";
import ShopPage from "./Featured/Pages/ShopPage";
import CategoriesPage from "./Featured/Pages/CategoriesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
    ],
  },
]);
