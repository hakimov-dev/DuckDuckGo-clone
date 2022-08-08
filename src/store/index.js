import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'

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
        if(navigator.onLine){
          router.push({ name: 'search', params: { value: value } })
          axios.post(`https://www.googleapis.com/customsearch/v1?key=${process.env.VUE_APP_API_KEY}&cx=${process.env.VUE_APP_CONTEXT_KEY}&q=${value}`).then(res =>{
            console.log(res)
          }).catch(error => {
            console.log(error)
          })
        }else
          alert('You are offline, turn on internet and try it')
      } else {
        alert('Enter something to search!')
      }
    }
  },
  modules: {
  }
})
