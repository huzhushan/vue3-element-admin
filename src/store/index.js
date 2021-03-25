//index.js
import { createStore } from "vuex";
import app from "./modules/app";

export default createStore({
  modules: {
    app
  },
});