import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import Layout from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
    ],
  },
  {
    path: "/series",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Series />,
      },
    ],
  },
]);
