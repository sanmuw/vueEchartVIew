<template>
    <div class="header">
        <h3>{{headertitle}}</h3>
    </div>
</template>

<script>

    export default {
        props:{
            headertitle:{
                type:String,
                default: ''
            }
        },
        data() {
            return {
                title:'大屏展示'
            }
        },        
    }

</script>

<style lang="less" scoped>
    @import './header.less';
</style>