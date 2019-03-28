<template >
    <window v-if="isLogin" />
    <login v-else />

</template>

<script>
import Window from './components/window'
import Login from './login'


export default {
  name:'Panel',
  components:{
    Window,
    Login,
  },

  computed:{
    JWT(){
      return this.$store.state.JWT
    },
    isLogin(){
      if(this.JWT){
        return true
      }
      return false
    }
  }
}
</script>
