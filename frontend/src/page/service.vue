<template>
<v-container grid-list-md text-xs-center>
  <v-layout align-center justify-center column fill-height>
    <v-img
      class="block__service-image"
      :src='model.img'
      :aspect-ratio="1"
    >
    </v-img>
    <h2>
      {{model.mark}}
      {{model.name}}
    </h2>
    <div>
      <div class="block__service-items" v-for="service in model.service" :key="service.product">
        <div class="items-service">
          <span>{{service.product}}</span>
        </div>
        <div class="items-service-price">
          <span>{{service.price}}</span>
        </div>
      </div>
    </div>

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
  align-items: flex-start;
  
  &-image{
    height: 250px;
    width: 250px;
    border-radius: 10px;
  }
  &-items{
    display: -webkit-flex; 
    -webkit-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid rgb(218, 217, 217);
    .items-service{
      display: -webkit-flex; 
      -webkit-flex-direction: column;
      flex-direction: column;
      font-size:20px;
      &-price{
        font-size:20px;
        margin-left: 25px;
      }
    }
  }
}
</style>