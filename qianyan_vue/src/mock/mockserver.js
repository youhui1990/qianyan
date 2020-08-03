import Mock from "mockjs"
let moodData=[
    {
        id:1,
        name:'樱花草',
        gender:"女"	,
        himg: require('../../static/imgs/headimg/h1.jpg'),
        shetuan:'解忧杂货社',
        mood:'中考倒计时20天,评论。。。中考加油不过分吧',
        pic:require('../../static/imgs/pic/a1.jpg'),
        address:'黑龙江',
        week:'星期一',
        num:2,
        flag:true
    },
    {
        id:2,
        name:'毒叶',
        gender:"男"	,
        himg: require("../../static/imgs/headimg/h2.jpg"),
        shetuan:'旧梦如烟社',
        mood:'喜欢一个人是藏不住的，多喜欢几个就藏得住了',
        pic:require('../../static/imgs/pic/a2.jpg'),
        address:'南京',
        week:'星期二',
        num:33,
        flag:false	
    },
    {
        id:3,
        name:'社会仙女不仙',
        gender:"女"	,
        himg:require("../../static/imgs/headimg/h3.jpg"),
        shetuan:'解忧杂货社',
        mood:'记住该记住的，忘记该忘记的。改变能改变的，接受不能改变的，相爱的人，虽然拥有一颗爱的心，但是毕竟是连你两个身躯，难免是有摩擦，爱安慰别人头头是道，却在深夜独自抱枕哭泣。人都这样，道理总是说服别人，却说服不了自己。',
        pic:require('../../static/imgs/pic/a3.jpg'),
        address:'上海',
        week:'星期三',
        num:12,
        flag:false
        	
    },
    {
        id:4,
        name:'归零',
        gender:"女"	,
        himg:require("../../static/imgs/headimg/h4.jpg"),
        shetuan:'解忧杂货社',
        mood:'安慰别人头头是道，却在深夜独自抱枕哭泣。人都这样，道理总是说服别人，却说服不了自己。',
        pic:require('../../static/imgs/pic/a3.jpg'),
        address:'陕西',
        week:'星期三',
        num:342,
        flag:false
        	
    },
    {
        id:5,
        name:'肖林',
        gender:"男"	,
        himg:require('../../static/imgs/headimg/h5.jpg'),
        shetuan:'浅言大院社',
        mood:'6月2日至28日，中央气象台已经连续27天发布暴雨预警，持续时间为近年来少见。6月28日14时至29日14时...',
        pic:require('../../static/imgs/pic/a5.jpg'),
        address:'上海',
        week:'星期三',
        num:12,
        flag:false	
    },
    {
        id:6,
        name:'Jealousy',
        gender:"男"	,
        himg:require('../../static/imgs/headimg/h6.jpg'),
        shetuan:'解忧杂货社',
        mood:'你先撑一下这段感情 我这把游戏打完再回来',
        pic:require('../../static/imgs/pic/a6.jpg'),
        address:'无锡',
        week:'星期一',
        num:1,
        flag:false
    },	
    {
        id:7,
        name:'森暖',
        gender:"女"	,
        himg:require('../../static/imgs/headimg/h7.jpg'),
        shetuan:'解忧杂货社',
        mood:'	不知道说点那啥，冒个泡',
        pic:require('../../static/imgs/pic/a7.png'),
        address:'杭州',
        week:'星期一',
        num:265,
        flag:false	
    },	
    {
        id:8,
        name:'一诺沁情',
        gender:"女"	,
        himg:require('../../static/imgs/headimg/h8.jpg'),
        shetuan:'旅途者9号社',
        mood:'我看起来太胖 是被生活打肿的。',
        pic:require('../../static/imgs/pic/a8.jpg'),
        address:'苏州',
        week:'星期一',
        num:45,
        flag:false	
    },	
    {
        id:9,
        name:'生如夏花',
        gender:"女"	,
        himg:require('../../static/imgs/headimg/h9.jpg'),
        shetuan:'解忧杂货社',
        mood:'如果你还可以努力、可以付出，就不要轻言停止和放弃。',
        pic:require('../../static/imgs/pic/aa1.jpg'),
        address:'杭州',
        week:'星期一',
        num:87,
        flag:false	
    }				
]
Mock.mock("/moodlist", moodData);
 
let shetuanData=[
    {
        id:1,
        img:require('../assets/imgs/s1.png'),
        name:'拾光晨星社',
        descp:'你是踩碎星光落入我的社团',
    },
    {
        id:2,
        img:require('../assets/imgs/s2.png'),
        name:'不负韶华社',
        descp:'曾经少过的拥抱才是最动人的',
    },
    {
        id:3,
        img:require('../assets/imgs/s3.png'),
        name:'周榜第一社',
        descp:'你来，我们的故事就开始了',
    },
    {
        id:4,
        img:require('../assets/imgs/s4.png'),
        name:'鱼子酱社',
        descp:'你没看错，这个社团就是你想的',
    },
    {
        id:5,
        img:require('../assets/imgs/s5.png'),
        name:'堕入凡尘社',
        descp:'目光所及，满目欢喜...',
    },
]
Mock.mock("/shetuan", shetuanData);
//相关浅友
let qianyou = [
    {
        img:require('../assets/imgs/headimg/h1.jpg'),
        name:'admin1'
    },
    {
        img:require('../assets/imgs/headimg/h2.jpg'),
        name:'admin2'
    },
    {
        img:require('../assets/imgs/headimg/h3.jpg'),
        name:'admin3'
    },
    {
        img:require('../assets/imgs/headimg/h4.jpg'),
        name:'admin4'
    },
    {
        img:require('../assets/imgs/headimg/h5.jpg'),
        name:'admin5'
    },
    {
        img:require('../assets/imgs/headimg/h6.jpg'),
        name:'admin6'
    },
    {
        img:require('../assets/imgs/headimg/h7.jpg'),
        name:'admin7'
    },
    {
        img:require('../assets/imgs/headimg/h8.jpg'),
        name:'admin8'
    },
    {
        img:require('../assets/imgs/headimg/h9.jpg'),
        name:'admin9'
    },
    {
        img:require('../assets/imgs/headimg/h10.jpg'),
        name:'admin10'
    },
]
Mock.mock("/qianyou", qianyou);