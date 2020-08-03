<template>
    <div class="mui-scroll-wrapper mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
            <span class="qd"><img src="../../assets/imgs/qd.png" alt=""></span>
            <span :class="{'mui-control-item':true,'mui-active':index==sid}"
             v-for="(item,index) in title" :key="index" @click="changeId(index)">{{item}}</span>
            <span class="iconfont icon-liaotianjilu"></span>
        </div>
       
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import {reqAllist} from '../../api/index'
export default {
    computed: {
        ...mapState(['allmoodlist','nowlist'])
    },
    data() {
        return {
            title:['最新','热门','关注'],
            sid:0
        }
    },
    components:{
          
    },
    methods: {
      
        ...mapActions(['getNewList']),
        changeId(idx){
          this.sid = idx 
            if(idx==1){
                let aa = this.allmoodlist.filter(item=>{
                    return item.gender=="男"
                })
                    this.$store.dispatch('getNewList',aa)
            }else if(idx==2){
                let aa = this.allmoodlist.filter(item=>{
                    return item.gender=="女"
                })
                    this.$store.dispatch('getNewList',aa)
            }else if(idx==0){
                let aa = this.allmoodlist
                this.$store.dispatch('getNewList',aa)
            }
        }
    },
    mounted() {
  
    },
    async created() {
        let list = await reqAllist()
         this.$store.dispatch('getNewList', list)
    },
}
</script>
<style lang="" scoped>
.mui-scroll-wrapper >>> .mui-scroll{
	position: fixed;
	top:0;
	left: 0;
	right: 0;
}
.mui-slider .mui-slider-group .mui-slider-item {
	height: 62.5rem;
	
}
.mui-scroll-wrapper .mui-scroll{
	width: 100% !important;
	height: 2.75rem!important; 
    display: flex;
    justify-content: space-around;
	background-color: #fff;
	box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
    padding: 0 3.2rem;
}
.mui-segmented-control.mui-scroll-wrapper .mui-control-item {
    height: 100%;
    line-height: 2.5rem;
}
.mui-bar .mui-scroll-wrapper .mui-scroll span{
	display: inline-block;
	font-size: 0.875rem;
}
.mui-active{
	color: #f6acc8 !important;
	font-weight: 400;
	font-size: 15px;
	position: relative;
    border-bottom: 2px solid #f6acc8!important;
} 
/* 顶部左侧签到 */
.qd{
	position: absolute;
	left: 0.625rem;
	
}
.qd img{
	width: 1.875rem;
	margin-top: 0.3125rem;
}
/* 右侧图标 */
.icon-liaotianjilu{
	position: absolute;
	right: 0.625rem;
	height: 2.5rem;
	line-height: 2.5rem;
	font-size: 1.25rem !important;
	color: #999;
}
</style>