import { Suspense } from "react";
import { lazily } from "react-lazily";

const { HomeModule } = lazily(() => import("@/modules"));

export const Home = () => {
  return (
    <Suspense fallback={"Loading home..."}>
      <HomeModule />
    </Suspense>
  );
};
