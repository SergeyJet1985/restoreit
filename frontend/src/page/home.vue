<template>
  <div>
    <v-layout align-center justify-center row fill-height>
      <h1>Ремонт телефонов, смартфонов, планшетов</h1>
    </v-layout>
      <miniCategory/>
  </div>
</template>

<script>
import miniCategory from '@/components/catalog/miniCategory'
export default {
  name:'Home',
  components:{
    miniCategory,
  }
}
</script>

<style lang="scss">

</style>

