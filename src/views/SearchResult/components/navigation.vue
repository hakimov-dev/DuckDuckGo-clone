<template>
  <div
    @click="$store.state.sidenavOpen = false"
    class="navbar h-[80px] px-[5%] flex items-center justify-center bg-[#161616] sticky top-0 z-[111]"
  >
    <div class="w-full content flex items-center">
      <div class="left-content w-[100%] flex items-center !justify-start">
        <router-link to="/">
        <img
          class="w-[80px] cursor-pointer"
          src="@/assets/images/search-logo.png"
          alt=""
          srcset=""
        />
        </router-link>
        <div class="searchInput !w-[50%] flex items-center justify-between shadow-lg !-ml-[0%]">
          <input
            v-model="$store.state.searchValue"
            @keyup.enter="
              $store.dispatch('postSearchValue', $store.state.searchValue)
            "
            type="text"
          />
          <a
            @click.prevent="
              $store.dispatch('postSearchValue', $store.state.searchValue)
            "
            ><img
              class="!h-8 mt-[1%] hover:bg-[#161616]"
              src="@/assets/images/search-icon.png"
              alt=""
          /></a>
        </div>
      </div>
      <div class="author">
        <svg
          @click.stop
          @click="$store.state.sidenavOpen = true"
          class="cursor-pointer h-9 w-9 text-gray-500 rounded p-1 transition-all hover:bg-[#262626]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'navbar-item'
}
</script>
