import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Provider } from "./components/Provider";

import "./styles.css";

ReactDOM.render(
  <Provider>
    {ReactDOM.createPortal(<Header />, document.getElementById("mount-header"))}
    {ReactDOM.createPortal(<Main />, document.getElementById("mount-main"))}
    {ReactDOM.createPortal(<Footer />, document.getElementById("mount-footer"))}
  </Provider>,
  document.getElementById("root")
);
