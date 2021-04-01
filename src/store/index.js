//index.js
import { createStore } from "vuex";
import app from "./modules/app";
import account from "./modules/account";
import menu from "./modules/menu";

export default createStore({
  modules: {
    app,
    account,
    menu
  },
});