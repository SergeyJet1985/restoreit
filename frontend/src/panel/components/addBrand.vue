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
export default {
  name:'Brand',
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
      const item= this.name;
      if (this.typeAdd === 'Catalog'){  //на сервере вызовется create
        this.$store.dispatch('addCatalog', item);
      }
      if (this.typeAdd === 'Brand'){  //на сервере вызовется insert

      }
      this.name = null;
    },
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
