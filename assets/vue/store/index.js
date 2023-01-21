import { createStore } from 'vuex'
import settingModule from "../store/setting";
import userModule from "../store/user";


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    setting: settingModule,
    user: userModule
  }
})
