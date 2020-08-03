<template>
    <div class="g-warning" :class="{show:sid==1?isDel.del:false}">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell delbtn" @click="delone(isDel.id)">删除</li>
            <li class="mui-table-view-cell">举报</li>
            <li class="mui-table-view-cell m-hidden" @click="hiddenbox">取消</li>
        </ul>
    </div>
</template>
<script>
import {reqDelComment,reqComment} from '../../api/index'
import {mapState, mapActions} from 'vuex'
export default {
    props:['isDel'],
    data() {
        return {
            sid:1
        }
    },
    computed: {
        ...mapState(['allcommentlist'])
    },
    methods: {
        ...mapActions(['delOneComment']),
        async delone(id){   
            if(confirm('确认删除？')){
               let msg = await reqDelComment(id)
               alert(msg.message)
                this.$store.dispatch('delOneComment',this.isDel.index)
                this.sid=0
            }
        },
        hiddenbox(){
            this.sid=0
        }
    },
}
</script>
<style lang="" scoped>
    .g-warning{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9999;
    display: none;
}
.show{
    display: block!important;
}
.g-warning .mui-table-view{
	text-align: center;	
	/* background-color: red; */
	padding-bottom: 0;
	color: #999;
	font-size:0.89rem;
	letter-spacing: 0.1rem;
}
.g-warning .mui-table-view .mui-table-view-cell{
	height: 30px;
	line-height: 30px;
	padding: 0;
}
.g-warning .mui-table-view::before{
	width: 0;
}
.g-warning .mui-table-view .mui-table-view-cell::after{
	left: 0;
}

</style>