<template>
  <AppBar />
  <NavDrawer :drawer="drawer" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavDrawer from './molecules/NavDrawer.vue'
import AppBar from './molecules/AppBar.vue'
const drawer = ref(false)

</script>

<style lang="scss" scoped></style>
