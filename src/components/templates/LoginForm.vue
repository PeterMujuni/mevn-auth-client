<template>
  <v-sheet class="w-100 h-screen d-flex justify-center align-md-center pt-16" rounded>
    <v-card class="px-6 py-8" max-width="444" max-height="300" min-width="340" >
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="submittedData.email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="submittedData.password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
// imports
import { ref, reactive } from 'vue';

  // STATE
  const submittedData = reactive({
  email: null,
  password: null,
})
  const form = ref(false)
  const loading = ref(false)

  const emits = defineEmits(['SubmitData'])

  // METHODS
  const onSubmit = () => {
      if (!form.value) return

      loading.value = true
      emits('SubmitData', submittedData)
      setTimeout(() => (loading.value = false), 2000)
    }

  const required = (v: boolean) => {
      return !!v || 'Field is required'
  }
  //
</script>