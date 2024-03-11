<script lang="ts">
import AppBar from '@/components/AppBar.vue';

export default {

data: () => ({
  book : {
    titulo: "",
    autor: "",
    exemplares: 0,
  }
}),

methods: {

},
}
</script>

<template>
    <v-app>
        <h1>Emprestimos</h1>
    </v-app>
</template>

<style scoped></style>
