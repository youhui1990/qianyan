<template>
  <div id="app">
    <router-view/>
    <comment-footer v-show="$route.meta.isShow"></comment-footer>
  </div>
</template>

<script>
import CommentFooter from './views/commonfooter'
export default {
  components:{
    CommentFooter
  },
  name: 'App'
}
</script>

<style>
#app {
  /* background-color: #fff; */
  list-style: none;
}
</style>
