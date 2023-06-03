import { Suspense } from "react";
import { lazily } from "react-lazily";

const { HeroModule } = lazily(() => import("@/modules"));

export const HomeModule = () => {
  return (
    <>
      <Suspense fallback={"Loading hero..."}>
        <HeroModule />
      </Suspense>
    </>
  );
};
