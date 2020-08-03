<template>
    <div>
        <div class="g-floor1">
		<ul class="mui-table-view mui-row">
		    <li class="mui-table-view-cell mui-col-sm-4">
		        <a href="javascript:;">
		            <img class="mui-media-object mui-pull-right" src="../../assets/imgs/ma1.png">
		            <div class="mui-media-body">
		                会员特权
		                <p class='mui-ellipsis'>立即体验&gt;</p>
		            </div>
		        </a>
		    </li>
		    <li class="mui-table-view-cell mui-media mui-col-sm-4">
		        <a href="javascript:;">
		            <img class="mui-media-object mui-pull-right" src="../../assets/imgs/ma2.png">
		            <div class="mui-media-body">
		                邀请有礼
		                <p class='mui-ellipsis'>领取VIP&gt;</p>
		            </div>
		        </a>
		    </li>
		    <li class="mui-table-view-cell mui-media mui-col-sm-4">
		        <a href="javascript:;">
		            <img class="mui-media-object mui-pull-right" src="../../assets/imgs/ma3.png">
		            <div class="mui-media-body">
		               签到有礼
		                <p class='mui-ellipsis'>立即签到</p>
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
.g-floor1 .mui-table-view{
	height: 6.25rem;
	width: 90%;
	margin: 0 auto;
	border-radius: 0.9375rem;
	margin-top: -1.875rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.3125rem;
}
.g-floor1 .mui-table-view .mui-table-view-cell{
	padding: 0;
	border-right: 0.5px solid #cecece;
	width: 33%;
}
.g-floor1 .mui-table-view .mui-table-view-cell:last-child{
	padding: 0;
	border-right: none;
}
.g-floor1 .mui-table-view a{
	padding: 0;
	margin: 0 0.3125rem
}
.mui-table-view .mui-media-object.mui-pull-right{
	width: 2.5rem;
	height: 2.5rem;
	margin-left: 0;
}
.g-floor1 .mui-table-view a .mui-media-body{
	font-size: 0.575rem;
	font-weight: bold;
	color: #333!important;
}
.g-floor1 .mui-table-view a .mui-media-body p{
	font-size:0.5rem;
	color: rgb(214,158,232);
	margin-top: 0.3125rem;
	margin: 0;
	padding: 0;
}
</style>