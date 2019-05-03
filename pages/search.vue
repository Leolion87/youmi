<template>
    <div class='index-search'>
        <Row class-name='search'
             type="flex" 
             justify="center" >
            <Col span="19">
                <Input search placeholder="请输入搜索内容" />
            </Col>
            <Col span="4">
                <Button type="text" @click.stop='returnHome'>取消</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods: {
            returnHome(){
                this.$router.push('/');
            }
        },
        components:{
            
        }
    }
</script>
<style lang='scss' scoped>
    .index-search {
        .search {

        }
    }
</style>

