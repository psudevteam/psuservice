import { LoadingSpinner } from "@/components";
import { createPortal } from "react-dom";

export const LoadingCrud = () =>
  createPortal(
    <section className="flex absolute top-[53%] z-10 items-center justify-center w-full h-[200px]">
      <LoadingSpinner />
    </section>,
    document.getElementById("root"),
  );
