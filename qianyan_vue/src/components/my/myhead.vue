<template>
    <div>
        <div class="mui-card">			
			<div class="mui-card-header mui-card-media clearfix">				
				<img :src="usermsg.himg" class="head-img" id="h-img">		
				<div class="mui-media-body">
					<h4 id="uname">{{usermsg.name}}</h4>
					<p class="mui-pull-right">
						<router-link to="/syset" class="iconfont icon-shezhi" tag="span"></router-link> 
						<span class="iconfont icon-gonggao"></span>					
					</p>
					<p class="title">
						<span class="mui-previous">菜鸟 </span>
						<span class="big-box">
							<span class="smill-box">80/100</span>
						</span>
						<span class="mui-next"> 写手</span>
					</p>
				</div>
			</div>
			<!--页脚，放置补充信息或支持的操作-->
			<div class="mui-card-footer">
				<ul class="mui-table-view mui-row">
						<li class="mui-table-view-cell mui-col-sm-3">
							<p>浅记</p>
							<p>1</p>
						</li>
						<li class="mui-table-view-cell mui-col-sm-3">
							<p>手账</p>
							<p>0</p>
						</li>
						<li class="mui-table-view-cell mui-col-sm-3">
							<p>浅友</p>
							<p>0</p>
						</li>
						<li class="mui-table-view-cell mui-col-sm-3">
							<p>好友</p>
							<p>0</p>
						</li>
					</ul>
			</div>
		</div>
		<div class="bottom-bgc"></div>
    </div>
</template>
<script>
export default {
    data() {
		return {
			usermsg:{}
		}
	},
	mounted() {
		this.usermsg = JSON.parse(localStorage.getItem('usermsg')) 
	},
}
</script>
<style lang="" scoped>
a.mui-active{
	background-color: none;
	opacity: 0.5;
}
.mui-card{
	width: 100%;
	margin:0;
	background-color: rgb(60,175,255);
	padding-top: 0.625rem;
	height: 11.25rem;
	
}
.mui-card .mui-card-header{
	height: 4.375rem;
}
.bottom-bgc{
	width: 100%;
	height: 3.125rem;
	background-color: rgb(60,175,255);
	border-radius: 50%;
	position: absolute;
	top: 9.6875rem;
	left: 0;
}
/* 去除头部下划线 */
.mui-table-view-cell:after {
	width: 0;
	
}
.mui-card-header:after, .mui-card-footer:before {
  width: 0;
}
.mui-media-body{
	color: #FFFFFF!important;
	
}
.mui-media-body .mui-pull-right{
	color: #FFFFFF;
	
}
.mui-media-body .mui-pull-right .icon-shezhi{
	font-size: 1.75rem;
	position: absolute;
	top: 0.625rem;
	right: 2.0625rem;
	color: #FFFFFF;
}
.mui-media-body .mui-pull-right .icon-gonggao{
	font-size: 1.25rem;
    margin-top: -23px;
    display: block;
}
.mui-card-header .mui-previous ,.mui-next{
	font-size: 0.625rem;
	color: #FFFFFF;
}
/* 头像 */
.mui-card-header img{
	width: 3.75rem!important;
	height: 3.75rem!important;
	border-radius: 50%;
	border: 0.125rem solid #FFFFFF;
	margin-right: 1.25rem;
}
.mui-card-header .title{
	margin-top: 0.9375rem;
	padding-left: 1.25rem;
}

.mui-card-header .mui-media-body .big-box{
	display: inline-block;
	width: 50%;
	height: 0.625rem;
	border-radius: 0.3125rem;
	background-color: #fff;
	position: relative;
	margin: 0 0.625rem;
}
.mui-card-header .title .smill-box{
	display: inline-block;
	width: 80%;
	height: 0.625rem;
	border-radius: 0.3125rem;
	background-image: linear-gradient(to right,#f6a3cd,#e09de4,#c098f8);
	position: absolute;
	left: 0;
	top: 0;
	font-size: 0.5rem;
	line-height: 0.6875rem;
	text-align: center;
	color: #FFFFFF;
}
#uname{
	font-weight: normal;
	font-size: 0.875rem;
}
/* 浅记等。。列表 */
.mui-card-footer{
	padding: 0 2.1875rem;
}
.mui-card-footer .mui-table-view {
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-color: rgb(60,175,255);
	font-size: 0.875rem;
}
.mui-table-view-cell{
	text-align: center;
	color: white;
}
.mui-table-view-cell p{
	font-size: 0.875rem;
	color: #333;
	padding:0.3125rem 0;
}
</style>