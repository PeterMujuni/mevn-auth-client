<template>
  <v-app-bar :elevation="4">
    <v-toolbar-title>My files</v-toolbar-title>

    <v-spacer></v-spacer>

    <div v-if="!isMobile">
      <v-btn v-for="link in links" :key="link.title" variant="text" :prepend-icon="link.icon" :href="link.url" @click="link.title === 'Logout' && logout()" >{{ link.title }}</v-btn>
    </div>

    <v-app-bar-nav-icon v-if="isMobile" variant="text" @click.stop="toogle()"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script setup lang="ts">
// imports
import type { PropType } from 'vue';
import { ref } from 'vue'
// composables
import { useAuthStore } from '@/stores/auth';
import { useRouter, type useRoute } from 'vue-router';
// interfaces
import type {ILink} from '../../interfaces/links'

// STATE
const authStore = useAuthStore()
const router = useRouter()

const props = defineProps({
  drawer: {
    type: Boolean,
    required: true
  },
  links: {
    type: Array as PropType<ILink[]>,
    required: true,
  },
  isMobile: {
    type: Boolean,
    default: undefined
  }
})

const emits = defineEmits(['ToggleDrawer'])

// METHODS
const toogle = () => {
  emits('ToggleDrawer', !props.drawer)
}

const logout = async () => {
  console.log("logout");
  await authStore.logout().then(res => {
    router.replace({name: 'name'}).catch(err => {
      console.error(err.message)
    })
  })
}
</script>

<style scoped></style>
