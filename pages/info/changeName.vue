<template>
    <div class='changeName'>
        <header class="header">
            改名须知
        </header>
        <div class='top'>
            是不是觉得现在的用户名太土了？还是觉得你的用户名过时了？
            想更换一个更酷炫的用户名？快来购买改名卡吧！
        </div>

    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods: {

        },
        components:{

        }
    }
</script>
<style lang='scss' scoped>
  .changeName {
      height: 100%;
      width: 100%;
      background: #ccc;
      position: relative;
      .top {
        height: 50rem;
        padding: 8px 10px;
        font-size: 0.8rem;
      }
  }
  .header {
    width:100%;
    height: 4rem;
    padding: 0.5rem;
    line-height:3rem;
    text-align: center;
    background:#2d8cf0;
    color: #fff;
    font-size: 1.3rem;
  }
  .bottom-btn{
    position: absolute;
    bottom: 50px;
    left: 0
  }
</style>

