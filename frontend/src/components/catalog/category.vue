<template>
  <v-tabs outline class="tabs" color="transparent" slider-color="blue"  centered>
    <v-tab
      v-for="item in Categoryis"
      :key="item.id"
    >
      {{item.title}}
    </v-tab>
    <v-tab-item
      v-for="item in Categoryis"
      :key="item.id">
        <v-card color="transparent" flat>
          <v-container  grid-list-sm>
            <v-layout class="block" align-start  wrap fill-height>
              <list-category class="block__list" v-for="model in item.models" :key="model" :model="model" />
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
    Categoryis(){
        return this.$store.state.smartphone.items
      },
  }
}


</script>

<style lang="scss">
.tabs{
  background-color: none;
}
.block{
  justify-content: start;
  &__list{
    margin: 15px;
  }
}
@media only screen and (max-width: 769px) {
  .card{
  width: 100px;
  }
  .block{
  justify-content: center;
  &__list{
    margin: 15px;
  }
  }
}
</style>