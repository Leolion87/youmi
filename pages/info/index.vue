<template>
   <div class='info'>
      <v-header></v-header>
      <div class='info-top'>
        <Row class-name='user-info'>
            <Col span='4'>
                <div class='c-avatar'>
                    <img src='https://i.loli.net/2017/08/21/599a521472424.jpg'>
                </div>
            </Col>
            <Col span='18'>
                <Col span='24' class-name='edit-level'>
                    <span class='user-name'>火焰</span>
                    <span class='info-label level'>LV1</span>
                    <span class="info-label tag">举人</span>
                </Col>
                <Col span='24' class='margin-top5' class-name='edit-label'>
                   还没有个性签名，快去编辑吧!
                </Col>
            </Col>
            <Col span='24' class='margin-top10'>
                <Col span='12'>
                    <div class='edit-data user-data' @click.stop='editData'>
                        <Icon type="ios-create-outline" size='16'/>
                        编辑资料
                    </div>
                        
                </Col>
                <Col span='12'>
                    <div class='edit-data mark'>
                        <Icon type="ios-create-outline" size='16'/>
                        每日签到
                    </div>
                </Col>
            </Col>
        </Row>
        <Row class-name='score-box'>
            <Card :bordered="false" style='height: 60px;text-align: center;'>
                <Col span='6'>
                    0.00<br>
                    钱包
                </Col>
                <Col span='6'>
                    0.00<br>
                    金币</Col>
                <Col span='6'>
                    0<br>
                    礼物
                </Col>
                <Col span='6'>
                    LV1<br>
                    等级
                </Col>
            </Card>
        </Row>
        <Row class-name='daily-box'>
            <h5 class='title'>
                日常管理
                <span class='before'></span>
            </h5>
            <div class="kind clearfix">
                <a class='left' v-for='(item,$index) in kinds' :key='$index'>
                    <img :src="item.imageUrl">
                    <span>{{item.name}}</span>
                </a>
            </div>
            
        </Row>
        <Row class-name='daily-box margin-top10'>
            <h5 class='title'>
                分类信息
                <span class='before'></span>
            </h5>
            <div class="kind clearfix">
                <a class='left' v-for='(item,$index) in kinds' :key='$index'>
                    <img :src="item.imageUrl">
                    <span>{{item.name}}</span>
                </a>
            </div>
            
        </Row>
        <Row class-name='daily-box margin-top10'>
            <h5 class='title'>
                其他
                <span class='before'></span>
            </h5>
            <div class="kind clearfix">
                <a class='left' v-for='(item,$index) in kinds' :key='$index'>
                    <img :src="item.imageUrl">
                    <span>{{item.name}}</span>
                </a>
            </div>
            
        </Row>
      </div>

      <v-footer></v-footer>
   </div>
</template>
<script>
import vFooter from '~/components/footer.vue';
import vHeader from '~/components/cheader.vue';
 export default {
    data(){
         return {
             kinds:[
              {
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '新房'
              },
              {
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '求职招聘'
              },
              {
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '同城交友'
              },
              {
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '新房'
              },
              {
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '求职招聘'
              },
              {
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '同城交友'
              },
              {
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '新房'
              },
              {
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '求职招聘'
              },
              {
                imageUrl: 'http://pic.app.0550.com/_20180627152452_5b333bc476458.png',
                name: '同城交友'
              }
          ]
         }
    },
    methods: {
      editData(){
          this.$router.push('/info/edit');
      }

    },
    components:{
        vFooter,
        vHeader
    }
 }
</script>
<style lang='scss' scoped>
  .info-top {
      width:100%;
      overflow:auto;
      top:4rem;
      position:absolute;
      z-index:10;
      bottom:2rem;
      background: #F5F5F5;
    .user-info {
        padding: 8px 10px;
        .c-avatar img{
            width: 50px;
            height: 50px;
            border-radius: 4px;
            line-height: 50px;
            text-align: center;
            cursor: pointer;

        }
        .edit-label{
            color: #808695;
            font-size: 0.8rem;
        }
        .edit-level {
            span {
                display: inline-block;
                &.user-name {
                  font-size: 1rem;
                }
                &.level {
                    margin-left: 0.8rem;
                }
                &.info-label {
                    border-radius: 0.2rem;
                    background: #46C1D3;
                    padding: 2px 3px;
                    font-size: 0.4rem;
                    color: #fff;
                }
            }
        }
        .edit-data {
            text-align: center;
            &.user-data {
                font-size: 1rem;
            }
            &.mark {
                font-size: 1rem;
                color: #E0482C;
            }
        }
    }
    .score-box {
        padding: 5px 10px;
    }
    .daily-box {
        padding: 5px 10px;
        background: #FCFCFC;
        .title {
            padding-left: 0.7rem;
            position: relative;
            .before{
                width: 3px;
                height: 100%;
                background: #46C1D3;
                position: absolute;
                top: 0;
                left: 1px;
                // border: 2px solid #46C1D3;
            }
        }
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
  }
</style>

