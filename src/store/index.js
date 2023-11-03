// store/index.js
import { createStore } from "vuex";
import ws from "./ws";

export default createStore({
  modules: {
    ws,
  },
});
