<template>
    <div class='news'>
        <header class='header'>
            <h4>新房圈-行业新闻</h4>
            <Row class-name='tabs'>
                <Col span='8' class-name='h-post'>最新回复</Col>
                <Col span='8' class-name='h-post active'>最新发布</Col>
                <Col span='8' class-name='h-post'>精华热贴</Col>
            </Row>
        </header>
        <div class='grey'></div>
        <section class='news-list'>
            <div class='news-box'>
                <div class='itme-wrap' v-for='(item,$index) in rencentAnswer' :key='$index'>
                    <!-- 一张图片 -->
                    <div class='item-inner'  v-if='item.images.length == 1'>
                        <div class='item-l'>
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
                        <div class='item-r'>
                            <img :src='item.images[0].src' style='width:100%;height: 5rem;'>
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
                        title: '各位大神，求借一份实验中学高三十班的物理笔记，买也行',
                        time: '2019-02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190508105150_5cd244468c7bc.jpg',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '新房源发布测试问问企鹅委屈二位',
                        time: '2019-04-01',
                        name: '刘二',
                        read: 5,
                        images: []
                    },
                    {
                        title: '夜读:今天你可能错过的新闻都在这里!',
                        time: '2019-04-01',
                        name: '张三',
                        read: 290,
                        images: []
                    },
                    {
                        title: '用flex实现上下固定高度,中间自适应的页面布局',
                        time: '2019-02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190508111314_5cd2494a75f73.jpg',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190508111314_5cd2494a2b11a.jpg',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190508111314_5cd2494a2b11a.jpg',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '用flex实现上下固定高度,中间自适应的页面布局',
                        time: '2019-02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190508105150_5cd244468c7bc.jpg',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '新房源发布测试问问企鹅委屈二位',
                        time: '2019-04-01',
                        name: '刘二',
                        read: 5,
                        images: []
                    },
                    {
                        title: '夜读:今天你可能错过的新闻都在这里!',
                        time: '2019-04-01',
                        name: '张三',
                        read: 290,
                        images: []
                    },
                    {
                        title: '用flex实现上下固定高度,中间自适应的页面布局',
                        time: '2019-02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '用flex实现上下固定高度,中间自适应的页面布局',
                        time: '2019-02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '新房源发布测试问问企鹅委屈二位',
                        time: '2019-04-01',
                        name: '刘二',
                        read: 5,
                        images: []
                    },
                    {
                        title: '夜读:今天你可能错过的新闻都在这里!',
                        time: '2019-04-01',
                        name: '张三',
                        read: 290,
                        images: []
                    },
                    {
                        title: '用flex实现上下固定高度,中间自适应的页面布局',
                        time: '2019-02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190508111314_5cd2494a2b11a.jpg',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '用flex实现上下固定高度,中间自适应的页面布局',
                        time: '2019-02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190508172742_5cd2a10eed8f8.jpg',title:'1',alt: '1'},
                        ]
                    },
                    {
                        title: '新房源发布测试问问企鹅委屈二位',
                        time: '2019-04-01',
                        name: '刘二',
                        read: 5,
                        images: []
                    },
                    {
                        title: '夜读:今天你可能错过的新闻都在这里!',
                        time: '2019-04-01',
                        name: '张三',
                        read: 290,
                        images: []
                    },
                    {
                        title: '用flex实现上下固定高度,中间自适应的页面布局',
                        time: '2019-02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190508172742_5cd2a10eed8f8.jpg',title:'1',alt: '1'},
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

        }
    }
</script>
<style lang='scss' scoped>
   .news {
       display:flex;
       flex-direction: column;
       height:100%;
       .header {
        //     height: 3rem;
        //    line-height: 3rem;
           h4 {
               height: 2.5rem;
               line-height: 2.5rem;
               text-align: center;
               background: #2d8cf0;
               color: #fff;
           }
           .tabs {
               text-align: center;
               height: 1.5rem;
               line-height: 1.5rem;
               color: #808695;
               .h-post{
                   &.active {
                      color: #5cadff;
                   }
               }
           }
       }
       .grey {
           height: 0.5rem;
           background: #f8f8f9;
       }
       .news-list {
           flex: 1;
           overflow: auto;
           .news-box {
               padding: 5px 8px;
           }
       }
   }

   .itme-wrap {
       min-height: 3.5rem;
       border-bottom: 1px solid #eee;
       .item-inner {
           display: flex;
           padding: 5px 8px;
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
           height: 3.5rem;
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

