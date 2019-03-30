<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="(item, i) in items" :key="i">
      <template v-slot:header>
        <v-layout class="item" justify-space-between align-center row>
          <div class="item_catalog"> 
            {{item.catalog}} 
            <v-text-field
              class="item_catalog-input"
              v-model="mark[i]"
              label="Добавить марку"
              required
            ></v-text-field>
            <v-btn @click="addMark(item._id,i)" class="item_icon" outline fab dark small color="pink">
              <v-icon dark>add</v-icon>
            </v-btn>
          </div>
          <div>
            <v-btn @click="removeCatalog(item._id)" class="item_icon" outline fab dark small color="pink">
              <v-icon dark>remove</v-icon>
            </v-btn>
          </div>
        </v-layout>
      </template>
      <v-card>
        <v-card-text v-if="item.model" class="card__item">
        <v-layout v-for="(model, n) in item.model" :key="n" class="item" align-center row>
          <v-flex lg10  >
            {{model.mark}} {{model.name}}
          </v-flex>
          <v-flex lg2>
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
          <v-btn @click="addBrand(item._id,i)" outline fab dark small color="blue darken-1">
            <v-icon dark>add</v-icon>
          </v-btn>
          <v-select
            v-model="enterMark[i]"
            :items="item.Marks"
            label="Марка"
            outline
          ></v-select>
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
      mark:[],
      enterMark:[],
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
    addMark(id, i){
      const dataMark = {
        _id:id,
        mark:this.mark[i],
      }
      this.$store.dispatch('addMark', dataMark);
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
    addBrand(id,i){
      const upload = new FormData();
      const imagefile = document.querySelector('#fileBrand');
      upload.append('file', imagefile.files[0]);
      upload.append("name", this.name);
      upload.append("mark", this.enterMark[i]);
      axios.post(`http://194.5.157.38/addBrand/${id}`, upload, {
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
.item_catalog{
  display: -webkit-flex; 
  -webkit-flex-direction: row;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &-input{
    margin-left:20px;
  }
}
.item_icon{

}
.card__item{
  padding: 0;
  
  .item{
    padding-left:20px;
    align-items: center;
    border-radius: 5px;
  }
  .item:hover{
    background-color: rgba(133, 134, 135, .2);
  }
}

</style>
