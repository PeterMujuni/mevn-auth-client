<template>
  <AppBar :is-mobile="isMobile" :links="links" @toggle-drawer="onToggleDrawer" :drawer="drawer"/>
  <NavDrawer v-if="isMobile" :links="links" :drawer="drawer" />
  <UserNavDrawer />
</template>

<script setup lang="ts">
// imports
import { ref } from 'vue'
// components
import NavDrawer from '../molecules/SiteNavDrawer.vue'
import AppBar from '../molecules/AppBar.vue'
import UserNavDrawer from '../molecules/UserNavDrawer.vue';
// vuetify
import { useDisplay } from 'vuetify';
import { computed } from 'vue';
import { onMounted } from 'vue';

// STATE
const drawer = ref(false)
// const isMobile = ref(false)

const {name} = useDisplay()

const links = [
  { title: 'Home', url: '/', icon: 'mdi-home' },
  { title: 'Login', url: '/login', icon: 'mdi-login' },
  { title: 'Register', url: '/register', icon: 'mdi-account-plus' },
]

// COMPUTED
const isMobile = computed(() => {
  
  if(name.value === 'xs') return true

  return false
})

// METHODS
const onToggleDrawer = (isOpen: boolean) => {
  drawer.value = isOpen
}

// LIFE CIRCLES
// onMounted(() => {
//     console.log(mobile.value) // false
//   })
</script>

<style lang="scss" scoped></style>
