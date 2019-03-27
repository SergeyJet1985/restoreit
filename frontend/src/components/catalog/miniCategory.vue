<template>
  <div>
    <v-container class="block" grid-list-sm>
            <v-layout row wrap >
      <card v-for="item in Categoryis" :key="item.id" :title="item.title" :link="item.link" :img="item.img" :text="item.text" />
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
        return this.$store.state.miniCategory.items
      },
  }
  
}
</script>

<style lang="scss">
.block{
  margin-top:40px;
}
</style>
