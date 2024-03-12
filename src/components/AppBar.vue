<template>
    <v-app-bar :elevation="6" color="primary">
        <v-spacer></v-spacer>
        <v-app-bar-title>Biblioteca</v-app-bar-title>
        <div class="menu">
            <button @click="$router.push('/books/create/')">Livro</button>
            <button @click="$router.push('/emprestimos')">Emprestimos</button>
            <div class="profile">
                <span class="mdi mdi-account-circle"></span>
                <p>username</p>
            </div>

        </div>
    </v-app-bar>
</template>

<script>
export default {




}
</script>

<style>
.menu{
    display: flex;
    gap: 20px;
    margin-right: 20px;

}
.profile{
    display: flex;
    align-items: center;
    text-align: center;
    gap: 10px;
}
.profile > p{
    margin-bottom: 0;
}
</style>