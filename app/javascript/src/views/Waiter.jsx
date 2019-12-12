import React from "react";
import Footer from "../components/Footer";
import style from "./Waiter.module.css";
import iconHome from "../images/home.svg";
import { navigate } from "@reach/router";

export default function Waiter() {
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
      <h2 className={style.title}>Ordenes</h2>
      <ul>
        <li>Orden 1</li>
        <li>Orden 2</li>
        <li>Orden 3</li>
      </ul>
      <Footer role="waiter" />
    </div>
  );
}
