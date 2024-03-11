<script setup>
import CardBook from './CardBook.vue';
</script>

<template>
    <v-item-group class="list">
        <v-container grid-list-md>
            <v-layout wrap>
                <v-flex v-for="n in 3" :key="n">
                    <v-flex v-for="n in 10" :key="n">
                        <v-item>
                            <CardBook />
                        </v-item>
                    </v-flex>
                </v-flex>

            </v-layout>
        </v-container>
    </v-item-group>
</template>

<style>
.list{
    margin-top: 90px;
    display: flex;
    justify-content: center;
}
</style>