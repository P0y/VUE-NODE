import api from '../../api'
import { LOGIN, LOGGOUT } from "../actions.type";
import { SET_USER, SET_LOGGED } from "../mutations.type";

const state = {
  user: [],
  isLoggedIn: false
};

const getters = {
  users(state) {
    return state.users
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      const user = {user: {email: credentials.email, pass: credentials.pass}}
      context.commit(SET_USER, user)
      context.commit(SET_LOGGED, true)
    })
  },
  [LOGGOUT](context, credentials) {
    return new Promise(resolve => {
      context.commit(SET_USER, [])
      context.commit(SET_LOGGED, false)
    })
  }
};

const mutations = {
  [SET_USER](state, user) {
    state.user = user;
  },
  [SET_LOGGED](state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
