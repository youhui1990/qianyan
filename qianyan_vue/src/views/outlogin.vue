<template>
    <div>
        <header class="mui-bar mui-bar-nav">
			<router-link to='/my' class="mui-action-back iconfont icon-zuojiantou mui-pull-left"></router-link>
			<h1 class="mui-title">设置</h1>
		</header>
		<div class="mui-content pt-44">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="iconfont icon-zhanghao"></span>
						个人资料
						<span class="mui-pull-right info">编辑</span>
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="iconfont icon-zhanghaoguanli"></span>
						账号管理
						<span class="mui-pull-right info">可设置登录密码</span>
					</a>
				</li>

			</ul>
		</div>
		<div class="mui-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="iconfont icon-suo1"></span>
						我的隐私

					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="iconfont icon-heimingdan"></span>
						黑名单管理

					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="iconfont icon-shanchu"></span>
						我的回收站

					</a>
				</li>
			</ul>
		</div>
		<div class="mui-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="iconfont icon-shoucang"></span>
						给浅言评分
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="iconfont icon-dianzan1"></span>
						推荐给好友
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="iconfont icon-tool"></span>
						帮助与反馈

					</a>
				</li>
			</ul>
		</div>
		<div class="mui-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="iconfont icon-yinle"></span>
						浅言主题曲
						<span class="mui-pull-right info">聆听浅言初心</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="mui-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="iconfont icon-tongzhi1"></span>
						消息通知
					</a>
				</li>
			</ul>
		</div>
		<div class="mui-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<span class="iconfont icon-guanyu"></span>
						关于我们
					</a>
				</li>
			</ul>
		</div>
		<div class="bottom-btn">
			<a href="javascript:;">
				<button type="button" class="mui-btn mui-btn-royal" @click="outLogin">退出账号</button>
			</a>
		</div>
    </div>
</template>
<script>
export default {
    methods: {
		outLogin(){
			if(confirm('确认退出账号？')){
				localStorage.removeItem('usermsg')
				this.$router.push('/login')
			}
			
		}
	},
}
</script>
<style lang="" scoped>
.mui-bar{
	background-color: #FFFFFF;
	box-shadow: none;
}
.mui-bar-nav ~ .mui-content {
    padding-top: 0px;
}
.pt-44{
	padding-top: 30px !important;
}
.mui-table-view-cell:after {
	width: 0;
}
.mui-bar .mui-action-back{
	font-size: 30px;
	line-height: 44px;
	color: #999;
}
.mui-content .mui-table-view-cell{
	padding: 0 8px;
	height: 50px;
	line-height: 50px;
}
.mui-navigate-right:after, .mui-push-right:after {
	right: 0;
}
.mui-content .mui-table-view-cell a{
	margin: 0;
	width: 100%;
	color: #666;
	font-size: 15px;
}
.mui-content .mui-table-view-cell .info{
	margin-right: 20px;
	font-size: 14px;
	color: #999;
}
.mui-content .mui-table-view-cell .iconfont{
	margin-right: 10px;
	font-size: 18px;
}
.bottom-btn{
	background-color: #fff;
	padding: 20px;
}
.bottom-btn button{
	width: 100%;
	height: 40px;
	background-color: rgb(184,154,254);
	font-size: 16px;
	border: none;
}
.mui-content > .mui-table-view:first-child {
    margin-top: 5px;
}
.mui-table-view:after,.mui-table-view::before {
   width: 0;
}
</style>