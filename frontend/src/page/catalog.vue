<template>
  <div>
    <v-layout align-center justify-center row fill-height>
      <h1>Ремонт телефонов, смартфонов, планшетов</h1>
    </v-layout>
    <category/>
  </div>
</template>

<script>
import category from '@/components/catalog/category'


export default {
  name:'Catalog',
  components:{
    category,
  }
}


</script>

<style lang="scss">

</style>
