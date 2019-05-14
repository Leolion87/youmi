<template>
  <div class="register">
    <Row type="flex" justify="center">
      <Col span="20" style="max-width: 400px;">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="类型" prop="user_type">
            <RadioGroup v-model="formValidate.user_type">
              <Radio label="1">分销经纪人</Radio>
              <Radio label="2">渠道专员</Radio>
              <Radio label="3">其他</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="用户名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入用户名"></Input>
          </FormItem>
          <FormItem label="密码" prop="password">
            <Input type="password" v-model="formValidate.password" placeholder="请输入密码"></Input>
          </FormItem>
          <FormItem label="确认密码" prop="repassword">
            <Input v-model="formValidate.repassword" placeholder="请再次输入密码"></Input>
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
    return {
      formValidate: {
        name: "",
        user_type: 3,
        varify_code: "",
        password: "",
        repassword: "",
        interest: [],
        date: "",
        time: "",
        desc: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        repassword: [
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        varify_code: [
          { required: true, message: "密码不能为空", trigger: "blur" }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  padding: 8px;
}
</style>
