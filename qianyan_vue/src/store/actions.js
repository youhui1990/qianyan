import {ALLMOOD,ONEMOOD} from "./mutation-type"
import {reqAllist} from "../api/index"
export default{
    //登录
    userLogin(context,user){
        context.commit('getLoginMsg',user)
    },
    async getAllmood(context){
        //从后台取出相应的信息
        const allist = await reqAllist();
        context.commit(ALLMOOD,allist)
    },
    getNewList(context,newlist){
        context.commit('getNewMood',newlist)
    },
    //点赞
    dianZan(context,data){
        context.commit('changeNum',data)
    },
    //社团
    getShetuan(context,choose){
        context.commit('getShetuanMsg',choose)     
    },
    //一个记录
    getoneMood(context,onemood){
        context.commit(ONEMOOD,onemood)
    },
    //评论记录
    getAllComment(context,allcom){
        context.commit('getAllCom',allcom)
    },
    //添加评论
    addComment(context,onecom){
        context.commit('AddComment',onecom)
    },
    //删除一个评论
    delOneComment(context,onecom){
        context.commit('delComment',onecom)
    },
    //发表动态
    addDongtai(context,data){
        context.commit('addDongTai',data)
        console.log(data)
    }
}