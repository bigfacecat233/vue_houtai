import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";
import user from "./user";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    routes: [], //所有路由（过滤+原有的）
    addRoutes: [], //过滤的路由
  },
  modules: {
    tab,
    user,
  },
});
