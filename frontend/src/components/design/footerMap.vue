<template>
  <div class="footer__yandex-map">
<yandex-map
  :coords="[55.750028, 37.534397]"
  zoom="15"
  style="width: 500px; height: 250px;"
  :cluster-options="{
    1: {clusterDisableClickZoom: true}
  }"
  :behaviors="['ruler']"
  :controls="['trafficControl']"
  map-type="map"
  @map-was-initialized="initHandler"
>

<ymap-marker
      marker-type="placemark"
      :coords="[55.750028, 37.534397]"
      :balloonTemplate = "balloonTemplate"
    ></ymap-marker>

</yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
  export default {
    name:"footerMap",
    components: { yandexMap, ymapMarker },
    data() {
        return {
          placemarks: [
            {
              coords: [55.750028, 37.534397],
              properties: {}, // define properties here
              options: {}, // define options here
              clusterName: "1",
              balloonTemplate: '<div>"Your custom template"</div>',
              callbacks: { click: function() {} }
            }
          ]
        }
      }
  }
</script>

<style lang="scss">
.footer__yandex-map{
  background-color: rgb(241, 241, 241);
  padding: 10px;
  border-radius: 5px;
}

</style>
