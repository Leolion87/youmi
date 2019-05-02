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
        <div class='more-selected-panel'>
            <div class='sorts'>
                <h4>排序</h4>
                <div class='h-sort'>
                    <a href=''></a>
                    <a href=''></a>
                    <a href=''></a>
                    <a href=''></a>
                </div>
            </div>
            <div class='sorts'>
                <h4>物业类型</h4>
            </div>
            <div class='sorts'>
                <h4>装修状态</h4>
            </div>
        </div>
     </div>
     <div class='content'>

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
                .cate-right{
                    width: 3.5rem;
                    // border-left: 1px solid #ccc;
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
        .content {
            .content{
                position:relative;
                -webkit-box-flex:1;
                -webkit-flex:1;
                flex:1;
                overflow:auto;
                -webkit-overflow-scrolling:touch;
            
                background-color:#ccc;
            }
        }
    }

    .more-selected-panel {
        position: absolute;
        top: 100px;
        left: 0px;
        height: 100%;
        width: 100%;
        background: #eee;

        padding: 5px 8px;
        text-align: left;
        h4 {
            font-size: 0.5rem;
        }
        .h-sort{
            a {
                display: inline-block;
                width: 33%;
                height: 30px;
                border: 1px solid #ccc;
            }
        }
    }
</style>

