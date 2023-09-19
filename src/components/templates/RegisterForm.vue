<template>
  <v-card class="mx-auto mt-10" max-width="444" title="User Registration" elevation="4">
      <v-container>
        <v-text-field
          v-model="submittedData.first"
          color="primary"
          label="First name"
          variant="underlined"
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          v-model="submittedData.last"
          color="primary"
          label="Last name"
          variant="underlined"
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          v-model="submittedData.email"
          color="primary"
          label="Email"
          variant="underlined"
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          v-model="submittedData.password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          v-model="submittedData.confirm_password"
          color="primary"
          label="Confirm password"
          placeholder="Confirm your password"
          variant="underlined"
          :rules="[required]"
        ></v-text-field>

        <v-checkbox
          v-model="submittedData.terms"
          color="secondary"
          label="I agree to site terms and conditions"
          :rules="[required]"
        ></v-checkbox>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions @click="submitData()">
        <v-spacer></v-spacer>

        <v-btn color="success">
          Complete Registration
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ref } from 'vue'

// STATE
const submittedData = reactive({
  first: null,
  last: null,
  email: null,
  password: null,
  confirm_password: null,
  terms: false
})

const emits = defineEmits(['SubmitData'])

// METHODS
const submitData = () => {
  console.log("submit button pressed: ", submittedData);
  emits('SubmitData', submittedData)
}
const required = (v: boolean | string | null) => {
  return !!v || 'Field is required'
}
</script>
