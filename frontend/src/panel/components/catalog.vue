<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="item in items" :key="item">
      <template v-slot:header>
        <div> {{item.type}} </div>
      </template>
      <v-card>
        <v-card-text class="card__item">
        <v-layout class="item" align-center row>
          <v-flex xs10  >
            {{item.item}}
          </v-flex>
          <v-flex xs2>
            <v-btn fab dark small color="pink">
              <v-icon dark>remove</v-icon>
            </v-btn>
            <v-btn fab dark small color="cyan">
              <v-icon dark>edit</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>


 <script>
export default {
  name:'CatalogAdmin',
  props:{
    items: Array,
  },
}
</script>

<style lang="scss">
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
