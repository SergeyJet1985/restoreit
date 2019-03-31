<template>
  <v-flex xs2 >
    <v-hover>
      <v-layout slot-scope="{ hover }"  @click="Push()" class='card' align-center justify-center column fill-height>
          <v-card >
            <v-img
              :src='model.img'
              :aspect-ratio="1"
            >
            </v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="text-xs-center" >{{model.name}}</h3>
              </div>
            </v-card-title>
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out v-card--reveal display-3"
                style="height: 100%;"
              >
                <v-btn @click="Push()" outline class="card__icon" color="white card__icon">
                  <span class="black--text">Стоимость</span>
                  <v-icon color="black">skip_next</v-icon>
                </v-btn>
              </div>
            </v-expand-transition>
          </v-card>  
      </v-layout>
    </v-hover>
  </v-flex>
</template>



</<script>
export default {
  name:'list',
  props:{
    model: Object,
  },
  methods:{
    Push(){
      this.$store.dispatch('loadModel', this.model);
      this.$router.push('service')
    },
  }
}
</script>

<style lang="scss">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  background-color: rgba(28, 29, 29, 0.418);
  position: absolute;
  width: 100%;
  .card__icon{
    width: 100%;
    opacity: 1;
  }
}
.card{
  width: 200px;

}
h3{
  width: 150px;
  font-size: 26px;
}
@media only screen and (max-width: 769px) {
  .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  background-color: rgba(28, 29, 29, 0.418);
  position: absolute;
  width: 100%;
  .card__icon{
    opacity: 1;
  }
  }
  .card{
  width: 150px;
  }
  h3{
  width: 100px;
  font-size: 16px;
  }
}
</style>


