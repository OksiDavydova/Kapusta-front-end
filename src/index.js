import React from "react";
import ReactDOM from "react-dom";
// import { useSelector } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import "normalize.css";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/index.styled";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
