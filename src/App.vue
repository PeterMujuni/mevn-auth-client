<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import type NavbarComponentVue from './components/NavbarComponent.vue'
</script>

<template>
  <div id="app">
    <NavbarComponentVue />
    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>
