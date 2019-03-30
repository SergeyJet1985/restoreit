<template>
  <div>
    <v-container class="block" grid-list-sm>
      <v-layout row wrap >
        <card v-for="(item, i) in Categoryis" :key="i" :index="i" :title="item.catalog" :img="item.img" :marks="item.Marks" :model="item.models" />
      </v-layout>
    </v-container> 
  </div>
</template>


</<script>
import card from './elements/card'
export default {
  name:'MiniCategory',
  components:{
    card,
  },
  computed:{
    Categoryis(){
        return this.$store.state.catalog
      },
  }
  
}
</script>

<style lang="scss">
.block{
  margin-top:40px;
}
</style>
