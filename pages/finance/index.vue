<template>
    <div class='finance'>
      <div class='top'>
        <div class='add'>
            <img src='../../assets/images/finace.jpg'>
        </div>
        <Row class-name='top-items'>
            <Col span='6'>
                <img src='http://pic.app.0550.com/_20180627152452_5b333bc476458.png'>
                <span>项目找总代</span>
             </Col>
            <Col span='6'>
                <img src='http://pic.app.0550.com/_20180627152452_5b333bc476458.png'>
                <span>总代找项目</span>
            </Col>
            <Col span='6'>
                <img src='http://pic.app.0550.com/_20180627152452_5b333bc476458.png'>
                <span>项目找资方</span>
            </Col>
            <Col span='6'>
                <img src='http://pic.app.0550.com/_20180627152452_5b333bc476458.png'>
                <span>二级渠道</span>
            </Col>
        </Row>
      </div>
      <Row class-name='forums'>
            <Col span='8' class-name='active'>
                <span>最新回复</span>
            </Col>
            <Col span='8'>
                <span>最新发布</span>
            </Col>
            <Col span='8'>
                <span>精华热贴</span>
            </Col>
      </Row>
      <section class='forums-list'>
            <div class='forums-box'>
                <div class='itme-wrap' v-for='(item,$index) in rencentAnswer' :key='$index'>
                    <!-- 一张图片 -->
                    <div class='item-inner'  v-if='item.images.length == 1'>
                        <h6>
                            {{item.title | substr}}
                            <a href="#" v-if="item.title.length > 100"> 全部</a>
                        </h6>
                        <div class="imgage-box">
                            <img :src='item.images[0].src' style='width:6.5rem;height: 5rem;'>
                        </div>
                        <div class='item-des'>
                            <div class='post-read'>
                                <div class='name'>{{item.name}}</div>
                                <div class='read'>{{item.read}}阅读</div>
                            </div>
                            <div class='post-time'>
                                {{item.time}}
                            </div>
                        </div>
                    </div>
                    <!-- 没有图片 -->
                    <div class='item-no-img'  v-if='item.images.length == 0'>
                        <h6>
                            {{item.title}}
                        </h6>
                        <div class='item-des'>
                            <div class='post-read'> 
                                <div class='name'>{{item.name}}</div>
                                <div class='read'>{{item.read}}阅读</div>
                            </div>
                           <div class='post-time'>
                                   {{item.time}}
                            </div>
                        </div>
                    </div>
                    <!-- 三张图片 -->
                    <div class='three-img'  v-if='item.images.length == 3'>
                        <h6>
                            {{item.title}}
                        </h6>
                        <div class='images'>
                           <div class='image-wrap' 
                                v-for="(image,$i) in item.images" 
                                :key='$i'>
                                <img :src='image.src'>
                           </div>
                        </div>
                        <div class='item-des'>
                            <div class='post-read'> 
                                <div class='name'>{{item.name}}</div>
                                <div class='read'>{{item.read}}阅读</div>
                            </div>
                           <div class='post-time'>
                                   {{item.time}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                rencentAnswer: [
                    {
                        title: '绍兴的项目300套房子，现在找有实力的公司合作开发',
                        time: '04-05',
                        name: '经纪',
                        read: 1009,
                        images: [
                            {src:'http://pic.bbs.0550.com/forum/201905/08/194339m88lcmyf31fb13ck.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '公寓项目正在找总代，需要的赶紧联系',
                        time: '04-08',
                        name: 'kaixin',
                        read: 20,
                        images: [
                            {src:'http://pic.app.0550.com/_20190509105951_5cd397a757664.png',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190509201250_5cd41942c5e72.jpg',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190508090045_5cd22a3de5724.jpg',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '南京手头有多个项目正在找总代理',
                        time: '02-01',
                        name: '朱先生',
                        read: 1009,
                        images: [
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161141scwmzl0wcowegwe7.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161142j4fze3o8ecxg8e5c.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161142iph70khkp3047ff7.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '安徽淮南市区，处女盘，热门板块，利润可观，正在火热招商中',
                        time: '02-01',
                        name: '哈哈',
                        read: 12,
                        images: [
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161141scwmzl0wcowegwe7.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161142j4fze3o8ecxg8e5c.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161142iph70khkp3047ff7.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '安徽淮南市区，处女盘，热门板块，利润可观，正在火热招商中',
                        time: '04-01',
                        name: '刘二',
                        read: 5,
                        images: []
                    },
                    {
                        title: '夜读:今天你可能错过的新闻都在这里!',
                        time: '04-01',
                        name: 'liliu',
                        read: 290,
                        images: []
                    },
                    {
                        title: '南京手头有多个项目正在找总代理',
                        time: '02-01',
                        name: 'liqiang',
                        read: 219,
                        images: [
                            {src:'http://pic.bbs.0550.com/forum/201905/09/144325w6677uw5f7if5g62.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/09/144328vb1l1bzjjebs3e5u.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/09/144329fdmmsppm8ms8lmym.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '南京手头有多个项目正在找总代理',
                        time: '02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190508110424_5cd247382b230.jpg',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '新房源发布测试问问企鹅委屈二位',
                        time: '04-01',
                        name: '刘二',
                        read: 5,
                        images: []
                    },
                    {
                        title: '除了房产证，还有一样东西同样需要引起大家重视',
                        time: '04-01',
                        name: '张三',
                        read: 290,
                        images: []
                    },
                    {
                        title: '南京手头有多个项目正在找总代理',
                        time: '02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161141scwmzl0wcowegwe7.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161142j4fze3o8ecxg8e5c.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161142iph70khkp3047ff7.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '用flex实现上下固定高度,中间自适应的页面布局',
                        time: '02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '新房源发布测试问问企鹅委屈二位',
                        time: '04-01',
                        name: '刘二',
                        read: 5,
                        images: []
                    },
                    {
                        title: '卖房子要交哪些税费？税费这样交才不吃亏',
                        time: '04-01',
                        name: '张三',
                        read: 290,
                        images: []
                    },
                    {
                        title: '松江将新增一所九年一贯制学校，这个区教学资源也太好了吧！',
                        time: '02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161141scwmzl0wcowegwe7.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161142j4fze3o8ecxg8e5c.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161142iph70khkp3047ff7.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '松江将新增一所九年一贯制学校，这个区教学资源也太好了吧！',
                        time: '02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190508172742_5cd2a10eed8f8.jpg',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '新房源发布测试问问企鹅委屈二位',
                        time: '04-01',
                        name: '刘二',
                        read: 5,
                        images: []
                    },
                    {
                        title: '夜读:今天你可能错过的新闻都在这里!',
                        time: '04-01',
                        name: '张三',
                        read: 290,
                        images: []
                    },
                    {
                        title: '松江将新增一所九年一贯制学校，这个区教学资源也太好了吧！',
                        time: '02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161141scwmzl0wcowegwe7.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161142j4fze3o8ecxg8e5c.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                            {src:'http://pic.bbs.0550.com/forum/201905/08/161142iph70khkp3047ff7.jpg?imageView2/1/w/452/h/348/q/100',title:'1',alt: '1'},
                        ]
                    }

            
                ],
                rencentPost: [],
                hotContent: []
            }
        },
        methods: {

        },
        components:{

        },
        filters: {
            substr: function(value) {
                if(value.length > 100){
                    return value.substr(0, 60)+'...';
                }else {
                    return value;
                }

            }
        }
    }
</script>
<style lang='scss' scoped>
  .finance {
      height: 100%;
      width: 100%;
      background: #f8f8f9;
     .top {
         .add {
             img {
                height: 8rem;
                width: 100%;
             }
         }
         .top-items {
             text-align: center;
             padding: 0.5rem 0;
             font-family: "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
             color: #000;
             background: #fff;
             img {
                width: 2rem;
                height: 2rem;
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 0.5rem;
             }
         }
         
     } 
     .forums {
             margin: 0.25rem 0;
             text-align: center;
             background: #fff;
             padding: 0.5rem 0;
             border-bottom: 1px solid #eee;
             .active {
                position: relative;
                color: #5cadff;
                &:after {
                  position: absolute;
                  left: 48px;
                  bottom: -0.3rem;
                  content: '';
                  width: 2.5rem;
		          height: 3px;
                  background:#5cadff;
                }
             }
             
     }
  }

  .forums-list {
        flex: 1;
        overflow: auto;
        background: #FCFCFC;
        .forums-box {
            padding: 5px 8px;
        }
  }
  .itme-wrap {
       min-height: 3.5rem;
       border-bottom: 1px solid #eee;
       h6{
           font-size: 1rem;
       }
       .item-inner {
           display: flex;
           padding: 5px 8px;
           flex-direction: column;
           justify-content: space-between;
           .imgage-box {
               padding: 5px;
           }
           .item-l{
              flex:1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 0 0.3rem;
              
           }
           .item-r{
              width:  6rem;
           }
       }
       .item-no-img {
           height: 5.5rem;
           padding: 5px 8px;

           display: flex;
           flex-direction: column;
           justify-content: space-between;
       }
       .three-img {
           padding: 5px 8px;
           

           display: flex;
           flex-direction: column;
           justify-content: space-between;

           .images {
               padding: 0.6rem;

               display: flex;
               flex-direction: row;
               justify-content: space-around;
               .image-wrap {
                    padding: 0.3rem;
                    width: 33.333%;
                    height: 5rem;
                    // text-align: center;
                    overflow: hidden;
                    img {
                        width: 6rem;
                    }
               }
           }
       }
   }

   .item-des {         
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .post-read {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 6rem;

          color: #464c5b;
          font-size: 0.8rem;
          .read {
             align-items: flex-end; 
          }
      }
    }
</style>

