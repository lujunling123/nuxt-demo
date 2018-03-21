'use strict'

import { isMobile } from '@/utils'

export const actions = {
  nuxtServerInit ({ commit, state, dispatch }, { params, route, req }) {
    const ua = process.server ? req.headers['user-agent'] : window.navigator.userAgent
    const mobileClient = isMobile(ua)
    if (mobileClient) {
      commit('app/SET_MOBILE_LAYOUT', true)
    }
    const initTask = []
    //这里写初始化的异步请求
    initTask.push(
      dispatch('category/fetchData'),
      // dispatch('option/fetchData'),
    )
    return Promise.all(initTask)
  }
}
