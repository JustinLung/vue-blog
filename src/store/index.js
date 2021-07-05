import Vue from 'vue'
import Vuex from 'vuex'
import AuthService from "./../services/auth-service"
import router from "./../router"

Vue.use(Vuex)

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

const store = new Vuex.Store({
  state: initialState,
  mutations: {
    loginSuccess(state, user) {
      state.status = {loggedIn: true}
      state.user = user
    },
    loginFailed(state) {
        state.status = {loggedIn: false}
    },
    logout(state) {
        state.status = {loggedIn: false}
    }
  },
  actions: {
    login({commit}, {username, password}) {
        AuthService.login(username, password).then(user=>{
            commit('loginSuccess', user)
            router.push("/")
        }).catch(()=>{
            commit('loginFailed')
        })
      },
      logout({commit}) {
        AuthService.logout()
        commit('logout')
        router.push("/")
      },
      register({commit},{username, password, image}) {
        AuthService.register(username, password, image).then(()=>{
          commit('loginFailed')
          router.push("/login")
        })
      }
  },
  getters: {
    getUsername(state) {
      return state.user.userInfo.username
    },
    getProfilePictureSrc(state) {
      const map = state.user.userInfo.hashedUsername
      const file = state.user.userInfo.profile_picture
      return file ? `${process.env.VUE_APP_API_URL}/image/${map}/${file}` : null
    }
  }
})

export default store