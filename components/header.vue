<template>
    <header class="header">
        <Row type="flex" justify="space-between">
            <Col span="6" class-name='ym-avatar'>
               <div class='avatar' @click='clickAvatar'>
                 <img v-if="userInfo.avatar" :src="userInfo.avatar">
                 <img v-else :src="defaultAvatar">
               </div>
                
            </Col>
            <Col span="12" class-name='ym-logo'>
               <img src="~/assets/images/logo.png" style='height:2rem;'>
            </Col>
            <Col span="6" class-name='ym-search'>
                <Icon type="ios-search" size='20' @click.stop='indexSearch'></Icon>
            </Col>
        </Row>

    </header>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex';
 export default {
    data(){
      return {
        defaultAvatar: 'http://www.xinfangquan.cn/images/default_avatar.jpg'
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      clickAvatar(){
        let userName = sessionStorage.getItem('userName');
        if(userName) {
          this.$router.push('/info');
        }else {
          this.$router.push('/info/login');
        }
      },
      indexSearch(){
        this.$router.push('/search');
      }
    },
    components:{
     
    }
 }
</script>
<style lang='scss' scoped>
  header {
      width:100%;
      height: 3rem;
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
            width: 32px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
          }
      }
      .ym-logo {
        text-align: center;
      }
      .ym-search{
          text-align: right;
          line-height: 2rem;
      }
  }
</style>

