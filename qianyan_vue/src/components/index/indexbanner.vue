<template>
        <div>
        <div class="content">
				<div class="mui-card">
					<!--页眉，放置标题-->
					<div class="mui-card-header mui-card-header-b mui-card-media">
						<img src="../../assets/imgs/headimg/h10.jpg" />		
						<div class="mui-media-body">
							鬼魅森林
							<a href="" class="iconfont icon-more mui-pull-right"></a>
							<p class='mui-ellipsis'>
								<span>醉兮社</span>
								<span class="dress"><i class="mui-icon mui-icon-location"></i>上海</span>
								<span class="weather mui-icon mui-icon-spinner-cycle mui-spin"></span>
							</p>
						</div>
					</div>
				</div>
				<!--内容区-->
				<div class="mui-card-content">				
					<p class="pro_container">
						不断记录着，因为生活值得
					</p>
                    <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="../../assets/imgs/pic/a4.jpg" alt="">
                        </div>
                        <div class="swiper-slide">
                             <img src="../../assets/imgs/pic/a2.jpg" alt="">
                        </div>
                        <div class="swiper-slide">
                             <img src="../../assets/imgs/pic/a1.jpg" alt="">
                        </div>
                    </div>
                    </div>
                                            
				</div>
				<!--页脚，放置补充信息或支持的操作-->
				<div class="mui-card-footer">
					<span class="iconfont icon-yanjing"> <i> 4324</i></span>
					<span class="iconfont icon-fenxiang"> <i> 分享</i></span>
					<span class="iconfont icon-liaotianjilu"><i>&nbsp;&nbsp;3</i> </span>
					<span class="iconfont icon-dianzan1"><i> 32</i></span>
				</div>
			
			</div>
			<hr>
    </div>
</template>
<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/css/swiper.css'
export default {
    components:{
        
      
    },
    methods: {
        IndexSwiper(){
            var mySwiper = new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
        })
        }
    },
    mounted() {
        this.IndexSwiper()
    },
}
</script>
<style lang="" scoped>
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
.mui-card-header-g>img {
    border:2px solid rgb(255,194,224);

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
.mui-card-footer .icon-dianzan1{
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
.swiper-container .swiper-wrapper .swiper-slide{
 width: 100%;
 height: 237px;
}
</style>