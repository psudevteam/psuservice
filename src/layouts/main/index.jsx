import { lazily } from "react-lazily";
import { Outlet } from "react-router-dom";

const { Navbar } = lazily(() => import("@/components"));

export const MainLayout = () => {
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />
      <Outlet />
    </main>
  );
};
