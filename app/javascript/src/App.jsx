import React from "react";
import { Router } from "@reach/router";
import Home from "./views/Home";
import Chef from "./views/Chef";
import style from "./App.module.css";
import { useCurrentMenu } from "../redux/action/action-hooks";

export default function App() {
  const fetchDataSuccess = useCurrentMenu();

  React.useEffect(() => {
    fetchDataSuccess();
    // eslint-disable-next-line
  }, []);

  return (
    <Router className={style.main}>
      <Home path="/" />
      <Chef path="/chef" />
    </Router>
  );
}
