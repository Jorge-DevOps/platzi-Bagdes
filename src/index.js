import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./routes/app";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
