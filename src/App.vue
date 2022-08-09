<template>
  <div :class="$store.state.modalOpen ? '!overflow-hidden !h-[100vh]' : ''">
    <router-view />
  </div>
</template>
