import { Button } from "@/components";
import { createBrowserRouter } from "react-router-dom";
import { TestPage } from "@/pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <section className="flex items-center">
        <Button>Login</Button>
      </section>
    ),
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);
