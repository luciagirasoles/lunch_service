import React from "react";
import { Router } from "@reach/router";
import Home from "./views/Home";
import Chef from "./views/Chef";
import Waiter from "./views/Waiter";
import style from "./App.module.css";
import { useCurrentMenu, useCurrentOrders } from "../redux/action/action-hooks";

export default function App() {
  const fetchDataMenuSuccess = useCurrentMenu();
  const fetchDataOrdersSucess = useCurrentOrders();

  React.useEffect(() => {
    fetchDataMenuSuccess();
    fetchDataOrdersSucess();

    // eslint-disable-next-line
  }, []);

  return (
    <Router className={style.main}>
      <Home path="/" />
      <Chef path="/chef" />
      <Waiter path="/waiter" />
    </Router>
  );
}
