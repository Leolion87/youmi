<template>
    <div class='edit'>
        <header class='edit-top'>
            个人信息
        </header>
        <section class='infos'>
            <Row class-name='item info-data'>
                <Col span='24' class-name='info-item'>
                    <Col span="8" style='text-align:left;'>头像:</Col>
                    <Col span="6" offset="10" style='text-align:right;'>
                        <div class='avatar-box'>
                            <img v-if="userInfo.thumbnail" :src='userInfo.thumbnail'>
                            <img v-else :src='defaultAvatar'>
                            <Icon type="ios-arrow-forward" class='arrow'/>
                            <input type="file" id="avatarFile" @change='uploadAvatar($event)'/>
                        </div>
                        
                    </Col>
                </Col>
                <Col span='24' class-name='info-item'>
                    <Col span="8"  style='text-align:left;'>用户名:</Col>
                    <Col span="6" offset="10" style='text-align:right;'>
                      <span class='nick-name'>
                          昵称
                          <!-- {{userInfo.nickName}} -->
                      </span>
                      <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
                <Col span='24' class-name='info-item'>
                    <Col span="8" style='text-align:left;'>手机:</Col>
                    <Col span="6" offset="10" style='text-align:right;'>
                        <span>
                            电话
                            <!-- {{userInfo.phone}} -->
                        </span>
                        <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
                <Col span='24' class-name='info-item-sex'>
                    <Col span="8" style='text-align:left;'>性别:</Col>
                    <Col span="6" offset="10" style='text-align:right;'>
                        <span>
                            性别
                            <!-- {{userInfo.sex}} -->
                        </span>
                        <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
                
            </Row>
            <Row class-name='item margin-top10'>
                <Col span='24' class-name='info-item'>
                    <Col span="8" style='text-align:left;'>生日:</Col>
                    <Col span="6" offset="10" style='text-align:right;'>
                        <span>
                            生日
                            <!-- {{userInfo.birthday}} -->
                        </span>
                        <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
                <Col span='24'  class-name='info-item'>
                    <Col span="3" style='text-align:left;'>签名:</Col>
                    <Col span="20" offset="1">
                        <Input v-model="value5" type="textarea" 
                                placeholder="编辑个性签名" />
                    </Col>
                </Col>
            </Row>
            <Row class-name='item margin-top10 register-date'>
                <Col span='24'>
                    <Col span="8" style='text-align:left;'>注册时间:</Col>
                    <Col span="6" offset="10" style='text-align:right;'>
                        <span>
                            注册时间
                            <!-- {{userInfo.registerDate}} -->
                        </span>
                        <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
                
            </Row>
            <Row class-name='item margin-top10 info-verify '>
                <Col span='24'>
                    <Col span="8" style='text-align:left;'>认证:</Col>
                    <Col span="6" offset="10" style='text-align:right;'>
                        <a href='javascript:void(0);' 
                           @click.stop='goToAuth'>前去认证</a>
                        <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
            </Row>
            <Row class-name='margin-top10'>
                 <Col span='24'>
                    <Button type="warning" long>完善个人资料</Button>
                </Col>
            </Row>
        </section>
    </div>
</template>
<script>
    import api from '@/service/api.js'
    import {mapState,mapActions,mapMutations} from 'vuex';
    export default {
        data(){
            return {
                value5: '',
                // userInfo: {
                //    nickName: '火焰',
                //    phone: '18900000000',
                //    sex: '男',
                //    birthday: '1992-01-01',
                //    signature: '没有个性签名，就是好签名',
                //    thumbnail: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
                //    registerDate: '2019-09-01',
                //    isCertification: 0
                // },

                tempavatar: '',
                defaultAvatar: 'http://www.xinfangquan.cn/images/default_avatar.jpg',
            }
        },
        computed: {
           ...mapState(['userInfo'])
        },
        methods: {
            goToAuth(){
                this.$router.push('/info/auth');
            },
            //上传头像
            uploadAvatar(e){
                let file = e.target.files[0];
                
                let formData = new FormData(); 
				formData.append('file', file); 
				formData.append('user_id', 6);

                api.uploadAvatar(formData).then(res => {
                    console.log(res)
                },err=>{
                    console.log(err)
                })
            }
        },
        components:{

        }
    }
</script>
<style lang='scss' scoped>
    .edit {
        background: #EDEDEA;
        height: 100%;
        .edit-top {
            height: 4rem;
            width: 100%;
            background: #2d8cf0;
            font-size: 1.5rem;
            text-align: center;
            line-height: 4rem;
            color: #fff;
        }
        .infos {
            .item {
                padding: 8px 5px;
                background:#fff;
                border-bottom: 1px solid #ccc;
                .info-item{
                   padding: 10px 5px;
                   border-bottom: 1px solid #ccc;
                }
                .info-item-sex{
                   padding: 10px 5px;
                }
            }
        }
    }

    .avatar-box {
        position: relative;
        overflow: hidden;
    }
    .avatar-box img{
        display: inline-block;
        vertical-align: middle;
        width: 25px;
        height: 25px;
        border-radius: 4px;
        line-height: 25px;
        text-align: center;
    }
    .avatar-box .arrow {
        display: inline-block;
        vertical-align: middle;
    }
    .avatar-box #avatarFile{
        position: absolute;
        left: 0px;
        top: 0px;
        opacity: 0;
        -ms-filter: 'alpha(opacity=0)';
    }

    .info-item {
        .nick-name {
            color: #c5c8ce;
        }
    }
</style>

