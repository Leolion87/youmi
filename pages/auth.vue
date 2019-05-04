<template>
    <div class='auth'>
        <header class='auth-top'>
            认证中心
        </header>
        <section class='auth-content'>
            <Row>
                <Col span='4'>地址:</Col>
                <Col span='18' offset='2'>
                    <vue-city-picker ref="picker" 
                        :data="data" :title="title" :cancel-txt="cancelTxt" :confirm-txt="confirmTxt" :selected-index="selectedIndex" 
                        @select="select"></vue-city-picker>	
                </Col>
            </Row>
            
        </section>
    </div>
</template>
<script>
    import vueCityPicker from 'vue-city-bspicker'
    import { province, city, area } from '../assets/js/data.js';
    export default {
        data(){
            return {
                data:[province, city, area],
                selectedIndex: [3, 0, 0],
                text: '',
                title: '来吧',
                cancelTxt: '不要',
                confirmTxt:'好的'
            }
        },
        methods: {
            show: function(){
              this.$refs['picker'].show();
            },
            select: function(){
              this.text = arguments
              console.log('select',arguments)
            }
        },
        components:{
        
        }
    }
</script>
<style lang='scss' scoped>
    .auth{
        background: #EDEDEA;
        height: 100%;
        .auth-top {
            height: 3.5rem;
            width: 100%;
            background: #2d8cf0;
            font-size: 1rem;
            text-align: center;
            line-height: 3.5rem;
            color: #fff;
        }
    }
</style>

