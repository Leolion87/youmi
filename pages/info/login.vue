<template>
  <div class="login">
    <div class='top'>
      <img src="~/assets/images/logo.png" style='height:2rem;'>
    </div>

    <Row type="flex" justify="center" class="login-box">
      <Col span="20" style="max-width: 400px;">
          <Form ref="formInline" 
                :model="formInline" 
                :rules="ruleInline"
                style="min-height:300px;">
            <!-- 用户名方式登录 -->
            <FormItem prop="userName" v-if=" showPhoneItem == false">
              <Input type="text" v-model="formInline.userName" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password" v-if=" showPhoneItem == false">
              <Input type="password" v-model="formInline.password" placeholder="密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>

            <!-- 手机验证码登录 -->
            <FormItem prop="phone" v-if=" showPhoneItem == true">
              <Row type="flex" justify="center">
                <Col span="18">
                     <Input v-model="formInline.phone" 
                            placeholder="手机号" 
                            style="width: 300px" />
                </Col>
                <Col span="4">
                    <Button type="primary">发送验证码</Button>
                </Col>
              </Row>

              <Row type="flex" justify="center" class-name='margin-top10'>
                <Col span="18">
                    <Input v-model="verify_code" 
                            placeholder="手机验证码" 
                            style="width: 300px" />
                </Col>
                <Col span="4">
                    <Button type="primary">登录</Button>
                </Col>
                
              </Row>
            </FormItem>

            <Row>
                <Col span="8">
                    <p  style="text-align: left;margin-left: 10px;margin：3px">忘记密码?
                      <a  href="javascript:void(0);" @click.stop='findPassWord'>找回</a>
                    </p>
                </Col>
                <Col span="12" offset="4">
                    <p style="text-align: left;margin-left: 10px;margin：3px">
                      其他方式登录:  
                      <a v-if="showPhoneItem == true" href="javascript:void(0);" @click.stop='useNameLogin'>用户名登录</a>
                      <a v-else href="javascript:void(0);" @click.stop='usePhoneLogin'>手机号登录</a>
                    </p>
                </Col>
            </Row>
            <FormItem style="margin-top: 10px;" v-if='showPhoneItem == false'>
              <Button type="primary"  @click="login('formInline')">登&nbsp;&nbsp;录</Button>
              <Button @click.stop="toRegister"  style="margin-left: 8px">注册</Button>
            </FormItem>
          </Form>
      </Col>
    </Row>

  </div>
</template>

<script>
import api from '@/service/api.js'
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
  name: 'login',
  data () {
    return {
      formInline: {
        phone: '',
        userName: '',
        password: ''
      },
      ruleInline: {
        phone: [
          { required: true, message: '请填写手机号', trigger: 'blur' }
        ],
        userName: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码.', trigger: 'blur' },
          { type: 'string', min: 6,max:8, message: '密码长度6-8位,且以两个英文字母开头。', trigger: 'blur' }
        ]
      },
      showPhoneItem: true,
      verify_code: ''
    }
  },
  methods:{
    //密码登录
    login(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let userName = this.formInline.userName;
          let userPwd = this.formInline.password;

          let userParmas = {
            name: userName,
            pwd: userPwd
          };

          api.userLogin(userParmas).then(res=>{
            if(res.code == 200){
              console.log(res.data);
              this.$Message.success(res.msg);
              this.$router.push('/');

              sessionStorage.setItem('userName',res.data.user_name);
              sessionStorage.setItem('userPwd',res.data.user_pwd);
              this.CAHNGEUSER_INFO(res.data);
            }else {
              this.$Message.error(res.msg);
            };
          },err=>{
            console.log(err);
          });
          
        } else {
          this.$Message.error('请输入有效的用户名和密码！');
        }
      })
    },
    toRegister(){
      this.$router.push('/info/register');
    },
    findPassWord(){
      this.$router.push('/info/findPassword');
    },
    useNameLogin(){
      this.showPhoneItem = false;
    },
    usePhoneLogin(){
      this.showPhoneItem = true;
    },
    ...mapMutations(['CAHNGEUSER_INFO']),
    ...mapActions(['userLogin'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login-box {
  height: 400px;
  margin-top: 2rem;
}

.login {
  .top {
    text-align: center;
    padding: 1rem 0.5rem;
    background: #2d8cf0;
  }
}
</style>
