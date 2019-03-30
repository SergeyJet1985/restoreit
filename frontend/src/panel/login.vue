<template>
  <v-container class="window">
    <v-layout align-center column class="window__block">
      <div class="window__login">
        <v-text-field
          v-model="login"
          label="Логин"
        ></v-text-field>
          <v-text-field
          v-model="password"
          label="Пароль"
        ></v-text-field>
        <v-btn outline color="green darken-1" @click="Login()">
          Войти
        </v-btn>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name:'Login',
    data(){
      return{
        login: null,
        password: null,
      }
    },
    methods:{
      Login(){
        const user = {
          'login': this.login,
          'password': this.password
        }
        this.$store.dispatch('signIn', user);
        
      }
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
  &__login{
    width: 350px;
  }
  
}
</style>