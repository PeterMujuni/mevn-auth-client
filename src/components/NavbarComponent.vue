<template>
  <AppBar :links="links" @toggle-drawer="onToggleDrawer" :drawer="drawer"/>
  <NavDrawer :drawer="drawer" />
</template>

<script setup lang="ts">
// imports
import { ref } from 'vue'
// components
import NavDrawer from './molecules/NavDrawer.vue'
import AppBar from './molecules/AppBar.vue'

// STATE
const drawer = ref(false)

const links = [
  { title: 'Home', url: '/', icon: 'mdi-home' },
  { title: 'Login', url: '/login', icon: 'mdi-login' },
  { title: 'Register', url: '/register', icon: 'mdi-account-plus' },
]

// METHODS
const onToggleDrawer = (isOpen: boolean) => {
  drawer.value = isOpen
}

</script>

<style lang="scss" scoped></style>
