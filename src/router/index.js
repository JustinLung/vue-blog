import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "./../store";

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/protected",
    name: "Protected",
    component: () =>
      import(/* webpackChunkName: "protected" */ "../views/Protected.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const privatePages = ["/protected"];
  const authRequired = privatePages.includes(to.path);
  const loggedIn = store.state.status.loggedIn;
  if (authRequired && !loggedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
