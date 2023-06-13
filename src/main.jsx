import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Router } from "./routers";
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";
import { LoadingSpinner } from "./components";

const htmlElement = document.getElementById("root");
const root = createRoot(htmlElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
    },
  },
});

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <RecoilRoot>
          <Suspense
            fallback={
              <main className="w-full h-screen justify-center items-center flex">
                <LoadingSpinner />
              </main>
            }
          >
            <RouterProvider router={Router} fallbackElement={<LoadingSpinner />} />
          </Suspense>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  </StrictMode>,
);
