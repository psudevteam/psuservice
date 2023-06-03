import { createPortal } from "react-dom";
import { Button, IconClose } from "@/components";

export const Modal = ({
  showModal,
  onClose,
  onSubmit,
  modalTitle,
  children,
  submitText = "Submit",
  closeText = "Cancel",
}) => {
  return (
    showModal &&
    createPortal(
      <div className="fixed top-0 left-0 right-0 flex items-center justify-center bg-gray-800 bg-opacity-40 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen">
        <div className="relative w-full max-w-2xl max-h-full backdrop-blur-sm">
          <form onSubmit={onSubmit} className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900">{modalTitle}</h3>
              <Button onClick={onClose} variant="icon-close" size="sm">
                <IconClose />
                <span className="sr-only">Close modal</span>
              </Button>
            </div>
            <div className="p-6 space-y-8">{children}</div>
            <div className="flex items-center p-6 space-x-2 rounded-lg">
              <Button type="submit" size="md" variant="submit-button">
                {submitText}
              </Button>
              <Button type="button" size="md" onClick={onClose} variant="close-button">
                {closeText}
              </Button>
            </div>
          </form>
        </div>
      </div>,
      document.getElementById("modal"),
    )
  );
};
