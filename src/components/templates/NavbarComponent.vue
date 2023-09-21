<template>
  <AppBar :is-mobile="isMobile" :links="links" @toggle-drawer="onToggleDrawer" :drawer="drawer"/>
  <NavDrawer v-if="isMobile" :links="links" :drawer="drawer" />
  <UserNavDrawer v-if="isAuthenticated && user" :user="user"/>
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
import { useAuthStore } from '@/stores/auth';

// STATE
const authStore = useAuthStore()
const drawer = ref(false)
// const isMobile = ref(false)

const {name} = useDisplay()

// COMPUTED
const isMobile = computed(() => {
  
  if(name.value === 'xs') return true

  return false
})

const user = computed(() => {
    return authStore.user
})

const isAuthenticated = computed(() => {
    return authStore.isAuthenticated
})

const links = computed(() => {
 return isAuthenticated.value ? [
  { title: 'Home', url: '/', icon: 'mdi-home' },
  { title: 'Logout', url: '', icon: 'mdi-logout' },
] : [
  { title: 'Home', url: '/', icon: 'mdi-home' },
  { title: 'Login', url: '/login', icon: 'mdi-login' },
  { title: 'Register', url: '/register', icon: 'mdi-account-plus' },
]
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
