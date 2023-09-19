<template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="444" elevation="4">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="password"
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
import { ref } from 'vue';

  // STATE
  const form = ref(false)
  const email = ref(null)
  const password = ref(null)
  const loading = ref(false)

  // METHODS
  const onSubmit = () => {
      if (!form.value) return

      loading.value = true

      setTimeout(() => (loading.value = false), 2000)
    }

  const required = (v: boolean) => {
    console.log("v: ", v);
      return !!v || 'Field is required'
  }
  //
</script>