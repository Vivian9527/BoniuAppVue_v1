// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 状态数据
  },
  mutations: {
    // 同步变更状态的方法
  },
  actions: {
    // 异步操作和共享函数
    sharedFunction(context) {
      // 共享的函数逻辑
    },
  },
});
