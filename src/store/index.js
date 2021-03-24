//index.js
import { createStore } from "vuex";
import user from "./modules/user";

export default createStore({
  modules: {
    user,
  },
});