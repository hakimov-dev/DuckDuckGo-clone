<template>
  <Navigation />
  <Sidenav />
  <div class="results">
    <div
      class="cards flex items-center flex-col mt-[4%]"
      v-if="$store.state.searchResult"
    >
      <div
        class="card group w-[55%] md:mr-[30%] cursor-pointer xl:mr-[33%] max-h-[180px] p-[20px] overflow-hidden shadow-xl bg-[#282828] rounded-xl"
      >
        <div class="head-links flex items-center">
          <img
            class="rounded-full h-[25px] w-[25px]"
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwyK2husUlO6TF4bsP2Jo-sW0i3BQW1u_AnpkybZpNAWJQntyQ6bfdGek"
            alt=""
          />
          <h1 class="text-[16px] text-white opacity-90 ml-[15px]">
            hi Hello world!
          </h1>
        </div>
        <h1
          class="title text-2xl font-medium text-white opacity-90 ml-[15px] group-hover:underline mt-[5px] -ml-[1px]"
        >
          Hi how are you bro ? whats up?
        </h1>
        <p
          class="about-text text-white opacity-80 mt-[10px] max-h-[78px] overflow-hidden"
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

  <!-- For loading -->
    <div
      class="cards flex items-center flex-col mt-[4%]"
      v-else
    >
      <div
        v-for="item in 6"
        :key="item"
        class="card my-2 !select-none  group w-[55%] md:mr-[30%] cursor-progress xl:mr-[33%] max-h-[180px] p-[20px] overflow-hidden shadow-xl bg-[#282828] rounded-xl"
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
  </div>
</template>

<script setup>
/* eslint-disable */
import Navigation from './components/NaviGation.vue'
import Sidenav from './components/Sidenav.vue'
</script>
