<template>
    <div class='news'>
        <header class='header'>
            <h4>新房圈-行业新闻</h4>
            <Row class-name='tabs'>
                <Col span='8'>最新回复</Col>
                <Col span='8'>最新发布</Col>
                <Col span='8'>精华热贴</Col>
            </Row>
        </header>
        <div class='grey'></div>
        <section class='news-list'>
            <div class='news-box'>
                <Row v-for='(item,$index) in rencentAnswer' :key='$index'>
                    <Col>
                            
                    </Col>
                </Row>
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
                        title: '用flex实现上下固定高度,中间自适应的页面布局',
                        time: '2019-02-01',
                        name: 'liqiang',
                        read: 1009,
                        images: [
                            {src:'http://pic.app.0550.com/_20190501153321_5cc94bc13f176.png',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'},
                            {src:'http://pic.app.0550.com/_20190329184045_5c9df62d1c173.jpg',title:'1',alt: '1'}
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
               background: #369;
               border: 1px solid #ccc;
           }
       }
   }
</style>

