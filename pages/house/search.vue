<template>
    <div class='h-search'>
        <Row class-name='search'
             type="flex" 
             justify="center" >
            <Col span="19">
                <Input search v-model='searchValue' placeholder="请输入楼盘名称" @on-search='search'/>
            </Col>
            <Col span="4">
                <Button type="text" @click.stop='returnHome'>取消</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
  import api from '@/service/api.js'
  import {mapState,mapActions,mapMutations} from 'vuex';
    export default {
        data(){
            return {
                searchValue: ''
            }
        },
        methods: {
            returnHome(){
                this.$router.push('/house');
            },
            search(){
                let params = {
                    page_index: 1,
                    page_size: 30,
                    condition: this.searchValue
                };

                api.getNewHouse(params).then(res=>{
                    if(res.success) {
                        if(res.data.data && res.data.data.length) {
                            let temp = [];
                            let list = res.data.data;

                            list.forEach(item => {
                            let obj = {
                                id: item.house_id,
                                name: item.house_name,
                                isTop: item.isTop,
                                isCommission: item.isCommission,
                                price: item.house_price,
                                address: item.province + item.city,
                                houseType: item.house_type.split(','),
                                company: item.company,
                                thumbnail: 'http://127.0.0.1'+item.house_banner1
                            };
                            temp.push(obj);
                            });
                            //更新数据
                            this.CHANGE_NEWHOUSE(temp);
                        }else {
                            this.CHANGE_NEWHOUSE([]);
                        };
                        this.$router.push('/house');
                    }else {
                        this.$Message.error('参数错误');
                        this.$router.push('/house');
                    };
                },err=>{
                    console.log(err);

                });
            },
             ...mapMutations(['CHANGE_NEWHOUSE'])
        },
        components:{
            
        }
    }
</script>
<style lang='scss' scoped>
    .h-search {
        padding: 3rem 8px;
        .search {

        }
    }
</style>

