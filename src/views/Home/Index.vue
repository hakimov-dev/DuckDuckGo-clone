<template>
   <div class="searchBar">
       <img src="@/assets/images/main-logo.png" alt="logo">
      <div class="searchInput flex items-center justify-between shadow-2xl">
        <input v-model="$store.state.searchValue" type="text">
        <a><img class="h-8" src="@/assets/images/search-icon.png" alt=""></a>
      </div>
   </div>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>
