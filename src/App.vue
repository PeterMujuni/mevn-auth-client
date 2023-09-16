<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponentVue from './components/NavbarComponent.vue'
</script>

<template>
  <div id="app">
    <v-app>
      <NavbarComponentVue />
    </v-app>
    <RouterView />
  </div>
</template>

<style scoped lang="scss"></style>
