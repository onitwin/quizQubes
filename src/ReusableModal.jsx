import Modal from "react-modal";
import { useState } from "react";

export const ReusableModal = ({ text }) => {
  //set modal visibility at lauch
  const [modalIsOpen, setModalIsOpen] = useState(true);

  //update modal visibility between open/closed (true/false)
  const updateModalState = () => {
    setModalIsOpen(!modalIsOpen);
  };

  //modal musy be attached to an element before use - have hard coded body html element as owner
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
