<template>
    <v-container class="pt-10">
      <v-form @submit.prevent="handleSubmit">
        <legend>Welcome back!</legend>
        <v-text-field v-model="form.email" label="email" name="email" />
        <v-text-field
          v-model="form.password"
          label="Password"
          name="password"
          type="password"
        />
        <v-btn type="submit" >Login</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  import  router  from '../../router/index';
  
  const form = reactive({
    username: "",
    password: "",
  });
  
  const handleSubmit = () => {
    router.push('/home')
  };
  </script>
  
  <style lang="scss" scoped>
  </style>