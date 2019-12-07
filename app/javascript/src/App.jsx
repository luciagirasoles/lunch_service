import React from "react";
import { Router } from "@reach/router";
import Home from "./views/Home";
import styles from "./App.module.css";

export default function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}
