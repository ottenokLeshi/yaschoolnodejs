import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./src/components/App";
import store from "./src/store/configureStore";

import MyForm from "./src/helpers/MyForm";

window.MyForm = MyForm;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);