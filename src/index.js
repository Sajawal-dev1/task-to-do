import React from "react";
import ReactDOM from "react-dom";
import "index.css";
import App from "App";
import store from "redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <div className="App">
    <Provider store={store}>
      <App />
    </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

