<template>
   <div class='company' name='company'>
     <div class='header'>
        <h5>新房圈-经纪公司</h5>
        <div class='xinfang-cate margin-top5 clearfix'>
            <div class='cate-left left'>
                <span class='active'>全部</span>
                <span>链家</span>
                <span>豪世华邦</span>
                <span>中原地产</span>
                <span>贝壳</span>
                <span>Q房</span>
                <span>房天下</span>
                <span>吉屋</span>
            </div>
            <div class='cate-right right'>
                <Icon type="ios-search-outline" size='20' />查找</div>
        </div>
     </div>
     <div class='content'>
         <div class='total-company'>
             共有<span class='total-numer'>1000</span>个经纪公司
         </div>
         <div class='company-list'>
             <Row class-name='company' 
                  v-for='(item,$index) in companys' 
                  :class='{isTopCompany: item.isTop == 1}'
                  :key='$index'>
                <Col span='7'>
                    <img :src='item.thumbnail' style='width: 7rem;'>
                </Col>
                <Col span='17' class='company-des'>
                    <Col span='24'>
                        <Col span='13' offset="1">
                          <span class='isTop' v-if='item.isTop == 1'>顶</span> 
                          <span class='company-name'>{{item.company}}</span>
                        </Col>
                        <Col span='5'  offset="5" class-name='company-price'>
                           <Button type="primary" v-if=" item.hasAppointment == 1" disabled size='small'>已预约</Button>
                           <Button type="primary" v-else size='small'>预约</Button>
                           
                        </Col>
                    </Col>
                    <Col span='24' class-name='margin-top10'>
                        <Col span='123' offset="1">
                           {{item.province}} - 
                           {{item.city}} -
                           {{item.county}} - 
                           {{item.address}}
                        </Col>
                        
                    </Col>
                    <!-- <Col span='24' class-name='margin-top5'>
                        <Col span='13' offset="1">
                          <span class='isCommision' v-if='item.isCommission == 1'>佣</span> 
                          <span class='commision-text'>暂无权限查看</span>
                        </Col>
                        
                    </Col> -->
                    <Col span='23' offset="1" class-name='margin-top10'>
                        <Col span='10'>{{item.scale}}</Col>
                        <Col span='8' offset="6">
                           <a v-if='item.hasAppointment == 1' :href="'tel:'+item.tel">
                               {{item.tel}}
                           </a>
                        </Col>
                    </Col>
                </Col>
             </Row>
         </div>
     </div>
   </div>
</template>
<script>
import vFooter from '~/components/footer.vue';
 export default {
    data(){
         return {
            text: '区域',
            data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
            }],
            showAllSortByPanel: false,
            //楼盘列表
            companys:[
                {
                  id: 1,
                  isTop: 1,
                  hasAppointment: 0,
                  isCommission: 1,
                  province:'江苏',
                  city: '苏州',
                  county: '工业园区',
                  address: '创意产业园A座',
                  companyType: ['住宅','别墅'],
                  company: '苏州房天下',
                  scale: '10人以下',//规模
                  tel: '18911223344',
                  thumbnail: 'http://www.xinfangquan.cn/upload/c1.jpg'
                },
                { //a href="tel:010-57121655">
                  id: 2,
                  isTop: 1,
                  hasAppointment: 1,
                  isCommission: 0,
                  province:'上海',
                  city: '上海市',
                  county: '闵行区',
                  address: '七莘路',
                  companyType: ['住宅','别墅'],
                  company: '万科城市花园',
                  scale: '30-50',//规模
                  tel: '0551-2456789',
                  thumbnail: 'http://www.xinfangquan.cn/upload/c.jpg'
                },
                {
                  id: 3,
                  isTop: 0,
                  hasAppointment: 0,
                  isCommission: 0,
                  province:'江苏',
                  city: '南京市',
                  county: '雨花台区',
                  address: '集庆门大街',
                  companyType: ['住宅','别墅'],
                  company: 'Q房网',
                  scale: '10-50',//规模
                  tel: '021-2456789',
                  thumbnail: 'http://www.xinfangquan.cn/upload/c1.jpg'
                },
                {
                  id: 1,
                  isTop: 1,
                  hasAppointment: 0,
                  isCommission: 1,
                  province:'江苏',
                  city: '苏州',
                  county: '工业园区',
                  address: '创意产业园A座',
                  companyType: ['住宅','别墅'],
                  company: '苏州房天下',
                  scale: '10人以下',//规模
                  tel: '18911223344',
                  thumbnail: 'http://www.xinfangquan.cn/upload/c1.jpg'
                },
                {
                  id: 2,
                  isTop: 1,
                  hasAppointment: 0,
                  isCommission: 0,
                  province:'上海',
                  city: '上海市',
                  county: '闵行区',
                  address: '七莘路',
                  companyType: ['住宅','别墅'],
                  company: '万科城市花园',
                  scale: '30-50',//规模
                  tel: '0551-2456789',
                  thumbnail: 'http://www.xinfangquan.cn/upload/c.jpg'
                },
                {
                  id: 3,
                  isTop: 0,
                  hasAppointment: 1,
                  isCommission: 0,
                  province:'江苏',
                  city: '南京市',
                  county: '雨花台区',
                  address: '集庆门大街',
                  companyType: ['住宅','别墅'],
                  company: 'Q房网',
                  scale: '10-50',//规模
                  tel: '15255575890',
                  thumbnail: 'http://www.xinfangquan.cn/upload/c.jpg'
                },
                {
                  id: 2,
                  isTop: 1,
                  hasAppointment: 0,
                  isCommission: 0,
                  province:'上海',
                  city: '上海市',
                  county: '闵行区',
                  address: '七莘路',
                  companyType: ['住宅','别墅'],
                  company: '万科城市花园',
                  scale: '30-50',//规模
                  tel: '0551-2456789',
                  thumbnail: 'http://www.xinfangquan.cn/upload/c.jpg'
                },
                {
                  id: 3,
                  isTop: 0,
                  hasAppointment: 0,
                  isCommission: 0,
                  province:'江苏',
                  city: '南京市',
                  county: '雨花台区',
                  address: '集庆门大街',
                  companyType: ['住宅','别墅'],
                  company: 'Q房网',
                  scale: '10-50',//规模
                  tel: '021-2456789',
                  thumbnail: 'http://www.xinfangquan.cn/upload/c.jpg'
                }
               
            ]
         }
    },
    methods: {
        handleChange (value, selectedData) {
                let txt = selectedData.map(o => o.label).join(', ');
                this.text = txt.split(',')[0];
        }

    },
    components:{
        vFooter
    }
 }
</script>
<style lang='scss' scoped>
    .company {
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
            top: 4.2rem;
            left: 0;
            
            width: 100%;
            .total-company {
                padding: 5px 8px;
                background: #F0F0F0;
                border-bottom: 1px solid #ccc;
                .total-numer {
                    font-weight: bold;
                }
            }
            .company-list{
                .company {
                    padding: 5px 8px;
                    border-bottom: 1px solid #ccc;
                    &.isTopCompany {
                        background: #F0F0F0;
                    }
                    .company-des {
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
                        .company-name {
                            // font-family: '黑体';
                            font-weight: bold;
                            font-size: 1rem;
                            color: #17233d;
                        }
                        .company-price {
                            color: #ed4014;
                        }
                        .company-type {
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
</style>

