<template>
     <Navigation />
     <Sidenav />
    <div class="results" @click="$store.state.sidenavOpen = false">
        <h1>Results component</h1>
    </div>
</template>

<script setup>
/* eslint-disable */
import Navigation from './components/NaviGation.vue'
import Sidenav from './components/Sidenav.vue';

</script>
