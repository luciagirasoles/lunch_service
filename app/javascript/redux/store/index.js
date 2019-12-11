import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer/index";
import thunk from "redux-thunk";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composer(applyMiddleware(thunk)));

export default store;
