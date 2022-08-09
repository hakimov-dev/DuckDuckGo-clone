import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'

export default createStore({
  state: {
    searchValue: '',
    searchResult: null,
    sidenavOpen: false,
    modalOpen: false,
  },
  getters: {
  },
  mutations: {
    setResult(state, result){
     state.searchResult  = result
    }
  },
  actions: {
    postSearchValue (ctx, value) {
      if (value.length > 0) {
        if(navigator.onLine){
          axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.VUE_APP_API_KEY}&cx=${process.env.VUE_APP_CONTEXT_KEY}&q=${value}`).then(res =>{
          ctx.commit('setResult', res.data.items)
          router.push({ name: 'search', params: { value: value } })
          }).catch(error => {
            console.log(error.response.status)
            if(error.response.status == 429 || error.response.status == 429)
              alert('Pleace try again later we have too many request...')
            
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
