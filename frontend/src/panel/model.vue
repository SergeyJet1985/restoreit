<template>
  <div class="window">
    <div class="model__conteiner">
      <div class="model__conteiner-item">
        <div class="item__header">
          <h1>{{info.name}}</h1>
        </div>
      </div>
      <div class="model__conteiner-item">
        <div  class="item__rule">
          <div class="item__rule-item">
            Ремонтные работы
          </div>
          <div class="item__rule-item">
            Стоимость
          </div>
        </div>
      </div>
      <div v-if="info.service"  class="model__conteiner-item">
        <div v-for="item in info.service" :key="item.name" class="item__created">
          <div class="item__created-item">
            {{item.product}}
          </div>
          <div class="item__created-item">
            <v-btn @click="removeService(item.product,item.price)" outline fab dark small color="indigo">
              <v-icon dark>delete</v-icon>
            </v-btn>
          </div>
          <div class="item__created-item">
            {{item.price}}
          </div>
        </div>
      </div>
      <div class="model__conteiner-item">
        <div  class="item__edit">
          <div class="item__edit-item__right">
            <v-text-field
            v-model="serviceAdd"
            label="Услуга"
          ></v-text-field>
          </div>
          <div class="item__edit-item">
            <v-btn @click="Add()" outline fab dark small color="indigo">
              <v-icon dark>add</v-icon>
            </v-btn>
          </div>
          <div class="item__edit-item">  
          <v-text-field
            v-model="priceAdd"
            label="Стоимость"
          ></v-text-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"model",
    data(){
      return{
        serviceAdd:null,
        priceAdd:null,
      }
    },
    computed:{
      info(){
        return this.$store.state.model       
      }
    },
    // created(){
    //   this.$store.dispatch('getService',this.info)
    // },
    methods:{
      Add(){
        const data = {
          _id:this.info.id,
          name:this.info.name,
          product: this.serviceAdd,
          price: this.priceAdd
        }
        this.$store.dispatch('addService',data)
      },
      removeService(product,price){
        const model = {
          _id:this.info.id,
          name:this.info.name,
          product:product,
          price:price,
        }
        this.$store.dispatch('deleteService', model);
      }
    }

  }
</script>

<style lang="scss">
.window{
  margin: 25px 25px 25px 25px;
  border: 1px solid rgb(70, 70, 70);
  border-radius: 50px;
  height: calc(100% - (70px));
  .model__conteiner{
    display: -webkit-flex; 
    -webkit-flex-direction: column;
    display: flex;
    flex-direction: column;
    &-item{
      display: -webkit-flex; 
      -webkit-flex-direction: row;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .item{
        &__header{

        }
        &__rule{
          display: -webkit-flex; 
          -webkit-flex-direction: row;
          display: flex;
          flex-direction: row;
          border-bottom:1px solid #757373;
          &-item{
            margin:0 50px;
          }
        }
        &__created{
          display: -webkit-flex; 
          -webkit-flex-direction: row;
          display: flex;
          flex-direction: row;
          
          border-bottom:1px solid #757373;
          &-item{
            margin:0 80px;
          }
        }
        &__edit{
          display: -webkit-flex; 
          -webkit-flex-direction: row;
          display: flex;
          flex-direction: row;
          &-item{
            margin:0 0px;
            .v-input{
              width:250px;
            }
            &__right{
              .v-input{
              width:250px;
              }
              .theme--light.v-label {
              left:150px!important;
              }
            }
          }
        }
      }
    }
  }

  
}
</style>
