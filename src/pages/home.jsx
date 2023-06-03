import { MainLayout } from "@/layouts";
import React from "react";
import { Navbar } from "@/components";
import { HomeModule } from "@/modules";
export const Home = () => {
  return (
    <MainLayout>
      <Navbar />
      <HomeModule />
    </MainLayout>
  );
};
