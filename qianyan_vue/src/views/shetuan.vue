<template>
    <div class="content-box">
        <div class="mui-content">
			<h4>加入社团</h4>
			<span class="desc">加入你感兴趣的社团，开启你的社团之旅！</span>
			<span class="change mui-pull-right">换一换<i class="iconfont icon-icon_shuaxin"></i></span>			
		</div>
		<div class="mui-content">
		    <div class="mui-row">
		        <div class="mui-col-sm-4 " v-for="(item,index) in shetuanMsg" :key="index">
		            <li class="mui-table-view-cell" @click="onchoose(index)">
                        <p id="cur">
                            <img src="../assets/imgs/xuanzhong.png" alt="" :class="{active:index==sid}">
                        </p>		               
						<a class="">
							<img :src="item.img" alt="">
							<p>{{item.name}}</p>
							<p>{{item.descp}}</p>
							<p>加入社团</p>  
						</a>   		             
		            </li>
		        </div> 
                <div class="mui-col-sm-4 ">
				        <li class="mui-table-view-cell">
				        	<a class="">
				        		<img src="../../static/imgs/s6.png" alt="">				      
				        		<p>创建专属社团</p>  
				        	</a>		              
				        </li>
				</div>
		    </div>
		</div>
		<div class="open-now" :class="{onactive:flag}" @click="go">
			立即开启
		</div>
    </div>
</template>
<script>
import {reqShetuan} from '../api/index'
import {mapState, mapActions} from 'vuex'
export default {
    data() {
        return {
            flag:false,
            sid:-1

        }
    },
    methods: {
        ...mapActions(['getShetuan']),
        onchoose(idx){
            if(this.sid == -1){
                this.sid = idx
                this.flag = true
            }else if(this.sid == idx){
                 this.sid = -1
                this.flag = false
            }else{
                 this.sid = idx
                 this.flag = true
            }
            
		},
		go(){
			if(!this.flag){
				alert('选择为空')
			}
		}
    },
    computed: {
        ...mapState(['shetuanMsg'])    
        
    },
    mounted() {
    },
    async created() {
         let shetuanList = await  reqShetuan()
         this.$store.dispatch('getShetuan',shetuanList)
    },
}
</script>
<style lang="" scoped>
#cur{
     position: absolute;
     left: 12px;
     top: 3px;
     z-index: 99;
}
#cur input{
   position: absolute;
   opacity: 0;
}
#cur img{
    width: 16px;
    height: 16px;
    position: absolute;
    display: none;
}
#cur img.active{
    display: block;
}
.content-box{
 margin-top: -25px;
 padding-top: 25px;
 height: 100vh;
 background-color: #fff;
}
.mui-content{
    background-color: #fff;
   
}
/* 加入社团 */
h4{
	font-weight: normal;
	margin: 1.25rem 0.625rem;
	font-size: 1.125rem;
}
.desc{
	font-size: 0.6875rem;
	color: #333;
	margin-left: 0.625rem;
}
.change{
	color:rgb(185,155,255) ;
	font-size: 0.625rem;
	margin-right: 0.0625rem;
}
.icon-icon_shuaxin{
	color:rgb(185,155,255) ;
	font-size: 0.625rem;
	margin-left: 0.3125rem;
}

.mui-col-sm-4{
	width: 30%;
	margin: 0.625rem 0.3125rem;
}
.mui-content .mui-col-sm-4 .mui-table-view-cell{
	padding: 0;
    text-align: center;
    position: relative;
}
.mui-table-view-cell > a:not(.mui-btn).mui-active{
	background-color:#ffffff!important;
	opacity: 0.5;
}
.mui-content .mui-col-sm-4 .mui-table-view-cell a {
margin: 0;
}
.mui-content .mui-col-sm-4 .mui-table-view-cell img{
	width: 5rem;
	height: 5rem;
}
.mui-content .mui-col-sm-4 .mui-table-view-cell p{
	font-size: 0.625rem;
	margin: 0.3125rem 0;
}
.mui-content .mui-col-sm-4 .mui-table-view-cell p:first-of-type{
	font-weight: 600;
	font-size: 0.75rem;
	text-align: center;
	color: #333;
}
.mui-content .mui-col-sm-4 .mui-table-view-cell p:nth-of-type(2){
	color: rgb(185,155,255);
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	padding-left: 0.1875rem;
	padding: 5px 0;
	margin: 0;
}
.mui-content .mui-col-sm-4 .mui-table-view-cell p:nth-of-type(3){
	background-color: rgb(185,155,255);
	width:3.75rem;
	height: 1.25rem;
	border-radius: 2px;
	color: #FFFFFF;
	margin: 0 auto;
	line-height: 1.2rem;
	padding-top:0.0625rem ;
}
.open-now{
	background-color: rgb(204,204,204);
	width: 70%;
	height: 2.5rem;
	text-align: center;
	line-height: 2.5rem;
	color: white;
	font-size: 1rem;
	border-radius: 0.1875rem;
	margin: 1.25rem auto;
	font-weight: 500;
}
.open-now.onactive{
    background-color: rgb(185,155,255);
}
</style>