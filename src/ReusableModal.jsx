import Modal from "react-modal";
import { useState } from "react";

export const ReusableModal = ({ text, title }) => {
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
        <div className="modalBody">
          <h1>{title}</h1>
          <div className="modalTextWrapper">
            <h3>{text}</h3>
          </div>
          <div className="modalButtonWrap">
            <button className="modalClose" onClick={updateModalState}>
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
