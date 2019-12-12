import React from "react";
import Footer from "../components/Footer";
import style from "./Waiter.module.css";
import iconHome from "../images/home.svg";
import { navigate } from "@reach/router";
import { useOrdersReady } from "../../redux/selectors/index";
import Modal from "../components/Modal";

export default function Waiter() {
  const [showModal, setShowModal] = React.useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const orders = useOrdersReady();
  function handleOnclick(event) {
    console.dir(event.target);
    console.log(event.target.parentNode);
  }
  return (
    <div className={style.main}>
      <img
        className={style.image}
        src={iconHome}
        onClick={() => {
          navigate("/");
        }}
        alt="back home"
      />
      <div className={style.ready}>
        <h3>{Object.keys(orders).length}</h3>
      </div>
      <h2 className={style.title}>Ordenes listas</h2>
      {!!Object.keys(orders).length ? (
        <div className={style.ordersSection}>
          {Object.values(orders).map(order => {
            return (
              <section
                key={order.id.toString()}
                className={`${style.card} ${style.color_amber}`}
              >
                <h5>#0{order.id}</h5>
                <p>{`entrada: ${order.starter.name}`}</p>
                <p>{`segundo: ${order.mainCourse.name}`}</p>
                <p>{`bebida: ${order.beverage.name}`}</p>
                <UpdateButton orderId={order.id} onClick={openModal} />
              </section>
            );
          })}
        </div>
      ) : (
        <p>Sin ordenes para entregar</p>
      )}
      {showModal && (
        <Modal>
          <h3>{`La orden 0${order} `}</h3>
        </Modal>
      )}

      <Footer role="waiter" />
    </div>
  );
}

function UpdateButton({ orderId, closeModal }) {
  return (
    <>
      <button onClick={handleOnclick}>Entregado</button>
    </>
  );
}
