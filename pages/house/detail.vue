<template>
    <div class='detail'>
        <!--banner-->
        <div class="banners">
            <Carousel v-model="loopInitValue" loop autoplay>
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
        <div class='house-info'>
            <div class='housue-info-line'>
                <span>{{houseInfo.house_name}}</span>
                <span>{{houseInfo.house_type}}</span>
            </div>
        </div>
        <div class='h-address'>
            <div class='address-info' @click.stop='switchMap'>
               <div class='position'>
                   <Icon type="ios-pin" size='20'/>
                   {{houseInfo.province}}{{houseInfo.city}}
                   {{houseInfo.county}}
                   {{houseInfo.address}}
               </div>
               <div class='arrow'> 
                    <Icon type="ios-arrow-forward" size='20' />
               </div>
            </div>
            <div class='map' v-show='showMap'>
                <div id="houseMap" ref='houseMap'></div>
            </div>
        </div>
        <!-- 楼盘动态 -->
        <div class='house-news'>
            <h3 class='house-title'>楼盘动态</h3>
            <div class='new-list' v-if='houseInfo.news && houseInfo.news.length'>
                <ul>
                    <li v-for='(item,$index) in houseInfo.news'>
                        <span class='news-title'>{{item.news_title}}</span>
                        <span class='news-date'>{{item.post_date}}</span>
                    </li>
                </ul>
            </div>
            <div v-else>
                当前楼盘没有动态
            </div>
        </div>
    </div>
</template>
<script>
  import api from '@/service/api.js';
  import {mapState,mapActions,mapMutations} from 'vuex';
    export default {
        data(){
            return {
                searchValue: '',
                loopInitValue: 0,
                showMap: false,
                houseInfo: ''
            }
        },
        mounted(){
            this.$nextTick(function(){
                this.loadInfo();
            });
        },
        computed:{
            ...mapState(['currentHouse'])
        },
        methods: {
            switchMap(){
                this.showMap = !this.showMap;
            },
            loadInfo(){
                console.log(this.currentHouse);
                let params = {
                    house_id: this.currentHouse.id
                };
                api.getHouseInfo(params).then(res=>{
                    if(res.success) {
                        this.houseInfo = res.data;
                    }else {
                        console.log("参数错误");
                    }
                },err=>{
                    console.log(err);
                });
            },
             ...mapMutations([])
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

    .housue-info-line {
        padding: 0.25rem 0.5rem;
        line-height: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #fff;
    }

    .house-news {
        margin-top: 0.8rem;
        .house-title {
            padding: 0.25rem 0.5rem;
        }
    }

    .new-list {
        background: #fff;
        padding: 0.25rem 0.5rem;
        li {
            padding: 0.3rem 0.5rem;
            font-size: 1rem;
            border-bottom: 1px solid #ccc;

            display: flex;
            justify-content: space-between;
            .news-title {
                white-space:nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .news-date {
                display: inline-block;
                min-width: 5.5rem;
            }

        }
    }
</style>

