import { useState } from "react";
import { CSSObject } from "@emotion/react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

function useModal() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Modal isOpen={isOpen}>
      <div>Modal</div>
    </Modal>
  );
}

interface ModalStyles {
  content: CSSObject;
}

const styles: ModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default useModal;
