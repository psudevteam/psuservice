import { createBrowserRouter } from "react-router-dom";
import { TestPage, NotFound, Home } from "@/pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
