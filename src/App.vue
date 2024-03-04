<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
import CardBook from './components/CardBook.vue';
</script>

<template>
  <Menu />
<div class="container">
  <div class="cards">
    <CardBook v-for="n in 10"/>
  </div>
</div>
  
</template>

<style scoped>
.cards{
  display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
    
}
</style>
