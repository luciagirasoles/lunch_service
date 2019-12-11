import React from "react";
import Modal from "./Modal";
import style from "./Footer.module.css";
import SelectMenu from "./SelectMenu";

export default function Footer() {
  const [showModal, setShowModal] = React.useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className={style.main}>
      <button
        className={`${style.button} ${style.color_green}`}
        onClick={openModal}
      >
        Definir menu del dia
      </button>
      {showModal && (
        <Modal>
          <SelectMenu handleCloseModal={closeModal} />
        </Modal>
      )}
    </div>
  );
}
