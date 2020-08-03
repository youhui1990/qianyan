<template>
    <div>
       <div class="mui-content discuss-box">
			<p class="comment">评论</p>
			<div id="comment-box">
				<div class="mui-card" v-for="(item,index) in allcommentlist" :key="index">
				<!--页眉，放置标题-->			
					<div class="mui-card-header mui-card-media">
						<img :src='item.himg' class="pl-head-img" />
						<div class="mui-media-body">
							<p class="name">{{item.username}}</p>
							<p> {{item.ym}} {{item.hm}}</p>
						</div>
						<span class="iconfont icon-more" @click="delShow(item.id,index)"></span>
					</div>			
					<!--内容区-->
					<div class="mui-card-content" @click="sendMsg()">
						{{item.pinglun}}
					</div>		
				</div>
			</div>
		</div>
		<!-- 相关浅友 -->
		<div class="xg-friends">
			<p class="xg-f "><i class="iconfont icon-zhanghao"></i>  相关浅友 </p>
             <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in qianyou" :key="index">
                        <img :src="item.img" >
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </div>
			</div>
		</div>
  
</template>
<script>
import {reqQianyou,reqComment} from '../../api/index'
import {mapActions,mapState} from 'vuex'
import Swiper from 'swiper'
import '../../../node_modules/swiper/css/swiper.min.css'
export default {
    data() {
        return {
			qianyou:[],
			flag:false,
			del:true,
		
        }
	},
	computed: {
		 ...mapState(['allcommentlist'])
	 },
    methods: {
        initSwiper(){
            new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween:0,
            freeMode: true,
            });
		},
		sendMsg(flag){
			this.flag = !this.flag
			this.$emit('isShow',this.flag)
		},
		delShow(id,index){
			this.$emit('isdel',{del:this.del,id,index})
			this.del = !this.del
			
		} 
    },
  async  mounted() {
        this. initSwiper()
		this.qianyou = await reqQianyou()
		let plist = await reqComment()   
		this.$store.dispatch('getAllComment',plist.data)
		
    },

}
</script>
<style lang="" scoped>
.discuss-box{
	background-color: #fff;
	padding-top: 0!important;
	margin-top: 0.325rem;
	padding-bottom: 1.25rem;
	position: relative;
}
.discuss-box .comment{
	height: 1.875rem;
	line-height: 1.875rem;
	padding-left: 0.75rem;
	border-bottom: 0.5px solid #ccc;
}
.discuss-box .mui-card{
	box-shadow: none;
}
.discuss-box .mui-card .name{
	color: #efa8e4;
}
.mui-card-header:after {
 height: 0;
}
.discuss-box .mui-card .mui-card-content{
	padding-left: 0.625rem;
}
.pl-head-img {
	border-radius: 50%;
}
.discuss-box .icon-more{
	position: absolute;
	top: 0;
	right: 0;
	color: #999;
}
.xg-friends{
	height: 5.75rem;
	padding-left: 0.625rem;
	background-color: #FFFFFF;
	border-bottom: 1.25rem;
}
.xg-friends .icon-zhanghao{
	color: rgb(155,94,244);
}
.xg-friends .swiper-container{
	overflow: hidden;
    height: 6.125rem;
}
.xg-friends .swiper-container .swiper-wrapper >>> .swiper-slide{
    width: 100px;
    height: 100px;

}
.xg-friends .swiper-container .swiper-slide p{
	font-size: 0.7rem;
	position: absolute;
	top:55px;
    left:-12px;
	width: 83%;
	text-align: center;
	color: #333;
}
.xg-friends .swiper-container .swiper-slide img{
	width: 2.875rem;
	height: 2.875rem;
	border-radius: 50%;
	border: 2px solid #00bcd4;
}
.xg-f{
	font-size: 14px;
	color: #333;
	font-weight: bold;
}

</style>