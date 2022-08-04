<template>
   <div class="searchBar flex items-center flex-col">
       <img src="@/assets/images/main-logo.png" alt="logo">
      <div class="searchInput flex items-center justify-between shadow-2xl">
        <input v-model="$store.state.searchValue" @keyup.enter="$store.dispatch('postSearchValue', $store.state.searchValue)" type="text">
        <a @click.prevent="$store.dispatch('postSearchValue', $store.state.searchValue)"><img class="h-8" src="@/assets/images/search-icon.png" alt=""></a>
      </div>
   </div>
</template>

<script>
export default {
  name: 'HomeView',

  mounted () {
    this.$store.state.searchValue = ''
  }
}
</script>
