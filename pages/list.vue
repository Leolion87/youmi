<template>
   <div class='list-loupan'>
     <div class='header'>
        <h5>新房圈-新房</h5>
        <div class='xinfang-cate margin-top5 clearfix'>
            <div class='cate-left left'>
                <span class='active'>全部</span>
                <span>恒大</span>
                <span>绿地</span>
                <span>万科</span>
                <span>中海</span>
                <span>融创</span>
                <span>万达</span>
                <span>碧桂园</span>
                <span>金地</span>
                <span>融创</span>
                <span>万达</span>
                <span>碧桂园</span>
                <span>金地</span>
            </div>
            <div class='cate-right right'>
                <Icon type="ios-search-outline" size='20' />查找</div>
        </div>
        <div class='sortby'>
            <Row>
                <Col span="6">
                    <Cascader :data="data" @on-change="handleChange">
                        {{ text }} <Icon type="md-arrow-dropdown" />
                    </Cascader>
                </Col>
                <Col span="6">
                    <Dropdown>
                        <span>
                            均价
                            <Icon type="md-arrow-dropdown" />
                        </span>
                        <DropdownMenu slot="list">
                            <DropdownItem>不限</DropdownItem>
                            <DropdownItem>5000以下</DropdownItem>
                            <DropdownItem>5000-6000</DropdownItem>
                            <DropdownItem>6000-7000</DropdownItem>
                            <DropdownItem>7000-8000</DropdownItem>
                            <DropdownItem>8000-9000</DropdownItem>
                            <DropdownItem>9000-10000</DropdownItem>
                            <DropdownItem>10000以上</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col span="6">
                    <Dropdown>
                        <span>
                            首付
                            <Icon type="md-arrow-dropdown" />
                        </span>
                        <DropdownMenu slot="list">
                            <DropdownItem>不限</DropdownItem>
                            <DropdownItem>20万以下</DropdownItem>
                            <DropdownItem>20-25万</DropdownItem>
                            <DropdownItem>25-30万</DropdownItem>
                            <DropdownItem>35-40万</DropdownItem>
                            <DropdownItem>40-50万</DropdownItem>
                            <DropdownItem>50-60万</DropdownItem>
                            <DropdownItem>60-80万</DropdownItem>
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
             共有<span class='total-numer'>1000</span>个楼盘
         </div>
         <div class='house-list'>
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
            houses:[
                {
                  id: 1,
                  name: '万科云',
                  isTop: 1,
                  isCommission: 1,
                  price: 8000,
                  address: '杭州,萧山',
                  houseType: ['住宅','别墅'],
                  company: '杭州悠米网络科技有限公司',
                  thumbnail: 'http://pic.app.0550.com/_20190502174232_5ccabb889e5ca.png'
                },
                {
                  id: 2,
                  name: '碧桂园',
                  isTop: 1,
                  isCommission: 1,
                  price: 8000,
                  address: '苏州,wu',
                  houseType: ['住宅','别墅'],
                  company: '杭州悠米网络科技有限公司',
                  thumbnail: 'http://pic.app.0550.com/_20190502151222_5cca985630226.jpg'
                },
                {
                  id: 3,
                  name: '万科云',
                  isTop: 1,
                  isCommission: 1,
                  price: 8000,
                  address: '杭州,萧山',
                  houseType: ['住宅','别墅'],
                  company: '杭州悠米网络科技有限公司',
                  thumbnail: 'http://pic.app.0550.com/_20190502174232_5ccabb889e5ca.png'
                },
                {
                  id: 4,
                  name: '碧桂园',
                  isTop: 0,
                  isCommission: 1,
                  price: 8000,
                  address: '苏州,wu',
                  houseType: ['住宅','别墅'],
                  company: '杭州悠米网络科技有限公司',
                  thumbnail: 'http://pic.app.0550.com/_20190502174232_5ccabb889e5ca.png'
                },
                {
                  id: 1,
                  name: '万科云',
                  isTop: 0,
                  isCommission: 1,
                  price: 8000,
                  address: '杭州,萧山',
                  houseType: ['住宅','别墅'],
                  company: '杭州悠米网络科技有限公司',
                  thumbnail: 'http://pic.app.0550.com/_20190502174232_5ccabb889e5ca.png'
                },
                {
                  id: 6,
                  name: '碧桂园',
                  isTop: 0,
                  isCommission: 1,
                  price: 8000,
                  address: '苏州,wu',
                  houseType: ['住宅','别墅'],
                  company: '杭州悠米网络科技有限公司',
                  thumbnail: 'http://pic.app.0550.com/_20190502174232_5ccabb889e5ca.png'
                },
                {
                  id: 7,
                  name: '万科云',
                  isTop: 0,
                  isCommission: 1,
                  price: 8000,
                  address: '杭州,萧山',
                  houseType: ['住宅','别墅'],
                  company: '杭州悠米网络科技有限公司',
                  thumbnail: 'http://pic.app.0550.com/_20190502174232_5ccabb889e5ca.png'
                },
                {
                  id: 8,
                  name: '碧桂园',
                  isTop: 0,
                  isCommission: 1,
                  price: 8000,
                  address: '苏州,wu',
                  houseType: ['住宅','别墅'],
                  company: '杭州悠米网络科技有限公司',
                  thumbnail: 'http://pic.app.0550.com/_20190502174232_5ccabb889e5ca.png'
                },
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
        // background: #eee;
        .inner {
                    padding: 5px 8px;
        text-align: left;
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
        }
        
        
    }

    .sortby {
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        padding: 6px 0;
    }
</style>

