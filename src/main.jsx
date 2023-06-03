import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Router } from "./routers";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";

const htmlElement = document.getElementById("root");
const root = createRoot(htmlElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <RecoilRoot>
          <RouterProvider router={Router} />
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  </StrictMode>,
);
