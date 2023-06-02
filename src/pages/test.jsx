import { Button, Modal } from "@/components";
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
    <div className="flex h-screen justify-center items-center">
      <div className="w-auto">
        <Button
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          Open Modal
        </Button>
        <Modal
          onClose={onClose}
          onSubmit={onSubmit}
          showModal={showModal}
          submitText="Setuju"
          closeText="Tidak setuju"
          modalTitle="Ini judul"
        >
          <p>Ini content</p>
        </Modal>
      </div>
    </div>
  );
};
