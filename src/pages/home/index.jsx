import { lazily } from "react-lazily";

const { HomeModule } = lazily(() => import("@/modules"));

export const Home = () => {
  return <HomeModule />;
};
