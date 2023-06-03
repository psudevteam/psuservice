import { Suspense } from "react";
import { lazily } from "react-lazily";

const { HeroModule } = lazily(() => import("@/modules"));

export const HomeModule = () => {
  return (
    <main>
      <Suspense fallback={"Loading hero..."}>
        <HeroModule />
      </Suspense>
    </main>
  );
};
