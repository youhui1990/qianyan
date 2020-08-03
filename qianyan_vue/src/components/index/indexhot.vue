<template>
    <div class="content-box">
        <div class="searchbox">
			<a href="" class="mui-icon mui-icon-search">请输入想要搜索的浅友或内容</a>
		</div>
		 <index-swiper></index-swiper>
		<div v-for="(item,index) in nowlist" :key="index" >
        <div class="content">
			<input type="hidden" name=""  value="1" />
				<div class="mui-card">
					<!--页眉，放置标题-->
					<div class="mui-card-header  mui-card-media" :class="{'mui-card-header-b':item.gender=='男'}">
						<img :src="item.himg" />		
						<div class="mui-media-body">
							{{item.name}}
							<a href="" class="iconfont icon-more mui-pull-right"></a>
							<p class='mui-ellipsis'>
								<span>{{item.shetuan}}</span>
								<span class="dress"><i class="mui-icon mui-icon-location"></i>{{item.address}}</span>
								<span class="weather mui-icon mui-icon-spinner-cycle mui-spin"></span>
							</p>
						</div>
					</div>
				</div>
				<!--内容区-->
				<router-link :to="{path:'/detail',query:{id:item.id}}" class="mui-card-content" @click.native="getOnemood(item)">				
					<p class="pro_container">
						{{item.mood}}
					</p>
					<img :src="item.pic" alt="">											
				</router-link>
				<!--页脚，放置补充信息或支持的操作-->
				<div class="mui-card-footer">
					<span class="iconfont icon-yanjing"> <i> 4324</i></span>
					<span class="iconfont icon-fenxiang"> <i> 分享</i></span>
					<span class="iconfont icon-liaotianjilu"><i>&nbsp;&nbsp;3</i> </span>
					<span class="iconfont dianzan" @click="addone(index)" 
					:class="{'icon-dianzan':item.flag,'icon-dianzan1':!item.flag}">
						<i> {{item.num}}</i>
					</span>
				</div>
			
			</div>
			<hr>
		</div> 
    </div>
</template>
<script>
import IndexSwiper from './indexbanner'
import {mapState, mapActions} from 'vuex'
import {reqAllist} from "../../api/index"
export default {
	components:{
		IndexSwiper
	},
	computed: {
		...mapState(['nowlist','oneMood'])
	},
    methods: {
		 ...mapActions(['getAllmood','dianZan']),
		addone(idx){
			this.nowlist[idx].flag = !this.nowlist[idx].flag
			if(!this.nowlist[idx].flag){
				let num = --this.nowlist[idx].num
				this.$store.dispatch('dianZan',{idx,num})
			}else{
				let num = ++this.nowlist[idx].num
				this.$store.dispatch('dianZan',{idx,num})
			}
			
		},
		getOnemood(item){
			let one = this.$store.dispatch('getoneMood',item)
		}
		
	},
	async mounted() {
		await this.getAllmood()
		
	},
	 created() {
		
	},
}
</script>
<style lang="" scoped>
.content-box{
	margin-bottom: 40px;
	background-color: #fff;
	padding-bottom: 20px;
	margin-top: -38px;
}
i{
	font-style: normal!important;
}
/* 内容区边框 */
.searchbox{
	margin-top: 45px;
	padding-top:10px;
}
.mui-slider .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-group .mui-slider-item {
	border-bottom: none;
	border-top:1px solid #E9E9E9 ;
	padding-top: 10px;
}
/* 搜索栏样式 */
.mui-icon-search{
	display: block;
	margin-top: 10px;
	color: #ccc;
	font-size: 12px;
	border: 1px solid #ccc;
	width: 90%;
	height: 25px;
	line-height: 25px;
	text-align: center;
	margin: 0 auto;
	border-radius: 13px;
}
.content{
	padding: 0 10px;
	width: 100%;
	margin: 0 auto;
}
/* 头像 */
.mui-card-header.mui-card-media .mui-media-body {
	margin-left:-10px;
	padding-top: 3px;
}
.mui-table-view{
	width: 90%;
	margin: 0 auto;
	margin-top: 20px;
	margin-left: -10px;
}
.mui-card-header>img {
    width: 40px!important;  
	height: 40px!important;
    border:2px solid rgb(255,194,224);
    border-radius: 50%;
	margin-right: 15px;
}
.mui-card-header-b>img {
    width: 40px!important;  
	height: 40px!important;
    border:2px solid #12cad6;
    border-radius: 50%;
	margin-right: 15px;
} 
/* 头像右侧省略号 */
.icon-more{
	font-size: 20px!important;
	font-weight: bolder;
	color: #999;
	
}
/* 定位天气图标 */
.mui-icon-location{
	color: #efa8e4;
	font-size: 16px;
}
.mui-spin{
	font-size: 14px;
	margin-left: 5px;
	color: #f4e04d;
}
.pro_container{
	font-size: 14px;
	font-weight: normal;
	color: #333;
	padding: 0 3px;
}
.mui-card-footer:before, .mui-card-header:after {
	content: "";
	width: 0;
}
.mui-card {
	box-shadow: none;
	margin-left: 0;
}
hr{
	border: none;
	height: 1px;
	background-color: #f9f9f9;
}

.mui-ellipsis span{
	font-size: 12px;
	margin-top: 5px;
}
.mui-card-content img{
	max-width: 100%;
	
}
/* 底部 评论*/
.mui-card-footer{
	position: relative;
}
.mui-card-footer .iconfont{
	font-size: 15px;
	font-weight: normal;
	position: absolute;
	top: 15px;
}
.mui-card-footer i{
	font-size: 13px;
}
.mui-card-footer .icon-yanjing{
	left:5px;
}
.mui-card-footer .icon-fenxiang{
	right:100px;
}
.mui-card-footer .icon-liaotianjilu{
	right:55px;	
}
.mui-card-footer .dianzan{
	right:5px;
}
.last_bottom{
	height: 30px;
	line-height: 20px;
	font-size: 10px;
	text-align: center;
}
.mui-card {
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-left: 0;
    margin-right: 0;
}
</style>