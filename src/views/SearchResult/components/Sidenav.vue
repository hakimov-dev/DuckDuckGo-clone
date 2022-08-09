<template>
    <transition>
     <div v-if="$store.state.sidenavOpen && $route.name == 'search'" class="sidenav fixed -right-0 px-[1%] w-[18%] py-2 bg-[#282828] z-[111] top-0 shadow-2xl h-screen">
           <div class="close-icon" @click="$store.state.sidenavOpen = false"><svg class="h-11 w-11 float-right text-gray-400 transition-all hover:text-gray-500 cursor-pointer p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg></div>
        <div class="links flex flex-col items-center justify-center w-full mx-auto">
          <h1 @click="history" class="py-1 pt-2 text-white text-[18px] cursor-pointer">Search history</h1>
          <a target="_blank" href="https://hakimov.netlify.app/" class="py-1 text-white text-[18px]">Author</a>
          <a target="_blank" href="https://github.com/hakimov-dev/DuckDuckGo-clone" class="py-1 text-white text-[18px]">Github</a>
          
          <a target="_blank" href="https://github.com/hakimov-dev/DuckDuckGo-clone/discussions/1" class="py-1 text-red-500 text-[18px]">Report bug?</a>
 
          <div class="text-center text-white mt-[80%]">
          <h1 class="text-red-500 uppercase font-medium">Attention</h1>
          <p>This app for use desktops! Developing maybe later developing for mobile phones.</p>
          </div>
        </div>
    </div>
    </transition>
</template>

<script>
export default {
    name: 'sidenav-item',

    methods: {
     history(){
        this.$store.state.modalOpen = true
     }   
    }
}
</script>