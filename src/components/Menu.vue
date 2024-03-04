<script setup lang="ts">

</script>

<template>
  <div class="topside">
    

    <p>Biblioteca</p>
    <div class="menu">
        <ul>
            <li><a href="/books/create">Livros</a></li>
            <li>Emprestimos</li>
            <li>Usuários</li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
.topside{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    background-color: #113468;

    color: white;


}

ul{
    list-style: none;
    display: flex;
    gap: 10px;
}
</style>
