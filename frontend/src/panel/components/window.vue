<template >
  <v-container class="window">
    <v-layout column fill-height class="window__block">
      <add-component/>
        <catalog :items="items"  />
      <catalog/>
    </v-layout>
  </v-container>
</template>

<script>
import addComponent from './addComponent'
import catalog from './catalog'

export default {
  name:'Window',
  data(){
    return{
      info:null,
    }
  },
  components:{
    addComponent,
    catalog,
  },
  methods: {
    Add(){
      alert('click');
    },
    Push(){
            alert('click');
        },
  },
  computed:{
    items(){
      return this.$store.state.catalog
    }
  },
  mounted() {
    // this.$store.dispatch('test');
  }
}
</script>

<style lang="scss">
.window{
  height: 100%;
  &__block{
    padding: 20px;
    border: 2px solid black;
    border-radius: 25px;
    width: 100%;
    min-height: calc(100% - 80px); 
    height: auto;
  }
  
}
</style>
