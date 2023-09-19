<template>
  <div>
    <RegisterForm @submit-data="onSubmit"/>
  </div>
</template>

<script setup lang="ts">
//imports
import { reactive, ref } from 'vue'
// components
import RegisterForm from '@/components/templates/RegisterForm.vue'
// composables
import { useAuthStore } from '../../stores/auth'
import type { IRegisterData } from '@/interfaces/apis'
import { useRouter } from 'vue-router';

const router = useRouter()

// STATE
const authStore = useAuthStore()

// const registerData: IRegisterData = reactive({
//   first: '',
//   last: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// })

const errorMessage = ref<string>('')

// METHODS
const onSubmit = async (payload: IRegisterData) => {
  console.log("payload: ", payload);
    authStore.register(payload)
  .then(res => {
    router.replace({name: 'login'})
  })
  .catch(err => {
    errorMessage.value = err.message
  })
}
</script>

<style scoped></style>
