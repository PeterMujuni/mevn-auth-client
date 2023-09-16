<template>
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list :items="items"></v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    drawer: {
        type: Boolean,
        required:true,
    }
})

const items = ['Link', 'Link']

// COMPUTED
const drawer = computed(() => props.drawer)
</script>

<style scoped></style>
