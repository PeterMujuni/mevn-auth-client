<template>
  <v-card class="mx-auto mt-10" max-width="444" title="User Registration" elevation="4">
    <v-container>
      <v-text-field
        v-model="first"
        color="primary"
        label="First name"
        variant="underlined"
        :rules="[required]"
      ></v-text-field>

      <v-text-field
        v-model="last"
        color="primary"
        label="Last name"
        variant="underlined"
        :rules="[required]"
      ></v-text-field>

      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
        :rules="[required]"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
        :rules="[required]"
      ></v-text-field>

      <v-text-field
        v-model="confirm_password"
        color="primary"
        label="Confirm password"
        placeholder="Confirm your password"
        variant="underlined"
        :rules="[required]"
      ></v-text-field>

      <v-checkbox
        v-model="terms"
        color="secondary"
        label="I agree to site terms and conditions"
        :rules="[required]"
      ></v-checkbox>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="success">
        Complete Registration
        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// STATE
const first = ref(null)
const last = ref(null)
const email = ref(null)
const password = ref(null)
const confirm_password = ref(null)
const terms = ref(false)

// METHODS
const required = (v: boolean | string | null) => {
    console.log("v: ", v);
    return !!v || 'Field is required'
}
</script>
