<template>
  <div>
    <h1>Welcome!</h1>
    <RegisterForm @submit-data="onSubmit" />
  </div>
</template>

<script setup lang="ts">
//imports
import { reactive, ref } from 'vue'
// components
import RegisterForm from '@/components/templates/RegisterForm.vue'
// composables
import { useAuthStore } from '../../stores/auth'
import { useRouter } from 'vue-router'
// interfaces
import type { IRegisterData } from '@/interfaces/apis'


// STATE
const authStore = useAuthStore()
const errorMessage = ref<string>('')

const router = useRouter()

// METHODS
const onSubmit = async (payload: IRegisterData) => {
  await authStore
    .register(payload)
    .then((res) => {
      router.replace({ name: 'login' })
    })
    .catch((err) => {
      errorMessage.value = err.message
    })
}
</script>

<style scoped></style>
