import {ALLMOOD,ONEMOOD} from "./mutation-type"
import Vue from 'vue'
export default{
    //登录
    getLoginMsg(state,user){
        state.user=user
    },
    //所有评论
    [ALLMOOD](state,allmood){
        state.allmoodlist=allmood
    },
    getNewMood(state,newlist){
        state.nowlist =newlist
    },
    //点赞
    changeNum(state,data){
        state.allmoodlist[data.idx].num =data.num
        console.log( state.allmoodlist[data.idx])
    },
    //社团
    getShetuanMsg(state,shetuanmsg){
        state.shetuanMsg=shetuanmsg   
    },
    //一个记录
    [ONEMOOD](state,onemood){
        state.oneMood=onemood
    },
    //全部评论
    getAllCom(state,allcomment){
        state.allcommentlist=allcomment
    },
    //添加评论
    AddComment(state,onecomment){
        state.allcommentlist.push(onecomment)
    },
    //删除评论
    delComment(state,idx){
        state.allcommentlist.splice(idx,1)
        console.log(state.allcommentlist)
    },
    //发表动态
    addDongTai(state,data){
        state.allmoodlist.push(data)
        console.log(state.allmoodlist)
    }
}