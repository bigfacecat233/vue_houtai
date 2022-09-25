import Vue from "vue";
import App from "./App.vue";
import ElementUI, { MessageBox } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "../router";
import store from "../store";
import http from "axios";
import "../src/assets/less/index.less";
import "../api/mock";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = http;
Vue.prototype.$confirm = MessageBox.confirm;
router.beforeEach((to, from, next) => {
  store.commit("getToken");
  const token = store.state.user.token;
  if (!token && to.name != "login") next({ name: "login" });
  else if (token && to.name == "login") {
    next("/home");
  } else next();
});
new Vue({
  store,
  router,
  created() {
    this.$store.commit("addMenu", this.$router);
  },
  render: (h) => h(App),
}).$mount("#app");
