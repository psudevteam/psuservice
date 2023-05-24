import { Button } from "@/components";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <section className="flex items-center">
        <Button>Login</Button>
      </section>
    ),
  },
]);
