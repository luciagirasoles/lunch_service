import React from "react";
import ReactDOM from "react-dom";

import App from "../src/App";
import { Provider } from "react-redux";

import store from "../redux/store/index";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
