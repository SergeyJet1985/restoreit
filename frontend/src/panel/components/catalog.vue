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
          <v-flex xs10  >
            {{model.name}}
          </v-flex>
          <v-flex xs2>
            <v-btn fab dark small color="green">
              <v-icon dark>add</v-icon>
            </v-btn>
            <v-btn fab dark small color="pink">
              <v-icon dark>remove</v-icon>
            </v-btn>
            <v-btn fab dark small color="cyan">
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

export default {
  name:'CatalogAdmin',
  compontents:{
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
    removeCatalog(id){
      this.$store.dispatch('deleteCatalog', id);
    },
    addBrand(id){
      const sv = this.name;
      const model = {model:{
        name:this.name
      }}
      const data = {
        _id:id,
        model:model,
      }
      this.$store.dispatch('addBrand', data);
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
