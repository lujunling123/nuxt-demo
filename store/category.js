'use strict'

import { api } from '@/services'

const SET_CATEGORYS = 'SET_CATEGORYS'

export const state = () => ({
  categorys: {},
})

export const getters = {
  categorys: state => state.categorys
}

export const mutations = {
  [SET_CATEGORYS]: (state, data) => (state.categorys = data),
}

export const actions = {
  async fetchData ({ state, commit }) {
    const { data } = await api.category.list().catch(err => {})
    commit(SET_CATEGORYS, data.lists)
    return true
  }
}
