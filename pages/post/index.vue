<template>
    <div class='post'>
        <m-header></m-header>
        <div class="content">
            <div class='msg-box'>
            <div clas='msg-img'>
                <img style='width: 2.5rem;height: 2.5rem;' src='https://i.loli.net/2017/08/21/599a521472424.jpg'>
            </div>
            <div class='msg-des'>
                <div class='send-name'>
                    新房圈客服
                </div>
                <div class='des'>
                    点击查看@你的通知
                </div>
            </div>
            </div>
            

        </div>
      <v-footer></v-footer>
    </div>
</template>
<script>
import mHeader from '~/components/mheader.vue';
import vFooter from '~/components/footer.vue';
    export default {
        data(){
            return {

            }
        },
        methods: {

        },
        components:{
            mHeader,
           vFooter,
        }
    }
</script>
<style lang='scss' scoped>
    html, body {
    height:100%;
    margin:0;
    padding:0;
    background: #F2F0F0;
  }
  
  .content {
      width:100%;
      overflow:auto;
      top:4rem;
      position:absolute;
      z-index:10;
      bottom:2rem;
      background: #F5F5F5;
      padding: 8px 10px;
    }

  .msg-box {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    .msg-img {
      width:2.5rem;
    }
    .msg-des {
      flex: 1;
      padding: 0 1rem;
      height: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .send-name {
        font-size: 0.8rem;
        color: #000;
      }
    }
  }
</style>

