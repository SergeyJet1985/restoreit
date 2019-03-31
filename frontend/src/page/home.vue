<template>
  <div>
    <v-layout align-center justify-center column fill-height>
      <div class="block__company">
        <company/>
      </div>
    </v-layout>
      <miniCategory/>
    <div class="block__footer">
      <footer-map/>
      <div class="block__footer-text">
        <p>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#fff" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
          </svg>
          1-й Красногвардейский проезд, 21с1
        </p>
        <p>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#fff" d="M17.25,18H6.75V4H17.25M14,21H10V20H14M16,1H8A3,3 0 0,0 5,4V20A3,3 0 0,0 8,23H16A3,3 0 0,0 19,20V4A3,3 0 0,0 16,1Z" />
          </svg>
          +7(495)664-49-22
        </p>
        <p>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#fff" d="M18.84,7H16.22L10.5,4L4,7.41V17A2,2 0 0,1 2,15V7.17C2,6.5 2.28,6.06 2.81,5.81L10.5,2L18.05,5.81C18.5,6.09 18.78,6.5 18.84,7M7,8H20A2,2 0 0,1 22,10V19A2,2 0 0,1 20,21H7A2,2 0 0,1 5,19V10A2,2 0 0,1 7,8M20,11.67V10L13.5,13.31L7,10V11.67L13.5,15L20,11.67Z" />
          </svg>
          Info@restoreit.ru
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import company from '@/components/design/company'
import miniCategory from '@/components/catalog/miniCategory'
import footerMap from '@/components/design/footerMap'
export default {
  name:'Home',
  components:{
    miniCategory,
    company,
    footerMap,
  },
  created(){
    this.$store.dispatch('catalog');
  }
}
</script>

<style lang="scss">
.block{
  &__company{
    width: 100%;
  }
  &__footer{
    width: 100%;
    background-color: black;
    &-text{
      display: -webkit-flex; 
      -webkit-flex-direction: column;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      font-size: 20px;
      color: rgb(228, 224, 224);
    }
  }
}

@media only screen and (max-width: 640px) {
  .block{
    &__company{
      display: none;
    }
    &__footer{
      &-text{
        font-size: 15px;
      }
    }
  }
}

</style>

