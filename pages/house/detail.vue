<template>
    <div class='detail'>
        <!--banner-->
        <div class="banners">
            <Carousel v-model="loopInitValue" loop autoplay height="175px">
                <CarouselItem>
                    <div class="demo-carousel">
                        <!-- ~/assets/images/1.jpg -->
                        <img src="http://www.xinfangquan.cn/images/banner/index1.jpg">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="http://www.xinfangquan.cn/images/banner/index2.jpg">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="http://www.xinfangquan.cn/images/banner/index3.jpg">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="http://www.xinfangquan.cn/images/banner/index4.jpg">
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
        <div class='h-address'>
            <div class='address-info' @click.stop='switchMap'>
               <div class='position'>
                   <Icon type="ios-pin" size='20'/>
                   上海市徐汇区
               </div>
               <div class='arrow'> 
                    <Icon type="ios-arrow-forward" size='20' />
               </div>
            </div>
            <div class='map' v-show='showMap'>
                <div id="houseMap" ref='houseMap'></div>
            </div>
        </div>
    </div>
</template>
<script>
  import api from '@/service/api.js';
//   import MapView from '~/components/Map.vue'
  import {mapState,mapActions,mapMutations} from 'vuex';
    export default {
        data(){
            return {
                searchValue: '',
                loopInitValue: 0,
                showMap: false,
                giveData: {
                    height: 800,
                    width: 600,
                    longitude: 116.404,
                    latitude: 39.915
                },
                giveOutData: {
                    height: 400,
                    width: 400,
                    longitude: 116.417854,
                    latitude: 39.921988
                }
            }
        },
        mounted(){
            //this.loadMap();
        },
        methods: {
            switchMap(){
                this.showMap = !this.showMap;
            },
            loadMap(){
                var map = new BMap.Map("houseMap");
                var point = new BMap.Point(116.331398,39.897445);
                map.centerAndZoom(point,11);

                function theLocation(){
                    var city = document.getElementById("houseMap").value;
                    if(city != ""){
                        map.centerAndZoom(city,11); 
                    }
                }
            },
             ...mapMutations(['CHANGE_NEWHOUSE'])
        },
        components:{
          
        }
    }
</script>
<style lang='scss' scoped>
    .detail {
        background: #eee;
        .map {
            width: 100%;
            height: 200px;
            border: 1px solid red;
        }
    }
    .address-info {
        padding: 0.25rem 0.5rem;
        line-height: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #fff;

    }
</style>

