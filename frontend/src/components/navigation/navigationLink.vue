<template>
    <div>
        <v-list>
            <v-list-tile @click="Push()">
            <v-list-tile-action>
                <v-icon>{{icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>{{title}}</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>  
</template>

<script>
export default {
    name:"NavigationLink",
    props:{
        link: String,
        title: String,
        icon:String,
    },
    methods:{
        Push(){
            this.$router.push(this.link)
        },
    }
}
</script>
