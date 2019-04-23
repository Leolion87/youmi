<template>
  <div class="login">
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
             <a href="">找回</a>
           </p>
        <FormItem style="margin-top: 10px;">
          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
          <Button @click="handleSubmit('formInline')"  style="margin-left: 8px">注册</Button>
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
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

}
</style>
