<template >
  <v-container class="window">
    <v-layout fill-height>
      <div class="window__block">
        {{info}}
      </div>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name:'Window',
  data(){
    return{
      info:null,
    }
  },
  mounted() {
    this.$store.dispatch('test');
  }
}
</script>

<style lang="scss">
.window{
  height: 100%;
  &__block{
    border: 2px solid black;
    border-radius: 25px;
    width: 100%;
    height: calc(100% - 80px); 
  }
  
}
</style>
