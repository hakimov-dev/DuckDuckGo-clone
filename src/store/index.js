import { createStore } from 'vuex'
import router from '@/router'

export default createStore({
  state: {
    searchValue: '',
    searchResult: null,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    postSearchValue(ctx, value){
      if(value.length > 0){
        router.push(`/search/?q=:${value}`)
      } else{
        alert('Enter something to search!')
      }
    }
  },
  modules: {
  }
})
