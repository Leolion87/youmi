<template>
   <footer class='footer'>
        <Row class='nav'>
            <div class='navs'>
                 <nuxt-link to="/">首页</nuxt-link>
            </div>
            <div class='index'>
              <nuxt-link to="/status">动态</nuxt-link>
            </div>
            <div class='index'>
              <nuxt-link to="/post">发布</nuxt-link>
            </div>
            <div class='index'>
              <nuxt-link to="/msg">消息</nuxt-link>
           </div>
            <div class='my' @click='toPersonInfo'>
              <span>我的</span>
            </div>
        </Row>
   </footer>
</template>
<script>
 import {mapState, mapActions,mapMutations} from 'vuex';
 export default {
    data(){
      return {
        showCatesPopTip: false,
        navActiveId: 1,
        activeCateId: 0,
        cates: [
            {id: 1, name: '招聘',url:'http://bengbuxx.com/zhaopin'},
            {id: 2, name: '求职',url:'http://bengbuxx.com/qiuzhi'},
            {id: 3, name: '房屋买卖',url:'http://bengbuxx.com/buyhouse'},
            {id: 4, name: '房屋租赁',url:'http://bengbuxx.com/zulin'},
            {id: 5, name: '征婚交友',url:'http://bengbuxx.com/makefriends'},
            {id: 6, name: '购物市场',url:'http://bengbuxx.com/shopping'},
            {id: 7, name: '生活服务',url:'http://bengbuxx.com/lifeservice'},
            {id: 8, name: '车辆市场',url:'http://bengbuxx.com/carMaket'},
            {id: 9, name: '教育培训',url:'http://bengbuxx.com/education'},
            {id: 10, name: '商务合作',url:'http://bengbuxx.com/zhaoshang'},
            {id: 11, name: '公告祝福',url:'http://bengbuxx.com/gonggao'}
        ]
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      choose3(){
        console.log(1);
      },
      choose2(){
        console.log(2);
      },
      choose1(){
        console.log(3);
        this.$router.push('/list');
      },
      showCatesPopTipFunc(){
          console.log("232")
        this.showCatesPopTip = ! this.showCatesPopTip;
      },
      chooseCate(item){
        this.activeCateId = item.id;
        this.showCatesPopTip = false;

        // this.$router.push('/list');
          window.location.href= item.url;
      },

      toPersonInfo(){
        let userName = sessionStorage.getItem('userName');
        if(userName) {
          this.$router.push('/info');
        }else {
          this.$router.push('/info/login');
        }
      }
    },
    components:{
      
    }
 }
</script>
<style lang='scss' scoped>
  .footer {
      height:2.5rem;
      line-height:2.5rem;
      background:#2d8cf0;
      color: #fff;
      width:100%;
      position:absolute;
      z-index:200;
      bottom:0;
      text-align:center;
  }

  .nav .active {
    background: #5cadff;
  }

  .index-cates .ivu-poptip-body{
    padding: 0;
  }
  .index-cates .txt {
    color: #fff;
  }
  .cate-item>li {
    padding: 0.3rem 0.4rem;
    cursor: pointer;
    a {
        color: #333;
    }
    &:hover {
        background: #eee;
    }
  }
  .cate-item>li.active {
    background: #5cadff;
    a {
        color: #fff;
    }
  }

  .nav {
    display: flex;
    
    div {
      flex: 1;
    }
    a {
      color:#fff;
    }
  }

  .navs {
    .home {
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          position: relative;
      span {
        display: block;
        vertical-align: middle;
      }
      .home-icon {
        width: 1rem;
        height: 1rem;
        background: url('../assets/images/index.png') no-repeat 1px 1px;
      }
      .home-txt{
          font-size: .22rem;
          color: #888;
          height: .3rem;
          line-height: .3rem;
      }
    }
    
  }
</style>

