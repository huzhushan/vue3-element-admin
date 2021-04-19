//index.js
import { createStore } from 'vuex';
import app from './modules/app';
import account from './modules/account';
import menu from './modules/menu';
import tags from './modules/tags';

export default createStore({
  modules: {
    app,
    account,
    menu,
    tags,
  },
});
