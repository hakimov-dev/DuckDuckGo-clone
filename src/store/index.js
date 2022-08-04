import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    searchValue: '',
    searchResult: null,
    sidenavOpen: false,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    postSearchValue (ctx, value) {
      if (value.length > 0) {
        router.push({ name: 'search', params: { value: value } })
      } else {
        alert('Enter something to search!')
      }
    }
  },
  modules: {
  }
})
