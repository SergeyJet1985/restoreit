<template>
  <div>
    <v-flex xs1>
    <v-btn color="black" @click="Push()" outline>{{title}}</v-btn>
    </v-flex>
  </div>
</template>


<script>
export default {
    name:"NavigationButton",
    props:{
        link: String,
        title: String,
    },
    methods:{
        Push(){
            this.$router.push(this.link)
        },
    }
}
</script>
