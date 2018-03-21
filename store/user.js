'use strict'

import { api } from '@/services'

const SET_CATEGORYS = 'SET_CATEGORYS'

export const state = () => ({
  users: {},
})

export const getters = {
  users: state => state.users
}

export const mutations = {
  [SET_CATEGORYS]: (state, data) => (state.users = data),
}
