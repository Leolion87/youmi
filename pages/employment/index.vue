<template>
    <div class='employment'>
        <div class="adds">
            <Carousel v-model="loopInitValue" loop autoplay>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="http://www.xinfangquan.cn/images/banner/zhaopin1.jpg">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="http://www.xinfangquan.cn/images/banner/zhaopin2.jpg">
                    </div>
                </CarouselItem>
                
            </Carousel>
        </div>
        <!-- <Row class-name='forums'>
            <Col span='8' class-name='active'>
                <span>最新回复</span>
            </Col>
            <Col span='8'>
                <span>最新发布</span>
            </Col>
            <Col span='8'>
                <span>精华热贴</span>
            </Col>
        </Row> -->
        <div class='sort'>
            <Row>
                <Col span="6">
                    <Cascader :data="data" @on-change="handleChange">
                        {{ text }} <Icon type="md-arrow-dropdown" />
                    </Cascader>
                </Col>
                <Col span="6">
                    <Dropdown>
                        <span>
                            性质
                            <Icon type="md-arrow-dropdown" />
                        </span>
                        <DropdownMenu slot="list">
                            <DropdownItem>招聘</DropdownItem>
                            <DropdownItem>求职</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col span="6">
                    <Dropdown>
                        <span>
                            薪资
                            <Icon type="md-arrow-dropdown" />
                        </span>
                        <DropdownMenu slot="list">
                            <DropdownItem>3000以下</DropdownItem>
                            <DropdownItem>3000-5000</DropdownItem>
                            <DropdownItem>5000-8000</DropdownItem>
                            <DropdownItem>8000-12000</DropdownItem>
                            <DropdownItem>12000-15000</DropdownItem>
                            <DropdownItem>15000-20000</DropdownItem>
                            <DropdownItem>20000-25000</DropdownItem>
                            <DropdownItem>25000-30000</DropdownItem>
                            <DropdownItem>30000-40000</DropdownItem>
                            <DropdownItem>40000-50000</DropdownItem>
                            <DropdownItem>50000以上</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col span="6" class-name='more-sort'>
                   <span>更多</span>
                   <Icon type="md-arrow-dropdown" />
                </Col>
            </Row>
        </div>
        <div class='isTopForums-box'>
            <Row class-name='isTopForums' 
                 v-for='(item,$index) in isTopForums' 
                 :key='$index'>
                <Col span='24' class-name='forum-item'>
                    <Col span='3' class-name='isTopTxt'>
                        置顶
                    </Col>
                    <Col span='20' offset='1'>
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
                ],
                text: '区域',
                data: [
                  {
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                  }, 
                  {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                  }],
            }
        },
        methods: {
            handleChange(){}
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
          height: 4.5rem;
      }
      .post-read {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 8rem;
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
              h5{
                  color:#17233d;
                  font-size: 1rem;
                  font-weight: normal;
              }
          }
      }
  }
  .sort {
    padding: 5px 8px;
    text-align: center;
  }
</style>

