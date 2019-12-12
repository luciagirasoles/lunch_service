import React from "react";
import Modal from "./Modal";
import style from "./Footer.module.css";
import SelectMenu from "./SelectMenu";
import NewOrder from "./NewOrder";

export default function Footer({ role }) {
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
        className={`${style.button} ${
          role === "chef" ? style.color_sky : style.color_blue
        }`}
        onClick={openModal}
      >
        {role === "chef" ? "Definir menu del dia" : "Registrar orden"}
      </button>
      {showModal && (
        <Modal>
          {role === "chef" && <SelectMenu handleCloseModal={closeModal} />}
          {role === "waiter" && <NewOrder handleCloseModal={closeModal} />}
        </Modal>
      )}
    </div>
  );
}
