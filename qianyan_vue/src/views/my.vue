<template>
    <div>
        <my-header></my-header>
        <myfloor-one></myfloor-one>
        <myfloor-two></myfloor-two>
        <myfloor-three></myfloor-three>
    </div>
</template>
<script>
import MyHeader from '../components/my/myhead'
import MyfloorOne from '../components/my/myfloorone'
import MyfloorTwo from '../components/my/myfloortwo'
import MyfloorThree from '../components/my/myfloorthree'
export default {
    components:{
        MyHeader,
        MyfloorOne,
        MyfloorTwo,
        MyfloorThree
    }
}
</script>
<style lang="" scoped>
    html{
        background-color: none!important;
    }
</style>