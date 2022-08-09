<template>
  <Navigation />
  <Sidenav />
  <Modal/>
  <div class="results px-[6%] flex items-start mt-[4%] justify-between">
    <div
      class="cards flex items-center flex-col w-[60%]"
      v-if="$store.state.searchResult"
    >
      <a
        :href="item.link"
        target="_blank"
        class="card my-2 group w-[100%] cursor-pointer  max-h-[180px] p-[20px] overflow-hidden shadow-xl bg-[#282828] rounded-xl"
        v-for="item in $store.state.searchResult"
      >
        <div class="head-links flex items-center">
          <img
            class="rounded-full h-[18px] w-[18px]"
            :src="`http://www.google.com/s2/favicons?domain=${item.link}`"
            alt=""
          />
          <h1 class="text-[16px] text-white opacity-90 ml-[10px]">
           {{item.displayLink}}
          </h1>
        </div>
        <h1
          class="title text-2xl font-medium text-white opacity-90 ml-[15px] group-hover:underline mt-[5px] -ml-[1px]"
        >
         {{item.title}}
        </h1>
        <p
          class="about-text text-white opacity-80 mt-[10px] max-h-[78px] overflow-hidden"
        >
         {{item.snippet}}
        </p>
      </a>
    </div>

  <!-- For loading -->
    <div
      class="cards flex items-center flex-col w-[60%]"
      v-else
    >
      <div
        v-for="item in 6"
        :key="item"
        class="card my-2 !select-none  group cursor-progress max-h-[180px] p-[20px] overflow-hidden shadow-xl bg-[#282828] rounded-xl"
      >
        <div class="head-links flex items-center">
          <div
            class="rounded-full h-[25px] w-[25px] bg-gray-300 animate-pulse"
          />
          <h1 class="text-[16px] text-gray-300 rounded-[3px] ml-[15px] bg-gray-300 animate-pulse">
            Loading... plaece wait 
          </h1>
        </div>
        <h1
          class="title w-[80%] text-2xl text-gray-300 rounded-[3px] bg-gray-300 animate-pulse font-medium ml-[15px] group-hover:underline mt-[5px] -ml-[1px]"
        >
          Your request loading pleace wait...
        </h1>
        <p
          class="about-text  text-2xl text-gray-300 rounded-[3px] bg-gray-300 animate-pulse mt-[10px] max-h-[78px] overflow-hidden"
        >
          Latest information on Coronavirus Disease 2019 (COVID-19) from the
          County of Hawaii Civil Defense Agency:
          https://www.hawaiicounty.gov/coronavirus. Disease 2019 (COVID-19) from
          the County of Hawaii Civil Defense Agency:
          https://www.hawaiicounty.gov/coronavirus. Disease 2019 (COVID-19) from
          the County of Hawaii Civil Defense Agency:
          https://www.hawaiicounty.gov/coronavirus.
        </p>
      </div>
    </div>

    <!-- Random image -->
    <img v-if="$store.state.searchResult" class="rounded-xl mt-[1%] transition-all" :src="`https://picsum.photos/445/820?${$route.params.value}`" alt="">
  </div>
  <Footer />
</template>

<script setup>
/* eslint-disable */
import Navigation from './components/NaviGation.vue'
import Sidenav from './components/Sidenav.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';
import Modal from '@/components/Modal.vue';

const route = useRoute()
const store = useStore()

if(store.state.searchValue == '') store.state.searchValue = route.params.value 
</script>
