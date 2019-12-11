import React from "react";
import style from "./Home.module.css";
import { navigate } from "@reach/router";

export default function Home() {
  return (
    <div className={style.main}>
      <h2 className={style.title}>Select your Role</h2>
      <button
        className={`${style.button} ${style.color_sky}`}
        onClick={() => {
          navigate("/chef");
        }}
      >
        Chef
      </button>
      <button className={`${style.button} ${style.color_blue}`}>Waiver</button>
    </div>
  );
}
