<template>
  <div>
    <v-card v-if="user" class="mt-16 ms-5" max-width="344">
      <v-card-item>
        <v-card-title>User Info</v-card-title>
        <v-divider thickness="2" class="mb-5"></v-divider>
        <div>
          <div class="text-h6 mb-1">Username: {{ user.username}}</div>
          <div class="text-h6 mb-1">Email: {{ user.email }}</div>
          <div class="text-h6 mb-1">First Name: {{ user.first_name }}</div>
          <div class="text-h6 mb-1">Last Name: {{ user.last_name }}</div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn variant="outlined"> Edit </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { onBeforeMount } from 'vue';
import { computed } from 'vue';

// STATE
const authStore = useAuthStore()

const user = computed(() => {
    return authStore.userDetail
})

const getUser = async () => {
    await authStore.getUser()
}

onBeforeMount(async () => {
    await getUser()    
})
</script>

<style scoped></style>
