<template >
  <v-container class="window">
    <v-layout column fill-height class="window__block">
      <v-flex xs12>
        <v-layout justify-space-between row>
          <v-btn outline color="blue darken-1" @click="Refresh()">
            Обновить
          </v-btn>
          <v-btn outline color="red darken-1" @click="SingOut()">
            Выйти
          </v-btn>
        </v-layout>
      </v-flex>
      <add-component :typeAdd="typeAdd"/>
        <catalog :items="items"  />
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
      typeAdd:'Catalog',
    }
  },
  components:{
    addComponent,
    catalog,
  },
  created(){
    this.$store.dispatch('catalog')
  },
  methods: {
    SingOut(){
      const sv = this;
      localStorage.removeItem('token');
      document.location.reload(true);
    },
    Refresh(){
      this.$store.dispatch('catalog')
    },
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
  max-width: calc(100% - 50px);
  &__block{
    padding: 20px;
    width: 100%;
    min-height: calc(100% - 80px); 
    height: auto;
    margin-bottom: 25px;
  }
}

</style>
