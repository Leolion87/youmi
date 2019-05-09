<template>
    <div class='employment'>
        <div class="adds">
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
        <div class='isTopForums-box'>
            <Row class-name='isTopForums' 
                 v-for='(item,$index) in isTopForums' 
                 :key='$index'>
                <Col span='24' class-name='forum-item'>
                    <Col span='2' class-name='isTopTxt'>
                        置顶
                    </Col>
                    <Col span='21' offset='1'>
                    {{item.title}}
                    </Col>
                </Col>
                
            </Row>
        </div>
        <div class='infos'>
            <div class='list' 
                 v-for='(item,$index) in rencentAnswer' 
                 :key='$index'>
                <div  class='forum-item'>
                    <div  class='forum-title'>
                        <h5>{{item.title}}</h5>
                    </div>  
                    <div class='forum-info'>
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
    </div>
</template>
<script>
    export default {
        data(){
            return {
                loopInitValue: 0,
                rencentAnswer:[
                    {
                     id: 1,
                     title: '求职（汉州、海宁）案场销售',
                     name: 'xiaomi',
                     read: '108',
                     time: '08-09'
                    },
                    {
                     id: 1,
                     title: '求职（汉州、海宁）案场销售',
                     name: 'xiaomi',
                     read: '108',
                     time: '08-09'
                    },
                    {
                     id: 1,
                     title: '求职（汉州、海宁）案场销售',
                     name: 'xiaomi',
                     read: '108',
                     time: '08-09'
                    },
                    {
                     id: 1,
                     title: '求职（汉州、海宁）案场销售',
                     name: 'xiaomi',
                     read: '108',
                     time: '08-09'
                    },
                    {
                     id: 1,
                     title: '求职（汉州、海宁）案场销售',
                     name: 'xiaomi',
                     read: '108',
                     time: '08-09'
                    },
                    {
                     id: 1,
                     title: '求职（汉州、海宁）案场销售',
                     name: 'xiaomi',
                     read: '108',
                     time: '08-09'
                    },
                ],
                isTopForums:[
                  {
                    id: 1,
                    isTop: 1,
                    title: 'V苏州金保护地产 (苏州/昆山)招聘市场'
                  },
                  {
                    id: 2,
                    isTop: 1,
                    title: 'V苏州金保护地产 (苏州/昆山)招聘市场'
                  },
                  {
                    id: 3,
                    isTop: 1,
                    title: 'V苏州金保护地产 (苏州/昆山)招聘市场'
                  },
                  {
                    id: 4,
                    isTop: 1,
                    title: 'V苏州金保护地产 (苏州/昆山)招聘市场'
                  },
                  {
                    id: 5,
                    isTop: 1,
                    title: 'V苏州金保护地产 (苏州/昆山)招聘市场'
                  },
                  {
                    id: 6,
                    isTop: 1,
                    title: 'V苏州金保护地产 (苏州/昆山)招聘市场'
                  }
                ]
            }
        },
        methods: {

        },
        components:{

        }
    }
</script>
<style lang='scss' scoped>

  .employment {
      height: 100%;
      width: 100%;
      background: #f8f8f9;
    .adds {
        /*首页banner 图片*/
        img {
            width: 100%;
            height: 150px;
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

  .isTopForums-box{
      .isTopForums {
          padding: 5px 8px;
           background: #fff;
          .forum-item {
              border-bottom: 1px solid #eee;
              padding: 3px 0;
              color: #17233d;
              font-size: 1rem;
              .isTopTxt {
                color: #0A81F0;
              }
          }
      }
  }

  .infos {
      margin-top: 0.25rem;
      background: #fff;
      .list {
          padding: 5px 8px;
          height: 4rem;
      }
      .post-read {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 6rem;
          padding: 0.5rem 0;

          color: #464c5b;
          font-size: 1rem;
          .read {
             align-items: flex-end; 
          }
      }
      .forum-item {
          border-bottom: 1px solid #eee;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 5px 8px;
          .forum-info {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .forum-title {
            //   h5{
            //       color:#17233d;
            //       font-size: 1rem;
            //   }
          }
      }
  }

</style>

