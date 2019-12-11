import React from "react";
import Footer from "../components/Footer";
import style from "./Chef.module.css";

export default function Chef() {
  return (
    <div className={style.main}>
      <h2>Ordenes</h2>
      <ul>
        <li>Orden 1</li>
        <li>Orden 2</li>
        <li>Orden 3</li>
      </ul>
      <Footer />
    </div>
  );
}
