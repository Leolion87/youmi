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
         }
    },
    methods: {
     

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
</style>

