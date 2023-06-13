import { createBrowserRouter } from "react-router-dom";
import { lazily } from "react-lazily";

const { TestPage, NotFound, Home } = lazily(() => import("@/pages"));
const { MainLayout } = lazily(() => import("@/layouts"));

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/test",
        element: <TestPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
