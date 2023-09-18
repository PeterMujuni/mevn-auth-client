<template>
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list :items="items">
      <v-list-item v-for="link in links" :prepend-icon="link.icon" :title="link.title" :value="link.url" :href="link.url"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
// interfaces
import type {ILink} from '../../interfaces/links'

const props = defineProps({
    drawer: {
        type: Boolean,
        required:true,
    },
    links: {
      type: Array as PropType<ILink[]>,
      required:true
    }
})

const items = ['Link', 'Link']

// COMPUTED
const drawer = computed(() => props.drawer)
</script>

<style scoped></style>
