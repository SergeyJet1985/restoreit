
<template>
  <v-parallax
    height="300"
    src="https://c.wallhere.com/photos/81/d8/oppo_find_7_smartphone_touchscreen-994394.jpg!d"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <div class="block__company-body">
         <svg style="width:100px;height:100px" viewBox="0 0 24 24">
              <path fill="#fff" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
          </svg>
        <div>
        <span>Ремонт техники Apple</span>
        </div>
      </div>
      <div class="block__company-body">
        <svg style="width:100px;height:100px" viewBox="0 0 24 24">
            <path fill="#fff" d="M15,5H14V4H15M10,5H9V4H10M15.53,2.16L16.84,0.85C17.03,0.66 17.03,0.34 16.84,0.14C16.64,-0.05 16.32,-0.05 16.13,0.14L14.65,1.62C13.85,1.23 12.95,1 12,1C11.04,1 10.14,1.23 9.34,1.63L7.85,0.14C7.66,-0.05 7.34,-0.05 7.15,0.14C6.95,0.34 6.95,0.66 7.15,0.85L8.46,2.16C6.97,3.26 6,5 6,7H18C18,5 17,3.25 15.53,2.16M20.5,8A1.5,1.5 0 0,0 19,9.5V16.5A1.5,1.5 0 0,0 20.5,18A1.5,1.5 0 0,0 22,16.5V9.5A1.5,1.5 0 0,0 20.5,8M3.5,8A1.5,1.5 0 0,0 2,9.5V16.5A1.5,1.5 0 0,0 3.5,18A1.5,1.5 0 0,0 5,16.5V9.5A1.5,1.5 0 0,0 3.5,8M6,18A1,1 0 0,0 7,19H8V22.5A1.5,1.5 0 0,0 9.5,24A1.5,1.5 0 0,0 11,22.5V19H13V22.5A1.5,1.5 0 0,0 14.5,24A1.5,1.5 0 0,0 16,22.5V19H17A1,1 0 0,0 18,18V8H6V18Z" />
        </svg>
        <div>
        <span>Ремонт техники android</span>
        </div>
      </div>
    </v-layout>
  </v-parallax>
</template>

<script>
  export default {
    name:'company',
  }
</script>

<style lang="scss">
.v-parallax__content{
  .layout{
    align-items: flex-start;
    .block__company-body{
      display: -webkit-flex; 
      -webkit-flex-direction: row;
      display: flex;
      flex-direction: row;
      justify-content:flex-start;
      padding-left:50px;
      div{
      display: -webkit-flex; 
      -webkit-flex-direction: row;
      display: flex;
      flex-direction: column;
      justify-content:center; 
      font-size: 35px;
      color:white;
      }
    }
  }
}
</style>