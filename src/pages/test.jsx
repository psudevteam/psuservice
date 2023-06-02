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

  const titleModal = <div>Judul Modal</div>;

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
          buttonOne={"Setuju"}
          buttonTwo={"Tidak setuju"}
          modalTitle={titleModal}
        >
          <p>Ini content</p>
        </Modal>
      </div>
    </div>
  );
};
