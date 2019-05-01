<template>
   <footer class='footer'>
        <Row class='nav'>
            <!-- <Col span="6">
                 <a href="http://www.bengbuxx.com" class='f-white'>首页</a>
            </Col>
            <Col span="6" class='index-cates'>
            <Poptip v-model='showCatesPopTip'>
                <a href='javascript:void(0);' class='txt' @click.stop='showCatesPopTipFunc'>分类信息</a>
                <div class="api" slot="content" width='150'>
                    <div style='color: #495060;'>
                        <ul class='cate-item'>
                            <li v-for='(item,index) in cates' 
                                @click.stop='chooseCate(item)'
                                :class="{active: activeCateId == item.id}"
                                :key='index'>
                                <a href="javascript:void(0);">
                                    {{item.name}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Poptip>
            </Col>
            <Col span="6">
            <Poptip content="content" >
                <a href="http://www.bengbuxx.com" style="color:#fff;">广告服务</a>
            </Poptip>
            </Col>
            <Col span="6">
                <div @click.stop='choose3'>个人信息</div>
            </Col> -->


            <div class='index'>首页</div>
            <div class='index'>动态</div>
            <div class='index'>发布</div>
            <div class='index'>消息</div>
            <div class='index'>我的</div>
        </Row>
   </footer>
</template>
<script>
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
  }

</style>

