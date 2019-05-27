<template>
   <div class='list-loupan'>
     <div class='header'>
        <h5>新房圈-新房</h5>
        <div class='xinfang-cate margin-top5 clearfix'>
            <div class='cate-left left'>
                <!-- <span :class="{active: isActive}">全部</span> -->
                <span v-for='(item,$index) in hotHouse' :key="$index" 
                      @click.stop='chooseHotHouse(item,$index)'
                     :class="{active: $index == activeId}">
                    {{item.hot_house_name}}
                </span>
            </div>
            <div class='cate-right right'>
                <Icon type="ios-search-outline" size='20' @click.stop='toSearch'/>查找</div>
        </div>
        <div class='sortby'>
            <Row>
                <Col span="6">
                    <Cascader :data="data" @on-change="changeArea" 
                              v-click-outside="onClickOutsideArea">
                        {{ text }} <Icon type="md-arrow-dropdown" />
                    </Cascader>
                </Col>
                <Col span="6">
                    <Dropdown trigger="custom" 
                              :visible="showPriceMenu" 
                               @on-click='choosePrice' 
                               v-click-outside="onClickOutsidePrice">
                        <span @click='showPrice'>
                            {{defaultPrice}}
                            <Icon type="md-arrow-dropdown" />
                        </span>
                        <DropdownMenu slot="list">
                            <DropdownItem v-for="(item,$index) in averagePrice" 
                                          :key="$index" 
                                          :selected="activePriceId == item.name"
                                          :name="item.name">
                                {{item.range}}
                            </DropdownItem>
                            
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col span="6">
                    <Dropdown @on-click='chooseDownPayment' 
                              trigger="custom" 
                              :visible="showPaymentMenu" 
                              v-click-outside="onClickOutsidePayment">
                        <span @click.stop='clickPayment'>
                            {{defaultPayment}}
                            <Icon type="md-arrow-dropdown" />
                        </span>
                        <DropdownMenu slot="list">
                            <DropdownItem v-for="(item,$index) in downPayment" 
                                          :key="$index" 
                                          :selected="activePaymentId == item.name"
                                          :name="item.name">
                                {{item.range}}
                            </DropdownItem>


                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col span="6" class-name='more-sort'>
                   <span>更多</span>
                   <Icon type="md-arrow-dropdown" />
                </Col>
            </Row>
        </div>

        <div class='more-selected-panel' v-show='showAllSortByPanel'>
            <div class='inner'>
                <div class='sorts margin-top10'>
                        <h4>排序</h4>
                        <div class='h-sort'>
                            <a href='' class='active'>不限</a>
                            <a href='' >价格从高到低</a>
                            <a href=''>价格从低到高</a>
                            <a href=''>发布时间排序</a>
                            <a href=''>点击量排序</a>
                        </div>
                    </div>
                    <div class='sorts margin-top10'>
                        <h4>物业类型</h4>
                        <div class='wuye-sort'>
                            <a href=''>不限</a>
                            <a href=''>住宅</a>
                            <a href='' class='active'>别墅</a>
                            <a href=''>商住</a>
                            <a href=''>商铺</a>
                            <a href=''>厂房</a>
                            <a href=''>写字楼</a>
                        </div>
                    </div>
                    <div class='sorts margin-top10'>
                        <h4>装修状态</h4>
                        <div class='status-sort'>
                            <a href='' class='active'>不限</a>
                            <a href='' >毛坯</a>
                            <a href=''>简装</a>
                            <a href=''>精装修</a>
                        </div>
                </div>
            </div>
            <div class='sort-btn'>
               <Row type="flex" justify="space-between">
                    <Col span="4">
                         <Button>重置</Button>
                    </Col>
                    <Col span="4">
                        <Button type="primary">确定</Button>
                    </Col>
               </Row>
            </div>
        </div>

     </div>
     <div class='content'>
         <div class='total-house'>
             共有<span class='total-numer'>{{houses.length}}</span>个楼盘
         </div>
         <div v-if="houses.length >0" class='house-list'>
             <Row class-name='house' 
                  v-for='(item,$index) in houses' 
                  :class='{isTopHouse: item.isTop == 1}'
                  :key='$index'>
                <Col span='7'>
                    <img :src='item.thumbnail' style='width: 7rem;'>
                </Col>
                <Col span='17' class='house-des'>
                    <Col span='24'>
                        <Col span='13' offset="1">
                          <span class='isTop' v-if='item.isTop == 1'>顶</span> 
                          <span class='house-name'>{{item.name}}</span>
                        </Col>
                        <Col span='6'  offset="4" class-name='house-price'>
                          {{item.price}}元/平
                        </Col>
                    </Col>
                    <Col span='24' class-name='margin-top5'>
                        <Col span='13' offset="1">
                          <span class='house-address'>{{item.address}}</span> 
                        </Col>
                        <Col span='7'  
                             offset="3" 
                             class-name='house-type' v-if='item.houseType.length > 0'>
                            <span v-for='(h,$hindex) in item.houseType' :key='$hindex'>
                                {{h}}
                            </span>
                        </Col>
                    </Col>
                    <Col span='24' class-name='margin-top5'>
                        <Col span='13' offset="1">
                          <span class='isCommision' v-if='item.isCommission == 1'>佣</span> 
                          <span class='commision-text'>暂无权限查看</span>
                        </Col>
                        
                    </Col>
                    <Col span='23' offset="1" class-name='margin-top5'>
                        {{item.company}}
                    </Col>
                </Col>
             </Row>
         </div>
         <div v-else class='no-house'>
             没有房产信息了
         </div>
     </div>

        <Spin fix v-show='hShowSpin'>
            <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
            <div>正在加载中...</div>
        </Spin>
   </div>
</template>
<script>
  import api from '@/service/api.js'
  import vClickOutside from 'v-click-outside'
  import vFooter from '~/components/footer.vue';
  import cityData from '~/static/js/area.js';
  import {mapState,mapActions,mapMutations} from 'vuex';
 export default {
    data(){
         return {
            project: '',
            text: '区域',
            data: cityData,
            showAllSortByPanel: false,
            
            hotHouse:[],//热门房产
            isActive: true,
            activeId: 0,
    
            //平均房价
            averagePrice: [
                {id: 0, name: '0-0', range: '不限'},
                {id: 1, name: '0-5000', range: '5000以下'},
                {id: 2, name: '5000-6000', range: '5000-6000'},
                {id: 3, name: '6000-7000', range: '6000-7000'},
                {id: 4, name: '7000-8000', range: '7000-8000'},
                {id: 5, name: '8000-9000', range: '8000-9000'},
                {id: 6, name: '9000-10000', range: '9000-10000'},
                {id: 7, name: '10000-0', range: '10000以上'},
            ],
            activePriceId: 0,
            showPriceMenu: false,
            defaultPrice: '均价',

            //首付
            downPayment:[
                {id: 0, name: '0-0', range: '不限'},
                {id: 1, name: '0-20', range: '20万以下'},
                {id: 2, name: '20-25', range: '20-25万'},
                {id: 3, name: '25-30', range: '25-30万'},
                {id: 4, name: '35-40', range: '35-40万'},
                {id: 5, name: '40-50', range: '40-50万'},
                {id: 6, name: '50-60', range: '50-60万'},
                {id: 7, name: '60-80', range: '60-80万'},
            ],
            showPaymentMenu: false,
            activePaymentId: 0,
            defaultPayment: '首付'

         }
    },
    mounted(){
        this.getHotHouse();
        this.getNewHouse();
    },
    computed: {
        ...mapState(['houses','hShowSpin','selectedHotHouse','selectedArea','selectedAveragePrice','selectedDownPayment'])
    },
    methods: {
        changeArea (value, selectedData) {
            let txt = selectedData.map(o => o.label).join(', ');
            let areaArr = txt.split(',')
            this.text = areaArr[areaArr.length-1];

            this.CHANGE_SELECTED_AREA(this.text);
            this.getAllNewHouse();
            
        },
        choosePrice(price){
            // console.log(price);
            
            this.CHANGE_SELECTED_PRICE(price);
            this.getAllNewHouse();
            this.showPriceMenu =false;
            this.activePriceId = price;

            if(price == '0-0'){
                this.defaultPrice = '均价';
            }else {
                this.defaultPrice = price;
            };
        },
        chooseDownPayment(payment){
            this.activePaymentId = payment;
            this.CHANGE_SELECTED_PAYMENT(payment);
            this.getAllNewHouse();
            this.showPaymentMenu = false;

            if(payment == '0-0'){
                this.defaultPayment = '首付';
            }else {
                this.defaultPayment = payment+'万';
            };
        },
        //获取热门房产
        getHotHouse(){
            api.getHotHouse().then(res=>{
                if(res.success){
                    if(res.data.length ){
                        let list = res.data;
                        list.unshift({"hot_house_id":0,"hot_house_name":'全部',"hot_house_sort":0})
                        this.hotHouse = list;
                    }else {
                        this.$Message.warning('还没有添加热门房产');
                    }
                }
            },err=>{
                console.log(err)
            });
        },
        //获取房产列表
        getNewHouse(){
            this.showSpin = true;
            let params = {
                page_index: 1,
                page_size: 30
            };

            this.getAllNewHouse(params);
        },
        toSearch(){
          this.$router.push('/house/search');
        },
        chooseHotHouse(item,index){
            this.showSpin = true;

            this.activeId = index;
            // let params = {
            //     page_index: 1,
            //     page_size: 30,
            //     hot_house_id: item.hot_house_id
            // };


            // 改变选择的热门房产
            this.CHANGE_SELECTED_HOUSE(item.hot_house_id);
            
            this.getAllNewHouse();
            
            

            

        },
        getAllNewHouse(){
            //是否热门房产

            let params = {
                page_index: 1,
                page_size: 30
            };
            if(this.selectedHotHouse){
                params.hot_house_id = this.selectedHotHouse;
            };
            if(this.selectedArea){
                params.county = this.selectedArea;
            };
            if(this.selectedAveragePrice){
              let average_low = this.selectedAveragePrice.split('-')[0];
              let average_max = this.selectedAveragePrice.split('-')[1];

              params.average_low = average_low;
              params.average_max = average_max;

            };
            if(this.selectedDownPayment){
                let payment_low = this.selectedDownPayment.split('-')[0];
                let payment_max = this.selectedDownPayment.split('-')[1];

                params.payment_low = payment_low;
                params.payment_max = payment_max;
            };


            api.getNewHouse(params).then(res=>{
              if(res.success) {
                if(res.data.data && res.data.data.length) {
                  let temp = [];
                  let list = res.data.data;

                  list.forEach(item => {
                    let obj = {
                        id: item.house_id,
                        name: item.house_name,
                        isTop: item.isTop,
                        isCommission: item.isCommission,
                        price: item.house_price,
                        address: item.province + item.city,
                        houseType: item.house_type.split(','),
                        company: item.company,
                        thumbnail: 'http://127.0.0.1'+item.house_banner1
                    };
                    temp.push(obj);
                  });
                  //更新数据
                  this.CHANGE_NEWHOUSE(temp);
                }else {
                    this.CHANGE_NEWHOUSE([]);
                }
              }else {
                this.$Message.error('参数错误');
              };
              this.showSpin = false;
            },err=>{
              console.log(err);
              this.showSpin = false;
            });
        },
        showPrice(){
            this.showPriceMenu = !this.showPriceMenu;
        },
        clickPayment(){
            this.showPaymentMenu = !this.showPaymentMenu;
        },
        onClickOutsidePrice(){
            this.showPriceMenu = false;
        },
        onClickOutsidePayment(){
            this.showPaymentMenu = false; 
        },
        onClickOutsideArea(){
            console.log('area')
        },
        ...mapMutations(['CHANGE_NEWHOUSE','CHANGE_SELECTED_HOUSE','CHANGE_SELECTED_AREA','CHANGE_SELECTED_PRICE','CHANGE_SELECTED_PAYMENT'])

    },
    directives: {
      clickOutside: vClickOutside.directive
    },
    components:{
        vFooter
    }
 }
</script>
<style lang='scss' scoped>
    .list-loupan {
        .header {
            width:100%;
            height: 5rem;
            position:absolute;
            top:0;
            left: 0;
            text-align:center;
            h5{
                padding: 8px 10px;
                background: #2d8cf0;
                color: #fff;
            }
            .xinfang-cate {
                height: 25px;
                padding: 0 3px;
                .sortby {
                    border-bottom: 1px solid red;
                }
                .cate-right{
                    width: 3.5rem;
                    line-height:25px;
                    &:before{
                        position: absolute;
                        top: 1px;
                        left: 10px;
                       
                        content: '';
                        width: 1px;
                        height: 8px;
                        border-bottom: 1px solid #ccc;
                        display: inline-block;
                        margin-right: 24px;
                        margin-bottom: 10px;
                    }
                }
                .cate-left{
                    width: calc(100% - 3.5rem);
                    white-space: nowrap;
                    overflow: scroll;
                    -ms-overflow-style: none;
                    overflow: -moz-scrollbars-none;
                    &::-webkit-scrollbar { 
                        width: 0 !important 
                    }
                    span{
                        display: inline-block;
                        padding: 2px 5px;
                        &.active {
                            background: #2b85e4;
                            color: #fff;
                            border-radius: 4px;
                        }
                    }
                }
            }
        }
        .content{
            position: absolute;
            top: 6rem;
            left: 0;
            
            width: 100%;
            .total-house {
                padding: 5px 8px;
                background: #F0F0F0;
                border-bottom: 1px solid #ccc;
                .total-numer {
                    font-weight: bold;
                }
            }
            .house-list{
                .house {
                    padding: 5px 8px;
                    border-bottom: 1px solid #ccc;
                    &.isTopHouse {
                        background: #F0F0F0;
                    }
                    .house-des {
                        .isTop {
                           display: inline-block;
                           width: 16px;
                           height: 16px;
                           text-align: center;
                           line-height: 16px;
                           font-size: 0.3rem;
                           background: #f90;
                           color: #fff;
                        }
                        .house-name {
                            // font-family: '黑体';
                            font-weight: bold;
                            font-size: 1rem;
                            color: #17233d;
                        }
                        .house-price {
                            color: #ed4014;
                        }
                        .house-type {
                            span {
                                font-size: 0.5rem;
                            }
                        }
                        .isCommision {
                            display: inline-block;
                           width: 16px;
                           height: 16px;
                           text-align: center;
                           line-height: 16px;
                           font-size: 0.3rem;
                           background: #ed4014;
                           color: #fff;
                        }
                        .commision-text {
                            color: red;
                        }
                    }
                }
            }
        }

    }

    .more-selected-panel {
        position: absolute;
        top: 100px;
        left: 0px;
        height: 100%;
        width: 100%;
        background: #fff;
        z-index: 999999;
        // background: #eee;
        .inner {
            padding: 5px 8px;
            text-align: left;
            background: #fff;
            h4 {
                font-size: 0.5rem;
            }
            a {
                    display: inline-block;
                    margin-left: 0.5rem;
                    width: 30%;
                    height: 30px;
                    margin-top: 0.4rem;
                    line-height: 30px;
                    text-align: center;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    color: #515a6e;
                &.active {
                    color: #fff;
                    background: #2b85e4;
                }
            }
        
        }
        .sort-btn {
            margin-top: 10px;
            padding: 5px 8px;
            border-top: 1px solid #ccc;
            background: #fff;
        }
        
        
    }

    .sortby {
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        padding: 6px 0;
    }

    .no-house {
        text-align: center;
        margin-top: 30px;
        font-size: 1rem;
        color: #515a6e;
    }


    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
</style>

