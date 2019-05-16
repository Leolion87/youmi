<template>
  <div class="login">
    <div class='top'>
      <img src="~/assets/images/logo.png" style='height:2rem;'>
    </div>

    <Row type="flex" justify="center" class="login-box">
      <Col span="20" style="max-width: 400px;">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" style="min-height:300px;">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
           <p style="text-align: left;margin-left: 10px;margin：3px">忘记密码?
             <a href="javascript:void(0);" @click.stop='findPassWord'>找回</a>
           </p>
        <FormItem style="margin-top: 10px;">
          <Button type="primary" @click="login('formInline')">登录</Button>
          <Button @click.stop="toRegister"  style="margin-left: 8px">注册</Button>
        </FormItem>
      </Form>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    login(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let userName = this.formInline.user;
          let userPwd = this.formInline.password;

          let userParmas = {
            name: userName,
            pwd: userPwd
          };
          this.$axios.post("index.php/user/login/register",params).then(res=>{
            console.log(res);
          },err=>{
            console.log(err);
          });




          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    toRegister(){
      this.$router.push('/info/register');
    },
    findPassWord(){
      this.$router.push('/info/findPassword');
    }
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
