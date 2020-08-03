<template>
	<div class="mui-slider g-content">
		<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll">
				<span href="" class="iconfont icon-zuojiantou mui-pull-left" @click="goback"></span>
				<a class="mui-control-item mui-active" href="#qianji" id="qianjibtn">
					浅记
				</a>
				<a class="mui-control-item" href="#shouzhang"  id="shouzhangbtn">
				手账
				</a>
				<span href="" class=" mui-pull-right save" @click="addmood">发布</span>
			</div>
		</div>	
		<div class="mui-slider-group">
			<!--第一个内容区容器-->
			<div class="mui-slider-item mui-control-content" id="qianji">
				<!-- 具体内容 -->
				<ul class="mui-table-view">
					<li class="mui-table-view-cell mui-media">
						<a href="javascript:;">
							<span class="mui-media-object mui-pull-left daytime" >22</span>
							<div class="mui-media-body">
								<p class="week">星期二</p>
								<p class='mui-ellipsis'>2020年6月<span class="weather mui-icon mui-icon-gear"></span></p>
								<span class="open"><p class="iconfont icon-suo2"></p>公开</span>
							</div>
						</a>
					</li>				     
				</ul>
				<textarea rows="5" cols="5" @focus="clearcon" v-text='text' @blur="addtext"></textarea>
				<button type="button" class="mui-btn mui-btn-outlined">#添加标签</button>
				<p class="dingwei"><i class="mui-icon mui-icon-location"></i>{{LocationCity}}</p>
				<div class="m-img">
				</div>
				<div class=" swiper-container" id="img-box" v-show="flag">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="(item,index) in imglist" :key="index">
							<img :src="item.img" alt="" :class="{onchoose:sid==index}" @click="onchoose(index,item.img)">
						</div>
					</div>
				</div>
			</div>
			<!--第二个内容区-->
			<div class="mui-slider-item mui-control-content" id="shouzhang">
				<!-- 具体内容 -->
				<div class="newtext mui-row">						
					<div class="mui-col-xs-6">
						<div class="left-box">
							<span></span>
							<p>新建手账本</p>
						</div>					
					</div>
					<div class="mui-col-xs-6">
						<div class="right-box">
							<img src="../../static/imgs/w1.jpg" alt="">							
						<div class="bottom">
							<p class="title">我的浅言手账</p>
							<p class="title2">
								<span class="mui-pull-left"><i>0</i>篇手账.校园</span>
								<span class="mui-pull-right">
									<i class="iconfont icon-dianzan1"></i>赞
									<i class="iconfont icon-dianzan1"></i>
								</span>									
							</p>								
						</div>
						</div>
					</div>					
				</div>
				<div class="c-new">
					<p>主子，我也是有底线的</p>
					<p class="c-new-btn">创建手账</p>
				</div>
			</div>				
			<div class="mui-bar mui-bar-tab">
				<a class="mui-tab-item mui-active">
					<span class="iconfont icon-huatong"></span>					
				</a>
				<a class="mui-tab-item">
					<span class="iconfont icon-ziyuan"></span>					
				</a>
				<a class="mui-tab-item" @click="showimg">
					<span class="iconfont icon-tupian_huaban"></span>					
				</a>			
			</div>	
		</div>	
	</div>
</template>
<script>
import Swiper from 'swiper'
import {reqDongtai} from '../api/index'
import {mapActions} from "vuex";
export default {
  data() {
        return {
			img:'',
			sid:-1,
            // LocationProvince:"正在定位所在省",
			LocationCity:"正在定位所在市"  ,
			flag:false,
			text:'不断记录着，因为生活值得。',
			imglist:[
				{id:1,img:'../../static/imgs/1.jpg'},
				{id:2,img:'../../static/imgs/2.jpg'},
				{id:3,img:'../../static/imgs/3.jpg'},
				{id:4,img:'../../static/imgs/4.jpg'},
				{id:5,img:'../../static/imgs/5.jpg'},
				{id:6,img:'../../static/imgs/6.jpg'},
				{id:7,img:'../../static/imgs/7.jpg'},
				{id:8,img:'../../static/imgs/8.jpg'},
				{id:9,img:'../../static/imgs/9.jpg'},
			]
        }
    },
    methods:{
		...mapActions(['addDongtai']),
       async city(){ 
           var _this = this   //定义获取城市方法
            var geolocation = new BMap.Geolocation();
            await geolocation.getCurrentPosition(function(r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                // var mk = new BMap.Marker(r.point);     
                //获取地址信息，设置地址label
                var gc = new BMap.Geocoder();
                gc.getLocation(r.point, function(rs) {
                    //   debugger
                    var addComp = rs.addressComponents;
                  
                _this.LocationProvince = addComp.province
                _this.LocationCity = addComp.city 
                });
                } else {
                alert("failed" + this.getStatus());
                }
            });       
		},
		showimg(){
			this.flag = !this.flag
		},
		 initSwiper(){
            var mySwiper = new Swiper('.swiper-container',{
				freeMode : true,
				freeModeMomentum : false,
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:false,//修改swiper的父元素时，自动初始化swiper
				onSlideChangeEnd: function(swiper){
				　　　swiper.update();  
				　　　mySwiper.startAutoplay();
				　　  mySwiper.reLoop();  
				}
			})
		},
		clearcon(){
			this.text=''
		},
		addtext(){
			if(!this.text){
				let arr=['不断记录着，因为生活值得','心情不错记录下，心情低落记录下','生活的点点滴滴，都是人生的印记','生活不完美，让心灵有依偎']
				let i = Math.floor( Math.random()*4)
				this.text=arr[i]
			}
		},
		goback(){
			this.$router.go(-1)
		},
		addmood(){
			let user = JSON.parse(localStorage.getItem('usermsg'))
			let newmood={
					"username":user.name,
					"gender":"男",
					"headimg":user.himg,
					"shetuan":"空空如也",
					"mood":this.text,
					"pic1":this.img,
					"pic2":"",
					"dress":this.LocationCity,
					"week":"星期一"
			}
			this.$store.dispatch('addDongtai',newmood)
		},
		onchoose(idx,img){
			this.sid = idx
			this.img=img
		}
     },
     mounted(){
		 this.city()    //触发获取城市方法
		 this.initSwiper()
    }
}
</script>
<style lang="">
body{
	background-color: #fff;
	height: 100vh;
}
/* 头部 */
.mui-segmented-control.mui-scroll-wrapper {
	height: 3.125rem;
}
.mui-segmented-control.mui-scroll-wrapper .mui-scroll {
	width: 100%;
	line-height: 3.125rem;
	padding: 0 0.625rem;

}
.mui-segmented-control.mui-scroll-wrapper .mui-scroll a{
	display: inline-block;
	height: 3.125rem;
	line-height: 3.125rem;
	font-size:1rem;
	padding: 0;
	position: relative;
	color: #666;
	    font-family: cursive;
}
.mui-scroll-wrapper .mui-scroll a.save{
	color:#95389e;
	font-size: 1.125rem;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
	color: #333;
	font-size: 1.25rem;
	font-weight: bold;
	padding: 0 0.3125rem;
}
.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active::after{
	content: "";
	width: 110%;
	height: 0.1875rem;
	background:  linear-gradient(to right,#efa8e4,#95389e);;
	position: absolute;
	bottom: 0;
	left: 0;
}
.mui-control-item{
	margin: 0 1.875rem;

}
.mui-segmented-control.mui-scroll-wrapper .mui-scroll .icon-zuojiantou{
	font-size: 1.875rem;
	color: #797979;
}
/* 头部下边框 */
.g-content .mui-slider .mui-segmented-control.mui-segmented-control-inverted ~ .mui-slider-group .mui-slider-item {
    border-top: 1px solid rgba(0,0,0,0.1);
    border-bottom: none;
	
}
.mui-table-view .mui-media-object {
    line-height: 3.125rem;
    max-width:none;
    height: 3.125rem;
	margin-top: 0.625rem;
}
.daytime{
	font-size: 50px;
	color: rgb(255,189,216);
	margin-right:1.25rem ;
	padding-top: 0.625rem;
}
.mui-media-body{
	color: #999;
	font-size: 1rem;
	margin-top: 1.25rem;
}
.mui-media-body p{
	margin-top: 0.3125rem;
	font-size: 1rem;
	position: relative;
}
.mui-icon-gear{
	color: skyblue;
}

.open .icon-suo2{
	font-size: 1.875rem;
	margin-bottom: 0.3125rem;
}
.open{
	position: absolute;
	top: 1.875rem;
	right: 0;
	display: block;
	width: 3.125rem;
	height: 2.5rem;
	word-wrap: break-word;
	font-size: 1rem;
}
textarea{
	color: #999;
	font-size: 1rem;
	border: none;
	padding: 0.3125rem 0.9375rem;
	font-family: monospace;
}
.mui-btn-outlined{
	width: 7.5rem;
	height: 2.5rem;
	background-color: rgb(247,247,247);
	color: rgb(214,184,255);
	margin-left: 1.25rem;
	border-radius: 0.4375rem;
}
.dingwei{
	width: 6.25rem;
	padding:0.3125rem 0.625rem ;
	border: 1px solid rgb(214,184,255);
	border-radius:0.625rem;
	margin: 0.625rem 1.25rem;
}
.dingwei i{
	color: rgb(214,184,255);
}
.mui-bar-tab{
	width: 100%;
	height: 2.5rem;
	background-color: #fff;
}
.mui-bar-tab .mui-tab-item .iconfont{
	font-size: 1.875rem;
	color: #999;
	line-height: 2.5rem;
}
/* 手账页 */
#shouzhang .newtext{
	padding: 0 0.3125rem;
	margin-top: 0.625rem;
}
#shouzhang .newtext .mui-col-xs-6{
	padding:0 0.3125rem;
}
#shouzhang .newtext .left-box,.right-box{
	height: 15.75rem;
	width: 100%;
	border:1px solid rgba(0,0,0,0.2);
	box-shadow: 2px 2px 10px #999;
	text-align: center;
	border-radius: 5px;
	overflow: hidden;
}
#shouzhang .newtext .left-box span{
	width: 3.125rem;
	height: 3.125rem;
	display: block;
	border: 1px solid #ccc;
	border-radius: 50%;
	margin-left:50% ;
	margin-top: 50%;
	transform: translateX(-50%);
}
#shouzhang .newtext .left-box span::before{
	content:"";
	width: 1.5625rem;
	height: 0.1875rem;
	background-color: #ccc;
	position: absolute;
	left: 0.6875rem;
	top: 1.4375rem;
}
#shouzhang .newtext .left-box span::after{
	content:"";
	width: 0.1875rem;
	height: 1.5625rem;
	background-color: #ccc;
	position: absolute;
	left: 1.375rem;
	top: 0.8125rem;
}
#shouzhang .newtext .left-box p{
	margin-top: 0.625rem;
}
.mui-bar-tab .mui-tab-item{
	height: auto;
}
/* 右侧图片 */
.right-box img{
	width: 100%;
	height: 100%;
}
.newtext .title{
	font-size: 0.875rem;
	font-weight: bold;
	color: #333;
}
.newtext .title2{
	font-size: 0.75rem;
	color: #999;
}
.bottom{
	position: absolute;
	bottom: 0;
	left: 0.40625rem;
	width: 93%;
	text-align: left;
	padding: 0 0.3125rem;
	background-color: rgba(255,255,255,0.5);
}
.bottom p{
	margin-bottom: 0;
}
.c-new{
	width: 100%;
	height: 8.125rem;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	text-align: center;
	margin-top: 4.0625rem;
	
} 
.c-new .c-new-btn{
	width: 80%;
	height: 2.5rem;
	background-color: rgb(214,158,232);
	color: #FFFFFF;
	margin: 0 auto;
	line-height: 2.5rem;
	border-radius: 0.3125rem;
	font-size: 1rem;
}

.swiper-slide{
	width: 100px!important;
	border: none!important;
}
.mui-slider .mui-slider-group .mui-slider-item img {
    width: 100px!important;
	height: 80px;
	border:2px solid transparent;
}
#img-box {
    position: fixed;
    bottom: 2.1875rem;
    left: 0;
    height: 6.25rem;
	background-color: #fff;
	width: 100%;
	overflow: hidden;
}
.mui-slider .mui-segmented-control.mui-segmented-control-inverted ~ .mui-slider-group .mui-slider-item {

    border-bottom: none;
}
.mui-slider .mui-slider-group {
    height: 100vh;
}
.onchoose{
	border:2px solid #12cad6!important;
}
.m-img{
	padding-left: 0.625rem;
}
.m-img img{
	width: 31%!important;
	height: 5.25rem;
	margin-right: 0.425rem;
}





</style>