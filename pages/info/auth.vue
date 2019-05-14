<template>
    <div class='auth'>
        <header class='auth-top'>
            认证中心
        </header>
        <section class='auth-content'>
            <Row class-name='margin-top15'>
                <Col span='5' class-name='item-title'>
                  地址:
                  
                </Col>
                <Col span='18' offset='1'>
                    <Col span='6'>
                        <Select v-model="province">
                          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                       </Select>
                    </Col>
                    <Col span='6' offset='2'>
                        <Select v-model="province" >
                          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                       </Select>
                    </Col>
                    <Col span='6' offset='2'>
                        <Select v-model="province">
                          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                       </Select>
                    </Col>
                </Col>
            </Row>
            <Row class-name='margin-top15'>
                <Col span='5' class-name='item-title'>
                  公司:
                </Col>
                <Col span='18' offset='1'>
                     <Input v-model="companyName" placeholder="公司名称"/>
                </Col>
            </Row>
            <Row class-name='margin-top15'>
                <Col span='5' class-name='item-title'>
                  身份证:
                </Col>
                <Col span='18' offset='1'>
                    <div class="demo-upload-list"
                         v-for="(item,$index) in uploadList" 
                         :key='$index'>
                        <template v-if="item.status === 'finished'">
                            <img :src="item.url">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                            </div>
                        </template>
                        <template v-else>
                            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                        </template>
                    </div>
                    <Upload
                        ref="upload"
                        :show-upload-list="false"
                        :default-file-list="defaultList"
                        :on-success="handleSuccess"
                        :format="['jpg','jpeg','png']"
                        :max-size="2048"
                        :on-format-error="handleFormatError"
                        :on-exceeded-size="handleMaxSize"
                        :before-upload="handleBeforeUpload"
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/"
                        style="display: inline-block;width:58px;">
                        <div style="width: 58px;height:58px;line-height: 58px;">
                            <Icon type="ios-camera" size="20"></Icon>
                        </div>
                    </Upload>
                    <Modal title="View Image" v-model="visible">
                        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
                    </Modal>
                </Col>
            </Row>
            <Row class-name='margin-top15'>
                <Col span='5' class-name='item-title'>
                电话:
                </Col>
                <Col span='18' offset='1'>
                     <Input v-model="companyName" placeholder="公司电话"/>
                </Col>
            </Row>
            <Row class-name='margin-top15'>
                <Col span='5' class-name='item-title'>
                    公司规模:
                </Col>
                <Col span='18' offset='1'>
                     <Select v-model="companyHuman" style="width:200px">
                        <Option v-for="item in companyHumanNumber" 
                             :value="item.value" 
                             :key="item.value">
                             {{ item.label }}
                        </Option>
                    </Select>
                </Col>
            </Row>
            <Row class-name='margin-top15'>
                <Col span='5' class-name='item-title'>
                   详情展示:
                </Col>
                <Col span='18' offset='1'>
                    234234243
                </Col>
            </Row>
            <Row class-name='margin-top15'>
                <Col span='5' class-name='item-title'>
                   公司简介:
                </Col>
                <Col span='18' offset='1'>
                    234234243
                </Col>
            </Row>
            <Row class-name='margin-top15'>
                <Col span='5' class-name='item-title'>
                   团队照片:
                </Col>
                <Col span='18' offset='1'>
                    234234243
                </Col>
            </Row>
        </section>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                province: '',
                city: '',
                county: '',

                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                companyName: '',

                defaultList: [
                    {
                        'name': 'a42bdcc1178e62b4694c830f028db5c0',
                        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                    },
                    {
                        'name': 'bc7521e033abdd1e92222d733590f104',
                        'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                    }
                ],
                imgName: '',
                visible: false,
                uploadList: [],
                companyHuman: '',//公司规模
                companyHumanNumber: [
                    {
                        value: '1',
                        label: '10人以下'
                    },
                    {
                        value: '2',
                        label: '10-20人'
                    }
                ],

            }
        },
        mounted () {
           // this.uploadList = this.$refs.upload.fileList;
        },
        methods: {
            show: function(){
              this.$refs['picker'].show();
            },
            select: function(){
              this.text = arguments
              console.log('select',arguments)
            },

            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
            }
        },
        components:{
           
        }
    }
</script>
<style lang='scss' scoped>
    .auth{
        // background: #EDEDEA;
        height: 100%;
        .auth-top {
            height: 3.5rem;
            width: 100%;
            background: #2d8cf0;
            font-size: 1rem;
            text-align: center;
            line-height: 3.5rem;
            color: #fff;
        }
        .auth-content {
            padding: 5px 8px;
            font-size: 1rem;
        }
    }
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }

    .auth-content .item-title{
        line-height: 32px;
        text-align: right;
    }
</style>

