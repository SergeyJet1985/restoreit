<template>
<v-container grid-list-md text-xs-center>
  <v-layout align-center justify-center column fill-height>
    <v-img
      class="block__service-image"
      :src='model.img'
      :aspect-ratio="1"
    >
    </v-img>
     {{model.mark}}
    {{model.name}}

  </v-layout>
</v-container>
</template>

<script>
  export default {
    name:'service',
    computed:{
      model(){
        return this.$store.state.service
      }
    }
  }
</script>

<style lang="scss">
.block__service{
  display: -webkit-flex; 
  -webkit-flex-direction: row;
  flex-direction: row;
  justify-content: center;
  &-image{
    height: 250px;
    width: 250px;
    border-radius: 10px;
  }
}
</style>