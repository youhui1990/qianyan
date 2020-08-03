<template>
    <div>
        <detail-one></detail-one>
        <comment @isShow='getMsg' @isdel='getDel'></comment>
        <xiangguan></xiangguan>
        <tan-chuang :isshow='flag'></tan-chuang>
        <del-comment :isDel ='deldata'></del-comment>
    </div>
</template>
<script>
import DetailOne from '../components/details/onedetail'
import Comment from '../components/details/comment'
import Xiangguan from '../components/details/xiangguan'
import TanChuang from '../components/details/comments'
import DelComment from '../components/details/delpl'
export default {
    data(){
        return{
            flag:'',
            deldata:{}
        }
    },
    components:{
        DetailOne,
        Comment,
        Xiangguan,
        TanChuang,
        DelComment
    },
    methods: {
        getMsg(data){
            this.flag = data
        },
        getDel(data){
            this.deldata = data
        }
    },
    created() {
        let id = this.$route.query.id
    
    },
}
</script>
<style lang="" scoped>

</style>