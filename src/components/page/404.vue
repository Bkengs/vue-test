<template>
    <div class="error">
    	<h2>404</h2>
    	<p>NOT FIND :(</p>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped lang='less'>
    .error{
    	text-align: center;
    	color: #ddd;
    	h2{
    		font-size: 100px;
    		margin-bottom: 0px;
    	}
    	p{
    		font-size: 60px;
    		margin-top: 0px;
    	}
    }
</style>

<template>
    <div class="amap">
        <el-button type="primary" @click="checkMe()">点击</el-button>
        <input type="number" v-model="range">
        <el-button type="primary" @click="draw()">点击</el-button>
        
        <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
        <div class="amap-page-container">
        <el-amap ref="amap" class="amap-demo" :events="events" :center="center" :zoom="zoom" :plugin="plugin">
            <el-amap-circle
                v-for="(circle, index) in circles"
                :key="index"
                :center="circle.center"
                :radius="circle.radius"
                :fill-opacity="circle.fillOpacity"
                :events="circle.events"
                :editable="circle.editable"
                >
            </el-amap-circle>
            <el-amap-marker
                v-for="(marker, index) in markers"
                :key="index"
                :position="marker"
            ></el-amap-marker>
            <el-amap-marker
                :position="coreMarker.position"
                :events="coreMarker.events"
                :draggable="coreMarker.draggable"
                :animation="coreMarker.animation"
                :icon="coreMarker.icon"
            ></el-amap-marker>
        </el-amap>
        </div>
    </div>

  </template>

  <style>
.amap-page-container {
  height: 400px;
  width: 600px;
}
</style>

  <script>
// NPM 方式
// import { AMapManager } from 'vue-amap';
// CDN 方式
// let amapManager = new VueAMap.AMapManager();
export default {
  data() {
    return {
      //   amapManager,
      range: 0,
      circles: [
        {
          center: [121.5273285, 31.21515044],
          radius: 200,
          fillOpacity: 0.5,
          editable: true,
          events: {
          }
        }
      ],
      zoom: 12,
      markers: [],
      coreMarker: {
          position: [0,0],
          visible: false,
          draggable: true,
          animation: "AMAP_ANIMATION_BOUNCE",
          icon: "static/img/mark.png",
          events: {
              dragging: (e) => {
                  this.coreMarker.position = [e.lnglat.lng, e.lnglat.lat];
                  this.circles[0].center = this.coreMarker.position;
              }
          }
      },
      center: [121.59996, 31.197646],
      searchOption: {},
      events: {
        click: e => {
          console.log(e);
        },
        mouseover: e => {
          // document.getElementsByClassName('amap-container')[0].style.cursor = 'wait';
        }
      },
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                  debugger;
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
        }
      ]
    };
  },

  methods: {
    onSearchResult(pois) {
      let latSum = 0;
      let lngSum = 0;
      this.markers = [];
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let mcenter = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.center = [mcenter.lng, mcenter.lat];
      }
    },
    mapClick(events) {
      console.log(events);
    },
    checkMe() {
      // console.log(this.$refs['amap']);
      // this.$refs['amap'].$el.style.cursor = "wait !important";
      // document.getElementsByClassName('amap-container')[0].style.cursor = 'wait';
      // document.getElementsByTagName('body')[0].style.cursor = 'wait';
      let center = this.$refs["amap"].$$getCenter();
      this.coreMarker.position = center;
      this.coreMarker.visible = true;
    },
    draw() {
      if (this.coreMarker.visible === false) {
          console.log("请先放置中心点");
      } else {
        this.circles[0].center = this.coreMarker.position;
        this.circles[0].radius = this.range;
      }
    }
  }
};
</script>
<style>
div {
  /* cursor:  */
}
</style>
