import React from "react";
import Footer from "../components/Footer";
import style from "./Chef.module.css";
import iconHome from "../images/home.svg";
import { navigate } from "@reach/router";
import { useOrdersReceived } from "../../redux/selectors/index";

export default function Chef() {
  const orders = useOrdersReceived();

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
      <div className={style.pending}>
        <h3>{Object.keys(orders).length}</h3>
      </div>
      <h2 className={style.title}>Ordenes Pendientes</h2>
      {Object.keys(orders).length && (
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
              </section>
            );
          })}
        </div>
      )}
      <Footer role="chef" />
    </div>
  );
}
