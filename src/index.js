import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import logger from "./services/logService";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// import Counter from './components/counter';

logger.init();
logger.configure();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
// ReactDOM.render(<Counter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
