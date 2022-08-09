import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'
import cookies from 'vue-cookies'

export default createStore({
  state: {
    searchValue: '',
    searchResult: null,
    sidenavOpen: false,
    modalOpen: false,
    userSearchHistory: []
  },
  getters: {
  },
  mutations: {
    setResult(state, result){
     state.searchResult  = result
    },

    setHistory(state, value){
      state.userSearchHistory = value
    },

    updateHistory(state, value){
      const date = new Date();
      state.userSearchHistory.filter(user => user.searchValue == value)
      state.userSearchHistory.push({searchValue: value, date: `${date.getFullYear()}/${(date.getMonth() > 9 ? date.getMonth() +1 : `0${date.getMonth() +1}`)}/${(date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`)} ${(date.getHours() > 9 ? date.getHours() : '0'+ date.getHours())}:${(date.getMinutes() > 9 ? date.getMinutes() : '0'+ date.getMinutes())}`})
      cookies.set('user_search_history', JSON.stringify(state.userSearchHistory))
    },

    clearVariables(state){
      state.userSearchHistory = []
      state.modalOpen = false
    }
  },
  actions: {
    postSearchValue (ctx, value) {
      if (value.length > 0) {
        const date = new Date();
        if(navigator.onLine){
          if(cookies.get('user_search_history') == undefined){
             cookies.set('user_search_history', JSON.stringify([{searchValue: value, date: `${date.getFullYear()}/${(date.getMonth() > 9 ? date.getMonth() +1 : `0${date.getMonth() +1}`)}/${(date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`)} ${(date.getHours() > 9 ? date.getHours() : '0'+ date.getHours())}:${(date.getMinutes() > 9 ? date.getMinutes() : '0'+ date.getMinutes())}`}]))
             ctx.commit('setHistory', JSON.parse(cookies.get('user_search_history')))}
           else{
             ctx.commit('setHistory', JSON.parse(cookies.get('user_search_history')))
             ctx.commit('updateHistory', value)
            }

          axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.VUE_APP_API_KEY}&cx=${process.env.VUE_APP_CONTEXT_KEY}&q=${value}`).then(res =>{
              ctx.commit('setResult', res.data.items)
              router.push({ name: 'search', params: { value: value } })
          }).catch(error => {
            if(error.response.status == 429 || error.response.status == 429)
              alert('Pleace try again later we have too many request...')
             else
               alert(error.message)
          })
        }else
          alert('You are offline, turn on internet and try it')
      } else {
        alert('Enter something to search!')
      }
    },

    clearSearchHistory(ctx){
      cookies.remove('user_search_history')
      ctx.commit('clearVariables')
    }
  },
  modules: {
  }
})
