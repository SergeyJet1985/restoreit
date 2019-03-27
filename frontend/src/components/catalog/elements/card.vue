<template>
<v-hover>
  <v-layout slot-scope="{ hover }"  @click="Push()" class='card' align-center justify-center column fill-height>
      <v-card >
        <v-img
          v-model="img"
          :src="img"
          :aspect-ratio="1"
        >
        </v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="text-xs-center" >{{title}}</h3>
             {{ text }} 
          </div>
        </v-card-title>
         <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal display-3"
            style="height: 100%;"
          >
            <v-btn outline class="card__icon" color="white card__icon">
              <span>Перейти</span>
              <v-icon >skip_next</v-icon>
            </v-btn>
          </div>
        </v-expand-transition>
      </v-card>  
  </v-layout>
  </v-hover>
</template>



</<script>
export default {
  name:'Card',
  props:{
    link: String,
    title: String,
    text: String,
    img: String,
  },
  methods:{
    Push(){
        this.$router.push(this.link)
    },
  }
}
</script>

<style lang="scss">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  background-color: rgba(255,153,51,0.6);
  position: absolute;
  width: 100%;
  .card{
    opacity: 1;
  }
}
.card{
  width: 250px;

}
h3{
  width: 200px;
  font-size: 26px;
}
@media only screen and (max-width: 769px) {
  .card{
  width: 150px;
  }
  h3{
  width: 100px;
  font-size: 16px;
  }
}
</style>

