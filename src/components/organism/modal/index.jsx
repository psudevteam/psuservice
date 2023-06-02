import { createPortal } from "react-dom";
import { Button, IconClose } from "@/components/atoms";

export const Modal = ({
  showModal,
  onClose,
  onSubmit,
  modalTitle,
  children,
  submitText = "I Accept",
  closeText = "Decline",
}) => {
  return (
    showModal &&
    createPortal(
      <div className="fixed top-0 left-0 right-0 flex items-center justify-center bg-gray-800 bg-opacity-50 bg-blur-md z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                {modalTitle}
              </h3>
              <Button onClick={onClose} variant="icon-close">
                <IconClose />
                <span className="sr-only">Close modal</span>
              </Button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-8">{children}</div>
            {/* Modal footer */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <Button onClick={onSubmit} variant="submit-button">
                {submitText}
              </Button>
              <Button onClick={onClose} variant="close-button">
                {closeText}
              </Button>
            </div>
          </div>
        </div>
      </div>,
      document.getElementById("modal"),
    )
  );
};
