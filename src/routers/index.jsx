import { createBrowserRouter } from "react-router-dom";
import { TestPage } from "@/pages";
import { Home } from "@/pages/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);
