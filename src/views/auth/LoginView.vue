!
<template>
  <div>
    <LoginForm @submit-data="onSubmit" />
  </div>
</template>

<script setup lang="ts">
// imports
import { ref } from 'vue'
// components
import LoginForm from '../../components/templates/LoginForm.vue'
// composables
import { useAuthStore } from '../../stores/auth'
import { useRouter } from 'vue-router'
// interfaces
import type { ILoginData } from '@/interfaces/apis'


// STATE
const authStore = useAuthStore()
const errorMessage = ref<string>('')

const router = useRouter()

// METHODS
const onSubmit = async (payload: ILoginData) => {
  await authStore
    .login(payload)
    .then((res) => {
      router.replace({ name: 'user' })
    })
    .catch((err) => {
      errorMessage.value = err.message
    })
}
</script>

<style scoped></style>
