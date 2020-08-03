<template>
    <div class="body-box">
        <div class="g-body">					
			<div class="title">浅言</div>
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <span class="mui-icon mui-icon-phone"></span>
                    <input type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="name" >
                </div>
                <div class="mui-input-row">
                    <span class="mui-icon mui-icon-locked"></span>
                    <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="pass">
                </div>
                <p class="pwd fr">忘记密码</p>
                
                <div class="mui-button-row">
                    <a href="javascript:;" class="loginbtn"><button type="button" class="mui-btn mui-btn-primary" @click="Login">登&nbsp;&nbsp;&nbsp;&nbsp;录</button></a>
                <a href="qy_login_phone.html"><button type="button" class="mui-btn mui-btn-danger" >短信验证码登录</button></a> 
                </div>
            </form>
            <p class="line">快速登录</p>
            <div class="wechat">
                <img src="imgs/weixin.png" alt="">
                <img src="imgs/QQ.png" alt="">
            </div>
            <p class="mui-bottom">隐私政策 | 浅言服务条款</p>
        </div>
        <div class="upd-pwd">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>手机号</label>
                    <input type="text" class="mui-input-clear utel" placeholder="请输入手机号">
                </div>
                <div class="mui-input-row">
                    <label>验证码</label>
                    <input type="password" class="" placeholder="请输入验证码">
                </div>
                <div class="mui-input-row">
                    <label>新密码</label>
                    <input type="password" class="mui-input-password new-p" placeholder="请输入新密码">
                </div>
                <div class="mui-button-row">
                    <button type="button" class="mui-btn mui-btn-primary updbtn" >确认</button>
                    <button type="button" class="mui-btn mui-btn-danger clearbtn" >取消</button>
                </div>		
            </form>
        </div>
    </div>
</template>
<script>
import {reqLogin} from '../api/index'
import {mapActions, mapState} from 'vuex'
export default {
    data() {
        return {
            name:'',
            pass:''
        }
    },
    methods: {
        ...mapActions(['userLogin']),
       async Login(){
            let user =  await reqLogin({name:this.name,pass:this.pass})
            alert(user.message)
            // this.$store.dispatch('userLogin',user.data)
            localStorage.setItem('usermsg',JSON.stringify(user.data))
            this.$router.push('/')
        }
    },
}
</script>
<style lang="" scoped>
.body-box{
    height: 100vh;
	background-color: rgba(197,170,221,0.6);
	font-family: "Helvetica Neue", "Segoe UI", Tahoma, Arial, "Hiragino Sans GB", STHeiti, "Microsoft Yahei", "WenQuanYi Micro Hei", sans-serif;
}
.fr{
	float: right;
}
.g-body{
	padding: 0 30px;
}
/* 顶部浅言 */
.title{
	width: 100%;
	height: 150px;
	font-size: 70px;
	line-height: 150px;
	text-align: center;
	color: #FFFFFF;
	letter-spacing: 50px;
	font-family: "Microsoft Yahei";
	margin-left: 30px;
}
/* 登录框 */
.mui-input-group{
	background: none;
}
.mui-input-group::before,
.mui-input-group::after{
	content: "";
	width: 0;
}

.mui-input-row{
	padding-left: 40px;
		
}
.mui-input-row input{
	font-size: 12px;
	color: #FFFFFF !important;
}
.mui-icon-phone,.mui-icon-locked{
	position: absolute;
	left: 20px;
	top: 5px;
}
.mui-input-group .mui-input-row:after {
	background-color: #fff;
}
/* 忘记密码 */
.mui-input-group .pwd{
	color: #FFFFFF;
	margin-top: 10px;

}
/* 修改密码框 */
.upd-pwd{
	padding-top: 20px;
	width: 90%;
	height: 400px;
	background-color: #f6def6;	
	position: absolute;
	top: 80px;
	left: 50%;
	transform: translateX(-50%);
    display: none;
	z-index: 99999;
	box-shadow: 10px 10px 10px rgba(0,0,0,.7);
}
.upd-pwd label{
	font-size: 14px;
}
.upd-pwd .mui-input-row{
	padding-left: 10px;
}
/* 登录按钮 */
.mui-button-row{
	margin-top: 30px;
}
.mui-button-row .mui-btn{
	display: block;
	width: 90%;
	margin: 10px auto;
	height: 40px;
	border-radius: 5px;
	border: none;
	transition: none;
}
.mui-button-row .mui-btn-primary:active{
	background-color: rgba(185,154,254,0.2);
	border: none;
	outline: none;
}
.mui-button-row .mui-btn-danger:active{
	background-color: rgba(185,154,254,0.1);
	background: none;
	outline: none;
		border: none;
}
.mui-button-row .mui-btn-primary{
	background-color: rgb(185,154,254);
	font-size: 17px;
	font-weight: 600;
	
}
.mui-button-row .mui-btn-danger{
	background-color: rgb(255,255,255,0.2);
	font-size: 15px;
	letter-spacing: 2px;
	
}
/* 快速登录 */
.line{
	font-size: 14px;
	text-align: center;
	margin-top: 140px;
	position: relative;
}
.line::before,.line::after{
	content: "";
	width: 60px;
	height: 1px;
	background-color: #fff;
	position: absolute;
	top: 10px;
	box-shadow: 1px 1px 2px #FFFFFF;
}
.line::after{
	right: 35px;
}
.line::before{
	left: 35px;
}
/* 微信qq图标 */
.wechat{
	width: 80%;
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
}
.wechat img{
	width: 35px;
	height: 35px;
}
/* 底部 */
.mui-bottom{
	width: 100%;
	text-align: center;
	position: fixed;
	top: 530px;
	left: 0;
	font-size: 12px;
	color: rgb(108,142,206);
}
</style>