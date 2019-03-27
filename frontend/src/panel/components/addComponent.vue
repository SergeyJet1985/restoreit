<template>
  <v-btn @click="Add()" outline large fab color="black">
    <v-icon>
      playlist_add
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name:'addComponent',
  methods: {
    Add(){
      const item={
        type:'smartphone',
        item:'samsung'
      }
      this.$store.dispatch('add', item);
    },
  },
}
</script>
