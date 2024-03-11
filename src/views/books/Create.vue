<script lang="ts">
  import  router  from '../../router/index';
export default {

  data: () => ({
    book : {
      titulo: "",
      autor: "",
      exemplares: 0,
    },
    error:{
      body: "",
      isError: false
    }
  }),

  methods: {
    validate(book: { titulo: string; autor: string; exemplares: number; }): Boolean{

      if(book.titulo == ""){
        this.error.body = "O titulo do livro esta vazio"
        this.error.isError = true
        return false;
      }
      if(book.autor == ""){
        return false;

      }
      if(book.exemplares < 0){
        return false;
      }

      return true;
    },
    submit() {
   
    if(!this.validate(this.book)){
      return;
    }

      // service.create()
      router.push('/home')
    }
  },
}

</script>

<template>
  <v-app class="create">
    <v-form ref="form" lazy-validation>
      <v-text-field :counter="10" v-model="book.titulo" label="Titulo" required></v-text-field>

      <v-text-field label="Autor" v-model="book.autor" required></v-text-field>

      <v-text-field label="Exemplares" required v-model="book.exemplares"></v-text-field>

      <v-btn color="success" class="mr-4" @click="submit">
        cadastrar
      </v-btn>
      <v-alert closable text={{ error.title }} type="error"></v-alert>
    </v-form>
    
  </v-app>
</template>

<style scoped>
.create{
  margin-top: 100px;
}
</style>
