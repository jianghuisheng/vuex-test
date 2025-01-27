import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 0
}

// 然后给 actions 注册事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
const actions = {
  increment: ({ commit }) => commit('increment'), // 提交到mutations中处理
  decrement: ({ commit }) => commit('decrement'),
  back: ({ commit }) => commit('back')
}
// 更新状态
const mutations = {
  increment(state) {
    state.count = state.count + 5
  },
  decrement(state) {
    state.count = state.count - 3
  },
  back() {
    window.history.go(-1)
  }
}
// 获取状态信息
const getters = {
}

// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})