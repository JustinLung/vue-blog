import Vue from "vue";
import Vuex from "vuex";
import AuthService from "./../services/auth-service";
import router from "./../router";

Vue.use(Vuex);

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

const store = new Vuex.Store({
  state: initialState,
  mutations: {
    loginSuccess(state) {
      state.status = { loggedIn: true };
    },
    loginFailed(state) {
      state.status = { loggedIn: false };
    },
    logout(state) {
      state.status = { loggedIn: false };
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      AuthService.login(username, password)
        .then(() => {
          commit("loginSuccess");
          router.push("/");
        })
        .catch(() => {
          commit("loginFailed");
        });
    },
    logout({ commit }) {
      AuthService.logout();
      commit("logout");
    },
    register() {},
  },
  getters: {
    getUsername(state) {
      return state.user.userInfo.username;
    },
  },
});

export default store;
