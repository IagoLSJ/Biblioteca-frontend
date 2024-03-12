<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>



<template>


  <v-app>
    <div>
      <v-btn color="success" class="mr-4" style="margin-top: 80px;" @click="dialog = true">
        Novo emprestimo
      </v-btn>
      <v-btn color="success" class="mr-4" style="margin-top: 80px;" @click="dialog = true">
        Devolução
      </v-btn>
    </div>
    <v-table style="margin-top: 100px; margin-left: 20px; margin-right: 20px;">
      <thead>
        <tr>
          <th class="text-left">
            Usuário
          </th>
          <th class="text-left">
            Livro
          </th>
          <th class="text-left">
            Data de devolução
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in 10">
          <td>Iago</td>
          <td>Qualquer livro</td>
          <td>19/03/2024</td>
        </tr>
      </tbody>
    </v-table>

   
   

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Your application will relaunch automatically after the update is complete."
        title="Update in progress"
      >
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  
  </v-app>
</template>
