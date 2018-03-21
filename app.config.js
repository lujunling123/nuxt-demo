

'use strict'

const isProd = process.env.NODE_ENV === 'production'

const baseApiUrl = isProd ? 'https://test.test' : 'http://localhost:3333/'

export default {
  service: {
    url: '/',
    method: 'get',
    baseURL: baseApiUrl,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json'
    },
    timeout: 12000,
    responseType: 'json'
  },
  codeMap: {
    FAILED: -1,
    SUCCESS: 200,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    SERVER_ERROR: 500,
    PARAMS_ERROR: 10001
  },
  constant: {
    menus: [
      { key: 'index', title: '首页', icon: 'home' },
      { key: 'archive', title: '归档', icon: 'archive' },
      { key: 'guestbook', title: '留言墙', icon: 'guestbook' },
      { key: 'about', title: '关于', icon: 'about' }
    ]
  }
}
