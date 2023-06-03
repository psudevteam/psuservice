import { Modal } from "@/components";
import { CrudModule } from "@/modules";
import { useState } from "react";

export const TestPage = () => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal(false);
  };

  const onSubmit = () => {
    setShowModal(false);
    console.log("Accept");
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <CrudModule />
    </div>
  );
};
