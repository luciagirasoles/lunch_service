import React from "react";
import Footer from "../components/Footer";
import style from "./Waiter.module.css";
import iconHome from "../images/home.svg";
import { navigate } from "@reach/router";
import { useOrdersReady } from "../../redux/selectors/index";
import { useUpdateOrder } from "../../redux/action/action-hooks";

export default function Waiter() {
  const orders = useOrdersReady();
  const updateStatusOrder = useUpdateOrder();
  function handleOnclick(event) {
    // console.log(event.target.parentNode.id);
    updateStatusOrder({
      id: parseInt(event.target.parentNode.id),
      status: "delivered"
    });
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
                id={order.id}
                key={order.id}
                className={`${style.card} ${style.color_amber}`}
              >
                <h5>#0{order.id}</h5>
                <p>{`entrada: ${order.starter.name}`}</p>
                <p>{`segundo: ${order.mainCourse.name}`}</p>
                <p>{`bebida: ${order.beverage.name}`}</p>
                <button onClick={handleOnclick}>Entregado</button>
              </section>
            );
          })}
        </div>
      ) : (
        <p className={style.noOrders}>Sin ordenes para entregar</p>
      )}

      <Footer role="waiter" />
    </div>
  );
}
