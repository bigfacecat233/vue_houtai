export default {
  state: {
    isCollapse: false,
    menuList: [
      {
        path: "/home",
        name: "home",
        label: "首页",
        icon: "home",
      },
    ],
    nowMenu: null,
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    selectMenu(state, val) {
      if (val.name !== "home") {
        const result = state.menuList.findIndex(
          (item) => item.path === val.path
        );
        if (result === -1) {
          state.nowMenu = val;
          state.menuList.push(val);
        } else {
          state.nowMenu = null;
        }
      }
    },
    closeTags(state, val) {
      const result = state.menuList.findIndex((item) => item.path === val.path);
      state.menuList.splice(result, 1);
    },
  },
};
