<template>
    <div class="tanchuang" v-show="outdata" >			
        <span class=" mui-icon mui-icon-left-nav mui-pull-left" @click="hidden"></span>
        <h1 class="mui-title">共{{num}}条评论</h1>
        <div class="pl-comment">
            <div class="mui-card" v-for="(item,index) in allcommentlist" :key="index">
				<!--页眉，放置标题-->			
					<div class="mui-card-header mui-card-media">
						<img :src='item.himg' class="pl-head-img" />
						<div class="mui-media-body">
							<p class="name">{{item.username}}</p>
							<p> {{item.ym}} {{item.hm}}</p>
						</div>					
					</div>			
					<!--内容区-->
					<div class="mui-card-content" >
						{{item.pinglun}}
					</div>		
				</div>
        </div>
        <div class="mui-row">
            <span class="mui-col-xs-2 mui-icon mui-icon-image"></span>
            <span class="mui-col-xs-7">
                <input type="" name="" id="" value="" placeholder="回复xxx" v-model="textcon"/>
            </span>
            <span class="mui-col-xs-3 send" @click="send">发送</span>
        </div>
    </div>
</template>
<script>
import {reqOneCom} from '../../api/index'
import {mapState,mapActions} from 'vuex'
// import {year,month,day,hours,mm,ss,ym,hm,week} from '../../../static/js/getTime'
export default {
     props:['isshow'],
     data() {
         return {
           outdata:'',
			textcon:'',
			// comment:[],
			num:''
         }
	 },
	 computed: {
		 ...mapState(['allcommentlist'])
	 },
     methods: {
		 ...mapActions(['addComment']),
         hidden(){
             this.outdata = false
		 },
		 send(){
			 let usermsg =JSON.parse(localStorage.getItem('usermsg'))
			 let newcom={
				 username:usermsg.name,
				 himg:usermsg.himg,
				 pinglun:this.textcon,
				 ym:"2020-09-21",
				 hm:'12:21'
			 }
			this.$store.dispatch('addComment',newcom)
			reqOneCom(newcom)
			this.textcon=''
		 } 
	 },
	mounted() {
			console.log('pl',this.allcommentlist)	
			this.num=this.allcommentlist.length
	 },
     watch: {
         isshow(){
             if( this.outdata == false){
                 this.outdata =true
             }else{
                 this.outdata =false
             }
             
         }
     },
     
}
</script>
<style lang="" scoped>
.tanchuang{
	width: 100%;
	height: 400px;
	background-color: #FFFFFF;
	position:fixed;
	bottom: 0;
	left: 0;
	z-index: 999;
}
.tanchuang .mui-title{
	font-size: 14px;
	margin-left: 40px;
	padding-right: 40px;
}
.tanchuang .mui-icon-left-nav{
	display: inline-block;
	height: 2.75rem;
	line-height: 2.75rem;
	padding-left: 10px;
	color: #666;
}
.tanchuang .pl-comment{
	border-top: 0.5px solid #999;
	margin-top:44px ;
	background-color: #fff;
	height: 312px;
	overflow-y: auto;
}
.tanchuang input{
	height: 1.875rem;
	border: none;
	background-color: #f4f4f4;
	border-radius: 3px;
	padding-left: 10px;
	font-size: 14px;
	width: 220px;
	margin-left: 5px;
}
.tanchuang .mui-row{
	text-align: center;
	line-height: 40px;
	height: 40px;
}

.tanchuang .mui-row span{
	height: 40px;
	line-height: 40px;
	font-size: 14px;
}
.tanchuang .mui-row .mui-icon-image{
	font-size: 30px;
	vertical-align: middle;
}
.tanchuang .mui-row .send{
	color: #efa8e4;

}
.tanchuang .pl-comment .mui-card{
	box-shadow: none;
	margin-left: -10px;
}
.tanchuang .pl-comment .mui-card .mui-card-content{
	padding-left:50px ;
}
.mui-card-header:after {
 height: 0;
}
.mui-card-header img{
	width: 40px;
	height:40px;
	border-radius: 50%;
	border: 2px solid #00bcd4;
}
</style>