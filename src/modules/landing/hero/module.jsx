import { Button } from "@/components";

export const HeroModule = () => {
  return (
    <main className="flex flex-col">
      <h1 className="text-center font-bold text-[2.5rem] mt-[10vh] text-blue-500 md:text-[3rem]">
        PSU
        <span className="block text-[1.5rem] text-slate-800 mt-2 md:text-[2rem]">
          Bootcamp and services
        </span>
      </h1>

      <div className="grid place-items-center">
        <p className="text-center mt-2 w-[80vw] text-slate-500 md:text-[1.2rem] lg:w-[65vw] xl:w-[50vw]">
          Here at PSU, we&apos;re focused on bootcamp services and services can unlock long-term
          value and drive technology growth.
        </p>
        <div className="w-[30vw] mt-5 md:w-[20vw] lg:w-[15vw]">
          <Button size="sm">Learn more</Button>
        </div>
      </div>
    </main>
  );
};
