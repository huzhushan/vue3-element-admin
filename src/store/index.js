//index.js
import { createStore } from "vuex";
import app from "./modules/app";
import login from "./modules/login";
import menu from "./modules/menu";

export default createStore({
  modules: {
    app,
    login,
    menu
  },
});