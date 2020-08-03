<template>
    <div>
        <header class="mui-bar mui-bar-nav">
			<router-link to='/' class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></router-link>
			<p class="mui-title mui-pull-right">
				<span class="username">{{onelist.username}}</span>
				<span class="userhead"><img :src="onelist.headimg" ></span>
			</p>
		</header>
		<div class="mui-content">
			<ul class="mui-table-view">
			    <li class="mui-table-view-cell mui-media mui-row">
					<span class="day mui-col-xs-2">22</span>
					<div class="mui-media-body mui-col-xs-10">
						<p class="week">{{onelist.week}}</p>
						<p class='mui-ellipsis'>2020年6月 <span class="daytime">05:26</span></p>
					</div>
					<div class="mui-col-xs-12" id="desc">{{onelist.mood}}</div>
					<div class="mui-col-xs-12 p-img">
						<img :src="onelist.pic1" alt="" class="mood-text">
					</div>
					
				</li>
				<p class="dianzan">
					<span class="iconfont icon-youjian"> &nbsp;&nbsp;赞赏作者</span>
				</p>
			</ul>			
		</div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import {reqOneMood} from '../../api/index'
export default {
	data() {
		return {
			onelist:{}
		}
	},
	computed: {
		...mapState(['oneMood'])
	},
	async mounted() {
		let id = this.$route.query.id
		let aa = await reqOneMood(id)
		this.onelist = aa.data[0]
	},
}
</script>
<style lang="" scoped>
.mui-bar{
	height: 2.8125rem;
	line-height: 2.8125rem;
}
.mui-table-view{
	padding-bottom: 1.25rem;
}
.mui-table-view .mui-media #desc {
    color: #444;
    font-size: 0.9rem;
    margin: 0.625rem 0;
    font-family: cursive;
}
.mui-bar .mui-pull-right .userhead img{
	width: 30px;
	height: 30px;
	border-radius: 50%;
	vertical-align: middle;
	margin-left: 5px;
}
.mui-bar .mui-title {
    right: -8rem;
	line-height: 2.8125rem;
}
.mui-bar .username{
	color: #333;
	font-size: 0.975rem;
}
.mui-bar-nav .mui-icon-left-nav {
    color: #999;
}
.mui-content .mui-media .day{
	color: #efa8e4;
	font-size: 40px;
	height: 2.5rem;
	line-height: 2.5rem;
	/* background-color: red; */
	text-align: center;
}
.p-img img{
	width: 100%;
	border-radius: 0.3125rem;
}
.mui-bar-nav ~ .mui-content {
    padding-top: 30px;
}
.mui-content .mui-table-view .dianzan{
	width: 100%;
	text-align: center;
	height: 2.5rem;
	line-height: 2.5rem;
	color: #d291bc;
	font-size: 1.25rem;
}
.mui-content .mui-table-view .dianzan span{
	display: inline-block;
	width: 11rem;
	height: 2.5rem;
	border: 1px solid #d291bc;
	border-radius: 0.3125rem;
}
</style>