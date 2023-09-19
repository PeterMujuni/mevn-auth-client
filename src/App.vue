<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponentVue from './components/templates/NavbarComponent.vue'
</script>

<template>
  <div id="app">
    <v-app>
      <NavbarComponentVue />
      <v-main>
          <RouterView />
      </v-main>
    </v-app>
  </div>
</template>

<style scoped lang="scss"></style>
