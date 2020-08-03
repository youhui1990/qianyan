<template>
    <div>
        <div class="mui-content">
			<div class="">
                <index-header></index-header>
                <index-hot></index-hot>
             </div>
        </div>  
        
    </div>
</template>
<script>
import IndexHeader from '../components/index/indexheader'
import IndexHot from '../components/index/indexhot'

export default {
    components:{
        IndexHeader,
        IndexHot,
      
    }
}
</script>
<style lang="" scoped>

</style>