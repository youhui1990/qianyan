<template>
    <div class="mui-slider-item mui-control-content" id="qianji">
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
        <textarea rows="5" cols="5" >不断记录着，因为生活值得。</textarea>
        <button type="button" class="mui-btn mui-btn-outlined">#添加标签</button>
        <p class="dingwei"><i class="mui-icon mui-icon-location"></i>
                {{LocationCity}}
        </p>
        <div class="m-img">
        </div>
        <div class="img-box">	
            <div class="mui-slider">
                <div class="mui-slider-group">
                    <div class="mui-slider-item "><img src="../assets/imgs/1.jpg" alt="" ></div>
                    <div class="mui-slider-item"><img src="../assets/imgs/2.jpg" alt=""></div>
                    <div class="mui-slider-item"><img src="../assets/imgs/3.jpg" alt=""></div>
                    <div class="mui-slider-item"><img src="../assets/imgs/4.jpg" alt=""></div>
                    <div class="mui-slider-item"><img src="../assets/imgs/5.jpg" alt=""></div>
                    <div class="mui-slider-item"><img src="../assets/imgs/6.jpg" alt=""></div>
                    <div class="mui-slider-item"><img src="../assets/imgs/7.jpg" alt=""></div>
                    <div class="mui-slider-item"><img src="../assets/imgs/8.jpg" alt=""></div>
                    <div class="mui-slider-item"><img src="../assets/imgs/9.jpg" alt=""></div>
                    <div class="mui-slider-item"><img src="../assets/imgs/10.jpg" alt=""></div>
                    <div class="mui-slider-item"><img src="../assets/imgs/12.jpg" alt=""></div>
                </div>
            </div>
        </div>
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active">
				<span class="iconfont icon-huatong"></span>					
			</a>
			<a class="mui-tab-item">
				<span class="iconfont icon-ziyuan"></span>					
			</a>
			<a class="mui-tab-item">
				<span class="iconfont icon-tupian_huaban"></span>					
			</a>			
		</nav>	
    </div>
</template>
<script>
import BMap from 'BMap';
export default {
      
}
</script>
<style lang="">
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
.img-box .mui-slider-group .mui-slider-item{
	width: 6.25rem;
	margin: 0 0.125rem;
	height: 5rem;
	border: none!important;
}
.img-box .mui-slider-group{
	height: 5rem!important;
	width: 100vw;
}
.img-box .mui-slider-group img{
	width: 6.25rem!important;
	height: 5rem;
	border:2px solid transparent;
}
.img-box {
	display: none;
    position: fixed;
    bottom: 2.1875rem;
    left: 0;
    height: 6.25rem;
	background-color: #fff;
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