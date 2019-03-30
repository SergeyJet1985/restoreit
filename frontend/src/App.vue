<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer class="navigations" v-model="drawer" clipped fixed app>
        <navigation-link v-for="item in Links" :key="item.id" :title="item.title" :icon="item.icon" :link="item.link" />
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left >
        <v-toolbar-side-icon class="SideIcon" @click.stop="drawer = !drawer"><v-icon>menu</v-icon></v-toolbar-side-icon>
        <v-toolbar-title class="block_title" >Restore It</v-toolbar-title>
        <v-layout class="navigation__button"   align-center justify-center row fill-height>
            <navigation-button class="navigation__button" v-for="item in Links" :key="item.id" :title="item.title" :link="item.link"/>
        </v-layout>
      </v-toolbar>
      <v-content style="padding:70px 0 0 0;">
          <router-view></router-view>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>
<script>
import navigationLink from './components/navigation/navigationLink'
import navigationButton from './components/navigation/navigationButton'

export default {
  data: () => ({
      drawer: false
    }),
  components:{
    navigationLink,
    navigationButton,
  },
  computed:{
    Links(){
        return this.$store.state.Links.items
      },
  }
}
</script>


<style lang="scss">
@media only screen and (min-width: 769px) {
    .SideIcon,
    .navigations{
      display: none;
    }
}
@media only screen and (max-width: 769px) {
    .navigation{
      &__button{
        display: none;
      }
    }
    .block_title{
      width:100%;
    }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
