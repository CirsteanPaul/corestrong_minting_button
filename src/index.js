import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
if(document.getElementById("buttonReact"))
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App id={1} />
  </Provider>
  </React.StrictMode>,
  document.getElementById("buttonReact")
);
