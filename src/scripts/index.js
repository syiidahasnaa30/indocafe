import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/detail.css";
import "../styles/favorite.css";
import "../styles/not-found.css";
import "../styles/responsive.css";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import App from "./views/app";
import swRegister from "./utils/sw-register";
const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector("#menu"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
