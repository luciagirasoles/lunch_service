import React from "react";
import style from "./Home.module.css";
import { navigate } from "@reach/router";

export default function Home() {
  return (
    <div className={style.main}>
      <h2 className={style.title}>Elige tu rol:</h2>
      <button
        className={`${style.button} ${style.color_sky}`}
        onClick={() => {
          navigate("/chef");
        }}
      >
        Cocinero
      </button>
      <button
        className={`${style.button} ${style.color_blue}`}
        onClick={() => {
          navigate("/waiter");
        }}
      >
        Mozo
      </button>
    </div>
  );
}
