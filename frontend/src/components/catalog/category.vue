<template>
  <v-tabs outline class="tabs" color="transparent" slider-color="blue"  centered>
    <v-tab
      v-for="item in Category.Marks"
      :key="item"
    >
      {{item}}
    </v-tab>
    <v-tab-item
      v-for="(item) in Category.Marks"
      :key="item">
      <v-card color="transparent" flat>
        <v-container  grid-list-sm>
          <v-layout class="block" align-center justify-center wrap>
            <div v-for="model in Category.model" :key="model.name">            
              <list-category class="block__list" v-if="model.mark==item" :model="model" /> 
            </div>
          </v-layout>
        </v-container>
      </v-card>
    </v-tab-item>
  </v-tabs>
  
</template>

<script>
import listCategory from './elements/list'


export default {
  name:'Category',
  components:{
    listCategory,
  },
  computed:{
    Category(){
        return this.$store.state.category;
      },
  }
}


</script>

<style lang="scss">
.tabs{
  background-color: none;
}
.container{
  .grid-list-sm{
    .block{
      justify-content: start;
      &__list{
        margin: 15px;
      }
    }
  }
}
 

@media only screen and (max-width: 769px) {
  .tabs{
    padding-bottom:25px;
  }
  .card{
  width: 100px;
  }
  .block{
  justify-content: center;
  &__list{
    margin: 15px 5px;
    
  }
  }
}
@media only screen and (max-width: 959px){
  .v-card{
    .container{
      padding: 0;
    }
  }

}
</style>