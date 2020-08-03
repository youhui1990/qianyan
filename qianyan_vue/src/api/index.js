import myajax from "./myajax"
//获取商品信息
export const reqAllist = ()=>myajax('/moodlist');
//社团信息
export const reqShetuan = ()=>myajax('/shetuan');
//相关浅友
export const reqQianyou = ()=>myajax('/qianyou');
//登录
export const reqLogin = ({name,pass})=>myajax('http://localhost:3000/users/login',{name,pass},'POST')
//评论
export const reqComment = ()=>myajax('http://localhost:3000/users/Plist','GET')
//删除评论
export const reqDelComment = (id)=>myajax('http://localhost:3000/users/delpl',{id},'GET')
//一条评论
export const reqOneMood = (id)=>myajax('http://localhost:3000/users/getone',{id},'GET')
//一条评论
export const reqOneCom = (data)=>myajax('http://localhost:3000/users/updpl',{data},'POST')
//发表动态

