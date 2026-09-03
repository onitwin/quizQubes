import Modal from "react-modal";
import { useState } from "react";
export const ReusableModal = ({ text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const updateModalState = () => {
    setModalIsOpen(!modalIsOpen);
  };

  Modal.setAppElement("body");
  return (
    <>
      <Modal isOpen={modalIsOpen} className="baseModal">
        <div className="modalTextWrapper">
          <h2>{text}</h2>
        </div>
        <div className="modalButtonWrap">
          <button className="modalClose" onClick={updateModalState}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};
