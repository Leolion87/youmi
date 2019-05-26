<template>
    <div class='detail'>
        detail
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
             ...mapMutations(['CHANGE_NEWHOUSE'])
        },
        components:{
            
        }
    }
</script>
<style lang='scss' scoped>
    .detail {
        
    }
</style>

