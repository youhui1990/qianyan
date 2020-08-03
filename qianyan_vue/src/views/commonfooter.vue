<template>
    <div class="g-footer">
			<ul >
				<li @click="changeview(1)">
					<router-link to="/" >
						<span class="iconfont icon-footer " :class="{'active':index==1}"></span>
						<p>浅言</p>
					</router-link>
				</li>
				<li @click="changeview(2)">
					<router-link to="/shetuan">
						<span class="iconfont icon-starbox " :class="{'active':index==2}"></span>
						<p>社团</p>
					</router-link>					
				</li>
				<li>
					<router-link to="/write" >						
						<p class="middle-logo">
							<img src="../assets/imgs/11.jpg" >
						</p>
					</router-link>	
				</li>
				<li @click="changeview(3)">
					<router-link to="/news" >
						<span class="iconfont icon-news" :class="{'active':index==3}"></span>
						<p>消息</p>
					</router-link>						
				</li>
				<li @click="changeview(4)">
					<router-link to="/my" >
						<span class="iconfont icon-wode" :class="{'active':index==4}"></span>
						<p>我的</p>
					</router-link>						
				</li>
			</ul>
		</div>
</template>
<script>
export default {
	data(){
		return{
			index:1
		}
	},
    methods: {
		changeview(id){
			this.index =id
		}
	},
}
</script>
<style>
.g-footer {
	position: fixed;
	bottom:0;
	left: 0;
	z-index: 99;
	width: 100%;
	box-shadow: 0 -1px 5px rgba(0,0,0,0.1);
	background: #fff;
	height: 3.125rem;
}
.g-footer ul {
	margin: 0;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	list-style: none;
	padding-left: 0;
	padding-top: 0.625rem;
	
	text-align: center;
	line-height: 1.125rem;
	
}
.g-footer li{
	width: 20%;
	text-align: center;
}
.g-footer li p{
	font-size: 0.6875rem;
}
/* 底部图标 */
.g-footer li a .iconfont{
	color: #ccc;
	font-size: 1.25rem;
}
.middle-logo{
	padding: 0.3125rem;
	border-radius: 50%;
	position: absolute;
	top: -0.5rem;
	left: 50%;
	transform: translateX(-50%);
	border-top: 1px solid #ccc;
	background-color: #fff;
}
.middle-logo img{
	width: 2.8125rem;
	border-radius: 50%;
}
/* 撑内容底部高度 */
.g-footer li .active{
	color: rgb(214,158,232)!important;
	font-size: 1.375rem!important;
}
.g-footer ul{
    height: 50px;
}
</style>