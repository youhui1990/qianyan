<template>
    <div>
        <span>用户名：</span>
        <input type="text" name="" id="" placeholder="请输入用户名" v-model="name"><br>
         <span>密码：</span>
        <input type="password" name="" id="" placeholder="请输入密码" v-model="pass"><br>
        <button @click="gologin">登录</button>
    </div>
</template>
<script>
import {reqLogin} from '../api/index'
export default {
    data() {
        return {
            name:'',
            pass:''
        }
    },
    methods: {
       async gologin(){
        let res = await reqLogin({name:this.name,pass:this.pass})  
          alert(res.message)
    }
    },
   
}
</script>
<style lang="">
    
</style>