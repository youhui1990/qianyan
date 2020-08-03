<template>
    <div>
        <div class="g-floor mui-content">
		
		<ul class="mui-table-view mui-row g-floor3">
			<p class="title">特色功能</p>
		    <li class="mui-table-view-cell mui-col-sm-3">
		        <a href="javascript:;">
		            <img class="mui-media-object" src="../../assets/imgs/mc1.png">
		            <div class="mui-media-body">
		                文集		              
		            </div>
		        </a>
		    </li>
		   <li class="mui-table-view-cell mui-col-sm-3">
		       <a href="javascript:;">
		           <img class="mui-media-object" src="../../assets/imgs/mc2.png">
		           <div class="mui-media-body">
		               手账		              
		           </div>
		       </a>
		   </li>
		   <li class="mui-table-view-cell mui-col-sm-3">
		       <a href="javascript:;">
		           <img class="mui-media-object" src="../../assets/imgs/mc3.png">
		           <div class="mui-media-body">
		               星座解密		              
		           </div>
		       </a>
		   </li>
		   <li class="mui-table-view-cell mui-col-sm-3">
		       <a href="javascript:;">
		           <img class="mui-media-object" src="../../assets/imgs/mc4.png">
		           <div class="mui-media-body">
		               PK赛		              
		           </div>
		       </a>
		   </li>
		   <li class="mui-table-view-cell mui-col-sm-3">
		        <a href="javascript:;">
		            <img class="mui-media-object" src="../../assets/imgs/mc5.png">
		            <div class="mui-media-body">
		                南京同城		              
		            </div>
		        </a>
		    </li>
		   <li class="mui-table-view-cell mui-col-sm-3">
		       <a href="javascript:;">
		           <img class="mui-media-object" src="../../assets/imgs/mc6.png">
		           <div class="mui-media-body">
		               时光说		              
		           </div>
		       </a>
		   </li>
		   <li class="mui-table-view-cell mui-col-sm-3">
		       <a href="javascript:;">
		           <img class="mui-media-object" src="../../assets/imgs/mc7.png">
		           <div class="mui-media-body">
		               盲盒	              
		           </div>
		       </a>
		   </li>
		   <li class="mui-table-view-cell mui-col-sm-3">
		       <a href="javascript:;">
		           <img class="mui-media-object" src="../../assets/imgs/mc8.png">
		           <div class="mui-media-body">
		               周榜		              
		           </div>
		       </a>
		   </li>
		   <li class="mui-table-view-cell mui-col-sm-3">
		        <a href="javascript:;">
		            <img class="mui-media-object" src="../../assets/imgs/mc9.png">
		            <div class="mui-media-body">
		                杂货铺		              
		            </div>
		        </a>
		    </li>
		   <li class="mui-table-view-cell mui-col-sm-3">
		       <a href="javascript:;">
		           <img class="mui-media-object" src="../../assets/imgs/mc10.png">
		           <div class="mui-media-body">
		               浅言主题曲		              
		           </div>
		       </a>
		   </li>
		   <li class="mui-table-view-cell mui-col-sm-3">
		       <a href="javascript:;">
		           <img class="mui-media-object" src="../../assets/imgs/mc11.png">
		           <div class="mui-media-body">
		               有料看看	              
		           </div>
		       </a>
		   </li>
		   <li class="mui-table-view-cell mui-col-sm-3">
		       <a href="javascript:;">
		           <img class="mui-media-object" src="../../assets/imgs/mc12.png">
		           <div class="mui-media-body">
		               闹钟		              
		           </div>
		       </a>
		   </li>
		</ul>
	</div>
	<!-- 撑空白 -->
	<div class="liubai"></div>
    </div>
</template>
<script>

export default {

}
</script>
<style lang="" scoped>
.g-floor{
	margin-top: 20px;
}
.g-floor .mui-table-view{
	background-color: #fff;
	height: 12.5rem;
	color: #333;
	width: 90%;
	margin: 0 auto;
	border-radius: 15px;
	padding-top: 1.25rem;
}
.g-floor .mui-table-view .title{
	color: #333;
	font-size: 1rem;
	margin-left: 1.25rem;
	font-weight: bold;
	margin-bottom: -0.1875rem;
}

.g-floor .mui-table-view .mui-table-view-cell{
	padding: 0.0625rem;
	width: 25%;
	text-align: center;
	
}
.g-floor .mui-table-view .mui-table-view-cell img{
    line-height: 2.625rem;
    max-width: 2.625rem;
    height: 2.625rem;
	
}
.mui-table-view .mui-media-body {
     overflow: initial; 
}
.g-floor .mui-table-view .mui-table-view-cell a{
	margin: 0;
	height: 4.375rem;
}
 .g-floor .mui-table-view .mui-table-view-cell a .mui-media-body{
	 color: #666!important;
	 font-size: 0.75rem;
 }
 .mui-table-view-cell:after {
	 height: 0!important;
 }
 .mui-table-view-cell > a:not(.mui-btn).mui-active{
	background-color: #FFFFFF;
	opacity: 0.5;
}
.g-floor3 {
	height: 16.25rem!important;
}
.liubai{
	height: 4.25rem;
}
</style>