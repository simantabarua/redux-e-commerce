import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import Error from "../pages/Error/Error";
import HomePage from "../pages/Home/HomePage";
import ProductPage from "../pages/product/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductPage/>,
      },
    ],
  },
]);
