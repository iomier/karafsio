import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { createStore } from "redux";
import { searchSiteReducer } from "./Redux/reducers";
import { Provider } from "react-redux";
// import * as serviceWorker from './serviceWorker';
import Layout from "./Layout";
import "./index.css";
const store = createStore(searchSiteReducer);
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
