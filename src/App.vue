<script setup lang="ts">
import AppBar from './components/AppBar.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
    <v-app>
        <AppBar v-if=" $route.path != '/' && $route.path != '/user/create'" />
        <RouterView />
    </v-app>
</template>

<style scoped></style>
