<template>
    <header class="m-header">
        <Row type="flex" justify="space-between">
            <Col span="6" class-name='ym-avatar'>
               <div class='avatar' @click='clickAvatar'>
                     <img src='https://i.loli.net/2017/08/21/599a521472424.jpg'>
               </div>
            </Col>
            <Col span="12" class-name='ym-logo'>
               <img src="~/assets/images/logo.png" style='height:3rem;'>
            </Col>
            <Col span="6" class-name='ym-search'>
                <Icon type="ios-add" size='34'/>

            </Col>
        </Row>

    </header>
</template>
<script>
 export default {
    data(){
         return {
            
         }
    },
    methods: {
      clickAvatar(){
        console.log("test")
        this.$router.push('/info');
      }
    },
    components:{
     
    }
 }
</script>
<style lang='scss' scoped>
  header {
      width:100%;
      height: 4rem;
      padding: 0.5rem;
      line-height:3rem;
      background:#2d8cf0;
      color: #fff;
      position:absolute;
      z-index:5;
      top:0;
    //   text-align:center;
      .ym-avatar{
          // align-items:  flex-start;
          cursor:pointer;
          .avatar img{
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 4px;
            cursor: pointer;
          }
      }
      .ym-logo {
        text-align: center;
      }
      .ym-search{
          text-align: right;
      }
  }
</style>

