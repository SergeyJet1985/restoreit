<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="item in items" :key="item.catalog">
      <template v-slot:header>
        <v-layout class="item" justify-space-between align-center row>
          <div> {{item.catalog}} </div>
          <div>
            <v-btn @click="removeCatalog(item._id)" class="item_icon" outline fab dark small color="pink">
              <v-icon dark>remove</v-icon>
            </v-btn>
          </div>
        </v-layout>
      </template>
      <v-card>
        <v-card-text v-if="item.model" class="card__item">
        <v-layout v-for="model in item.model" :key="model.name" class="item" align-center row>
          <v-flex lg10  >
            {{model.name}}
          </v-flex>
          <v-flex lg2>
            <v-btn fab dark small color="green">
              <v-icon dark>add</v-icon>
            </v-btn>
            <v-btn @click="deleteModel(item._id, model.name)" fab dark small color="pink">
              <v-icon dark>remove</v-icon>
            </v-btn>
            <v-btn @click="editModel(item._id, model)" fab dark small color="cyan">
              <v-icon dark>edit</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        </v-card-text>
         <v-card-text  class="card__item">
        <v-layout class="item" justify-start align-center row>
          <v-btn @click="addBrand(item._id)" outline fab dark small color="blue darken-1">
            <v-icon dark>add</v-icon>
          </v-btn>
          <input type="file" id="fileBrand" name="userFile">
          <v-text-field
            v-model="name"
            label="Модель"
            required
          ></v-text-field>
        </v-layout>
        </v-card-text> 
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>


<script>
import axios from 'axios';
import addBrand from './addBrand';

export default {
  name:'CatalogAdmin',
  compontents:{
    addBrand,
  },
  data(){
    return{
      name:null,
    }
  },
  props:{
    items: Array,
  },
  
  methods:{
    deleteModel(id, brand){
      const model = {
        id:id,
        model:brand
      }
      this.$store.dispatch('deleteModel', model);
    },
    removeCatalog(id){
      this.$store.dispatch('deleteCatalog', id);
    },
    editModel(id,item){
      const modelData={
        id:id,
        name:item.name,
        img:item.img,
        service:item.service,
      }
      this.$store.dispatch('editModel', modelData);
    },
    addBrand(id){
      const upload = new FormData();
      const imagefile = document.querySelector('#fileBrand');
      upload.append('file', imagefile.files[0]);
      const model = {name:this.name}
      const data = {
        _id:id,
        model:model,
      }
      console.log(model);
      upload.append("name", this.name);
      axios.post(`http://localhost:3000/addBrand/${id}`, upload, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `jwt ${localStorage.getItem('token')}`,
            }
          })
    }
  }
}
</script>

<style lang="scss">
.item_icon{

}
.card__item{
  padding: 0;
  .item{
    padding-left:20px;
    
    border-radius: 5px;
  }
  .item:hover{
    background-color: rgba(133, 134, 135, .2);
  }
}

</style>
