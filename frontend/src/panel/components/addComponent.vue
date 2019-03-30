<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px" max-height="500px">
      <template v-slot:activator="{ on }">
        <v-btn outline color="primary" dark v-on="on">
            <v-icon>
              playlist_add
            </v-icon>
            <span>Добавить каталог</span>
          </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Добавление компонента</v-card-title> 
        <v-card-actions>
          <v-layout align-center justify-center column>
            <form id="uploadForm" name="uploadForm" enctype="multipart/form-data">
              <input type="file" id="file" name="userFile">
            </form>
          <v-text-field
            v-model="name"
            label="Название каталога"
            required
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-flex xs12>
          <v-btn v-if="name" outline color="green darken-1" text @click="Add()">Создать</v-btn>
          <v-btn outline color="red darken-1" text @click="dialog = false"><v-icon>exit_to_app</v-icon> Выйти</v-btn>
          </v-flex>
          </v-layout>
        </v-card-actions>   
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name:'addComponent',
  data(){
    return{
      name: null,
      dialog: false,
    }
  },
  props:{
    typeAdd: String,
  },
  computed:{
  },
  methods: {
    Add(){
      this.dialog = false;
      const upload = new FormData();
      const imagefile = document.querySelector('#file');
      const catalogname = this.name
      upload.append('file', imagefile.files[0]);
      upload.append("name", catalogname);
      axios.post('http://194.5.157.38:3000/addCatalog', upload, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `jwt ${localStorage.getItem('token')}`,
            }
          })
    }
  },
}
</script>

<style lang="scss">
.modal{
  &__input{
    border: 1px solid grey;
    margin: 15px;
  }
}
</style>
