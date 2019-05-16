<template>
  <div class="findPassword">
    <Row type="flex" justify="center">
      <Col span="20" style="max-width: 400px;">
        <Input search enter-button="发送验证码" placeholder="请输入手机号" />
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
        name: "findPassword",
        data () {
          return {

          }
        },
        methods:{}
    }
</script>

<style lang='scss' scoped>
   .findPassword {
       padding: 3rem 1rem;
   }
</style>
