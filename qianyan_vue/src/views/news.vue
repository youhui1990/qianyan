<template>
    <div class="new-box">
        <header class="mui-bar mui-bar-nav">
			<a class="iconfont icon-wode mui-pull-left"></a>
			<h1 class="mui-title">消 息</h1>
			<a class="iconfont icon-jiahao mui-pull-right"></a>
		</header>
		<!-- 消息列表 -->
		<div class="mui-content">
			<ul class="mui-table-view">
			    <li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="../assets/imgs/n1.png">
			            <div class="mui-media-body">
			                动态
			                <!-- <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p> -->
			            </div>
			        </a>
			    </li>
			    <li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="../assets/imgs/n2.png">
			            <div class="mui-media-body">
			                解忧室
			                <p class='mui-ellipsis'>有什么忧愁或烦扰，跟小浅诉说一下吧！</p>
			            </div>
			        </a>
			    </li>
			    <li class="mui-table-view-cell mui-media">
			        <a href="javascript:;">
			            <img class="mui-media-object mui-pull-left" src="../assets/imgs/n3.png">
			            <div class="mui-media-body">
			                有料看看
			                <p class='mui-ellipsis'>公开威胁？特朗普发推:你们不会收到之前的待遇！</p>
			            </div>
			        </a>
			    </li>
			</ul>
		</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
.mui-bar h1{
	font-size: 15px
}
.mui-bar .iconfont{
	font-size: 25px;
	line-height: 44px;
	color: rgb(214,158,232);
}
.mui-content{
	margin-top: -17px;
}
.mui-table-view .mui-table-view-cell .mui-media-body{
	font-size: 15px;
	padding-top: 3px;
}
.mui-table-view .mui-table-view-cell .mui-media-body p{
	font-size: 12px;

}
.mui-table-view-cell:after {
	left: 0;
	background-color: rgba(0,0,0,0.2);
}
.g-footer li .icon-news{
	color: rgb(214,158,232)!important;
	font-size: 22px!important;
}
</style>