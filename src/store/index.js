import { createStore } from 'vuex'

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
        this.$route.push(`/search/?q=:${value}`)
      } else{
        alert('Enter something to search!')
      }
    }
  },
  modules: {
  }
})
