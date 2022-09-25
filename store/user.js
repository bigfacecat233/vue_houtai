import Cookie from "js-cookie";
export default {
  state: {
    token: "",
    menu: [],
  },
  mutations: {
    setToken(state, val) {
      state.token = val;
      Cookie.set("token", val);
    },
    clearToken(state) {
      state.token = "";
      Cookie.remove("token");
    },
    getToken(state) {
      state.token = state.token || Cookie.get("token");
    },
    setMenu(state, val) {
      state.menu = val;
      Cookie.set("menu", JSON.stringify(val));
    },
    clearMenu(state) {
      state.menu = [];
      Cookie.remove("menu");
    },
    addMenu(state, router) {
      if (!Cookie.get("menu")) return;
      const menuList = [];
      const menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      menu.forEach((item) => {
        if (item.children) {
          item.children.map((item) => {
            item.component = () => import(`../views/${item.url}`);
            return item;
          });
          menuList.push(...item.children);
        } else {
          item.component = () => import(`../views/${item.url}`);
          menuList.push(item);
        }
      });
      menuList.forEach((item) => router.addRoute("Main", item));
    },
  },
};
