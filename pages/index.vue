
<template>
  <div class="index">
    <v-header></v-header>
    <div id="main">
       <!--banner-->
        <div class="banners">
            <Carousel v-model="loopInitValue" loop autoplay>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="~/assets/images/1.jpg">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="~/assets/images/2.jpg">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="~/assets/images/3.jpg">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="~/assets/images/4.jpg">
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
        <!-- spirit-->
        <div class="index-image white">
            <div class="kind clearfix">
                <a class='left' 
                   v-for='(item,$index) in kinds' 
                   :key='$index' @click='chooseKind(item)'>
                    <img :src="item.imageUrl">
                    <span>{{item.name}}</span>
                </a>
            </div>
        </div>
        <div class='link white'>
            <Row>
                <Col span="8">
                    <a href=''>
                        <font>每日签到</font>
                        <span>天天签到送花贝</span>
                    </a>
                </Col>
                <Col span="8">
                    <a href=''>
                        <font class='color2'>优选福利</font>
                        <span>戳我了解更多</span>
                    </a>
                </Col>
                <Col span="8">
                    <a href=''>
                        <font class='color3'>一起来玩</font>
                        <span>邀请好友</span>
                    </a>
                </Col>
            </Row>
        </div>
        <div class='news white'>
            <ul class='index-news-list'>
                <li v-for='(item,$index) in news' :key='$index'>
                    <a href="" v-if='item.images.length==3'>
                        <div class='news-tit'>
                            <h6>{{item.title}}</h6>
                            <div class='news-tit-img1 pic3'>
                                <span class='nimg' 
                                      v-for='(item1,$index1) in item.images' 
                                      :style = '{background:"url("+item1.src+");background-repeat: no-repeat;background-size: cover;display: inline-block; " } ' 
                                      :key='$index1' >
                                     
                                </span>
                            </div>
                            <div class='news-info clearfix'>
                                <span>{{item.name}}</span>
                                <span>{{item.read}}阅读</span>
                                <span class='right'>5分钟前</span>
                            </div>
                        </div>
                    </a>
                    <a href=""  v-if='item.images.length == 1'>
                        <div class='news-tit news-right'>
                            <h6>{{item.title}}</h6>
                            <div class='news-info'>
                                <span>{{item.name}}</span>
                                <span>{{item.read}}阅读</span>
                            </div>
                        </div>
                        <div class='pa news-img'>
                            <img :src='item.images[0].src' class='lazy'>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import service from '~/service/index.js';
  import vFooter from '~/components/footer.vue';
  import vHeader from '~/components/header.vue';
  export default {
    data(){
      return {
          name: 'name',
          loopInitValue: 0,
          news: [
            {
                title: '最新通知！关于滁州碧桂园中央名邸延迟交房消息通告：调整达标后逐户沟通收楼',
                time: '2019-02-01',
                name: 'liqiang',
                read: 1009,
                images: [
                    {src:'http://pic.bbs.0550.com/forum/201905/01/162439r3pk8nzciz66gipx.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                    {src:'http://pic.bbs.0550.com/forum/201905/01/171356mn658hehmytytqfy.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                    {src:'http://pic.bbs.0550.com/forum/201905/01/171535m4899c41b4e6evbv.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'}
                ]
            },
            {
                title: '最新通知！关于滁州碧桂园中央名邸延迟交房消息通告：调整达标后逐户沟通收楼',
                time: '2019-02-01',
                name: 'liqiang',
                read: 1009,
                images: [
                    {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'}
                ]
            },
            {
                title: '最新通知！关于滁州碧桂园中央名邸延迟交房消息通告：调整达标后逐户沟通收楼',
                time: '2019-02-01',
                name: 'liqiang',
                read: 1009,
                images: [
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'}
                ]
            },
            {
                title: '最新通知！关于滁州碧桂园中央名邸延迟交房消息通告：调整达标后逐户沟通收楼',
                time: '2019-02-01',
                name: 'liqiang',
                read: 1009,
                images: [
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'}
                ]
            },
            {
                title: '最新通知！关于滁州碧桂园中央名邸延迟交房消息通告：调整达标后逐户沟通收楼',
                time: '2019-02-01',
                name: 'liqiang',
                read: 1009,
                images: [
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'}
                ]
            },
            {
                title: '最新通知！关于滁州碧桂园中央名邸延迟交房消息通告：调整达标后逐户沟通收楼',
                time: '2019-02-01',
                name: 'liqiang',
                read: 1009,
                images: [
                    {src:'http://pic.app.0550.com/_20190501153319_5cc94bbf0bcac.png',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190501133254_5cc92f86d882a.jpg',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'}
                ]
            },
            {
                title: '最新通知！关于滁州碧桂园中央名邸延迟交房消息通告：调整达标后逐户沟通收楼',
                time: '2019-02-01',
                name: 'liqiang',
                read: 1009,
                images: [
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'}
                ]
            },
            {
                title: '最新通知！关于滁州碧桂园中央名邸延迟交房消息通告：调整达标后逐户沟通收楼',
                time: '2019-02-01',
                name: 'liqiang',
                read: 1009,
                images: [
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'},
                    {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'}
                ]
            },
            
          ],
          showCatesPopTip: false,
          navActiveId: 1,
          activeCateId: 0,
          kinds:[
              { id: 1,
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '新房楼盘'
              },
              { id: 2,
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '经纪公司'
              },
              { id: 3,
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '行业新闻'
              },
              { id: 4,
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '融资总包'
              },
              { id: 5,
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '求职招聘'
              },
              { id: 6,
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '新盘推荐'
              },
              { id: 7,
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '同行交友'
              },
              { id: 8,
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '行业爆料'
              },
              { id: 9,
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '需求大厅'
              },
              { id: 0,
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '全部模块'
              }
          ]
      }
    },
    methods:{
      choose3(){
        console.log(1);

      },
      choose2(){
        console.log(2);
      },
      choose1(){
        console.log(3);
      },
      showCatesPopTipFunc(){
        this.showCatesPopTip = ! this.showCatesPopTip;
      },
      chooseCate(item){
        this.activeCateId = item.id;
        this.showCatesPopTip = false;

        
      },
      register(){
        this.$router.push('/register')
      },
      login(){
        this.$router.push('/login')
      },
      chooseKind(item){
        let _this = this;
        switch(item.id) {
            case 1:
                //新房楼盘
                _this.$router.push('/list');
            break;
        }
      }
    },
    components:{
        vFooter,
        vHeader
    }
  }
</script>
<style lang="scss">
  html, body {
    height:100%;
    margin:0;
    padding:0
  }
  
  #main {
      width:100%;
      overflow:auto;
      top:4rem;
      position:absolute;
      z-index:10;
      bottom:2rem;
      background: #F5F5F5;
      .index-image {
          background: #fff;
          .kind {
              font-size: 0px;
              padding-bottom: 0.28rem;
              height: 135px;
              a {
                  display: block;
                  vertical-align: middle;
                  color: #222222;
                  font-size: 0rem;
                  margin-top: 0.5rem;
                  width: 20%;
                  text-align: center;
                  line-height: 1.22;
                  cursor: pointer;
                  img {
                      width: 2rem;
                      height: 2rem;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      margin-bottom: 0.5rem;
                  }
                  span {
                      color: #222222;
                      font-size: 0.22rem;
                  }
              }
          }
      }
      .link {
          margin-top: 0.24rem;
          text-align:center;
          a {
                display: inline-block;
                vertical-align: middle;
                padding: 5px;
            font {
                color: #3d8de8;
                font-size: 0.34rem;
                line-height: 1;
                display: block;
                margin-top: 0.14rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-left: 0.1rem;
                padding-right: 0.1rem;
            }
            .color2 {
                color: #42b680 !important;
            }
            .color2 {
                color: #f90 !important;
            }
            span {
                    color: #999999;
                    font-size: 0.26rem;
                    letter-spacing: .01rem;
                    line-height: 0.26rem;
                    display: inline-block;
                    margin-bottom: 0.14rem;
                    margin-top: 0.12rem;
                    white-space: nowrap;
            }
            
            &:before {
                content: '';
                position: absolute;
                left: 0rem;
                top: 50%;
                transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                height: .6rem;
                border-left: 1px solid #ccc;
            }
            :first-child:before {
                border: 1px;
            }
            
          }
      }
      .news ul li {
        position: relative;
        clear: both;
        padding-left: .5rem;
        padding-right: .5rem;
        a {
            display: block;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            position: relative;
            min-height: 10rem;
            .news-tit{
                h6 {
                    color: #1c2438;
                    font-size: 0.9rem;
                    // font-weight: normal;
                    // line-height: 1rem;
                    // max-height: 2rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
            .news-info {
                color: #949494;
                font-size: 0rem;
                margin-top: 0.14rem;
                span {
                    margin-right: 0.2rem;
                    font-size: 0.24rem;
                    display: inline-block;
                    vertical-align: middle;
                    :last-child {
                        margin-right: 0rem;
                    }
                }
            }
        }
        &:after {
            position: absolute;
            content: "";
            width: 100%;
            left: 0;
            bottom: -5px;
            height: 1px;
            background-color: #eee;
            -webkit-transform: scale(1,.5);
            transform: scale(1,.5);
            -webkit-transform-origin: center bottom;
            transform-origin: center bottom;
        }
    }
  }
/*首页banner 图片*/
.banners img {
    width: 375px;
    height: 150px;
}

/*顶部icon*/
.header-top {
    line-height: 2.5rem;
    img {
        cursor: pointer;
        width:1.2rem;
        /*height: 1.2rem;*/
        text-align: center;

    }
}


.news-tit-img1 {
    margin-top: .18rem;
}
.news-tit-img1.pic3 {
    margin-left: -0.833%;
    position: relative;
    font-size: 0px;
}

.news-tit-img1 .nimg {
    display: inline-block;
    vertical-align: middle;
    font-size: 0px;
    width: 32.5%;
    margin-left: 0.833%;
    position: relative;
    padding-top: 25%;
    
    // background-color: #ededed;

    // background-repeat: no-repeat; 
    // background-size: cover; 
    // display: inline-block;
}


.news-right {
    min-height: 1.4rem;
    margin-right: 7.5rem;
}


 a .news-img {
    width: 7.5rem;
    height: 5.5rem;
    font-size: 0px;
    top: 0.2rem;
    right: 0px;
    background-color: #ededed;
}

.pa {
    position: absolute;
}
.news-img img {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 100%;
}

.lazy, .nimg {
    background-color: #F2F2F2;
    background-size: 76px auto;
    background-repeat: no-repeat;
    background-position: center;
}
</style>