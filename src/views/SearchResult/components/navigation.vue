<template>
    <div class="navbar h-[110px] px-[10%] flex items-center justify-between bg-[#161616]">
    <img class="w-[120px]" src="@/assets/images/search-logo.png" alt="" srcset="">
    <input class="bg-[]" v-model="$store.state.searchValue" @keyup.enter="$store.dispatch('postSearchValue', $store.state.searchValue)" type="text" />
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'navbar-item'
}
</script>
