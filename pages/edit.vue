<template>
    <div class='edit'>
        <header class='edit-top'>
            个人信息
        </header>
        <section class='infos'>
            <Row class-name='item info-data'>
                <Col span='24' class-name='info-item'>
                    <Col span="8">头像</Col>
                    <Col span="4" offset="12">
                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
                <Col span='24' class-name='info-item'>
                    <Col span="8">用户名</Col>
                    <Col span="6" offset="10">
                    <span>火焰</span>
                    <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
                <Col span='24' class-name='info-item'>
                    <Col span="8">手机</Col>
                    <Col span="6" offset="10">
                        <span>15255575890</span>
                        <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
                <Col span='24'>
                    <Col span="8">性别</Col>
                    <Col span="6" offset="10">
                        <span>男</span>
                        <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
                
            </Row>
            <Row class-name='item margin-top10'>
                <Col span='24' class-name='info-item'>
                    <Col span="8">生日</Col>
                    <Col span="6" offset="10">
                        <span>1992-01-01</span>
                        <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
                <Col span='24'>
                    <Col span="8">签名</Col>
                    <Col span="10" offset="2">
                        <Input v-model="value5" type="textarea" 
                                placeholder="Enter something..." />
                        <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
            </Row>
            <Row class-name='item margin-top10 register-date'>
                <Col span='24'>
                    <Col span="8">注册时间</Col>
                    <Col span="6" offset="10">
                        <span>2019-01-01</span>
                        <Icon type="ios-arrow-forward" />
                    </Col>
                </Col>
                
            </Row>
            <Row class-name='item margin-top10 info-verify '>
                <Col span='24'>
                    <Col span="8">认证</Col>
                    <Col span="6" offset="10">
                        <a href='#'>前去认证</a>
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
    export default {
        data(){
            return {
                value5: ''
            }
        },
        methods: {

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
                   padding: 8px 5px;
                   border-bottom: 1px solid #ccc;
                }
            }
        }
    }
</style>

