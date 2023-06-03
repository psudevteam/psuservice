import { Button } from "@/components";
import { IconNotFound } from "@/components";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="grid place-items-center h-screen w-full">
      <div className="flex gap-y-4 flex-col items-center md:flex-col md:gap-2">
        <div className="w-[70vw] object-cover md:w-[50vw] xl:w-[25vw]">
          <IconNotFound />
        </div>
        <div className="xl:flex xl:flex-col w-full grid place-items-center">
          <h1 className="text-3xl font-bold p-2">404</h1>
          <p className="text-slate-500 hidden md:hidden">|</p>
          <p className="text-slate-500">This page could not be found.</p>
          <div className="w-[40vw] xl:w-[15vw] mt-5">
            <Link to="/">
              <Button variant="primary-outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
