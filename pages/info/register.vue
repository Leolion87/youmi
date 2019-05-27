<template>
  <div class="register">
    <div class='top'>
      <img src="~/assets/images/logo.png" style='height:2rem;'>
    </div>
    <Row type="flex" justify="center">
      <Col span="20" style="max-width: 400px;">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="类型" prop="user_type">
            <RadioGroup v-model="formValidate.user_type">
              <Radio label="1">分销经纪公司</Radio>
              <Radio label="2">总代公司</Radio>
              <Radio label="3">开发商</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="用户名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入用户名"></Input>
          </FormItem>
          <FormItem label="密码" prop="password">
            <Input type="password" v-model="formValidate.password" 
                  placeholder="密码由首位2个英文字母和6个数字组成."></Input>
          </FormItem>
          <FormItem label="手机号" prop="phone">
            <Input v-model="formValidate.phone" placeholder="请输入手机号码"></Input>
          </FormItem>
          <FormItem label="验证码" prop="varify_code">
               <Input search enter-button="发送验证码"
                      v-model="formValidate.varify_code" 
                      placeholder="请输入手机验证码"/>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    //密码验证规则： 2个字母+6个数字
    // const password = (rule, value, callback) => {
    //   let reg = /^[a-zA-Z]{2}\d{6}$/; 
    //   if (value === '') {
    //     callback(new Error('密码不能为空'));
    //   }else if(!reg.test(value)){
    //     callback(new Error('密码由首位2个英文字母和6个数字组成.'));
    //   }else {
    //     return ;
    //   }
    // };


    return {
      formValidate: {
        name: "",
        user_type: 3,
        varify_code: "",
        password: "",
        phone: "",
        interest: [],
        date: "",
        time: "",
        desc: ""
      },
      ruleValidate: {
        name: [
          { required: true, max: 10,message: "用户名不能为空", trigger: "blur" }
        ],
        password: [
          // { required: true,validator: password, trigger: "blur"}
          {required: true,message: '密码不能为空',trigger: 'blur'},
          {type: 'string',pattern: /^[a-zA-Z]{2}\d{6}$/,message: '密码由首位2个英文字母和6个数字组成.',trigger: 'blur'}
        ],
        phone: [
          { required: true, len: 11,message: "请输入正确的手机号", trigger: "blur" },
        ],
        varify_code: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change"
          },
          {
            type: "array",
            max: 2,
            message: "Choose two hobbies at best",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          let userName = this.formInline.user;
          let userPwd = this.formInline.password;

          let userInfo = {
            name: userName,
            pwd: userPwd
          };
          this.$axios.post("index.php/user/login/login",params).then(res=>{
            if(res.code == 200){
              this.$Message.error(res.message);
            }else {
              this.$Message.error(res.message);
            }
          },err=>{
            console.log(err);
          });


          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

<style lang='scss' scoped>
h1,
h2 {
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

.register {
  .top {
    text-align: center;
    padding: 1rem 0.5rem;
    background: #2d8cf0;
  }
}
</style>
