<template>
    <div class="mheader">
        <h3>{{mheadertitle}}</h3>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props:{
      mheadertitle:{
        type: String,
        default: ''
      }
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components: {

    }
}
</script>

<style lang="less" scoped>
// .header {
//     margin: 0 auto;
//     width: 100%;
//     min-height: 8vh;
//     // max-width: 1920px;
    
//     background: url('../../assets/img/header.png') center no-repeat;
//     background-size: 100% 100%;
//     h3 {
//         margin: 0;
//         padding: 0;
//         // vertical-align:middle;
//         line-height: 8vh;
//         text-align: center;
//         font-size: 24px;
//         color: #5dc2fe;
//     }
// }

  .mheader {
      margin: 0 auto;
      width: 100%;
      min-height: 10vh;
      // border-radius: 4px;
      // margin-left: 10px;
      // margin-right: 10px;
      // background: #99a9bf;
      background: url("../../assets/img/headerimg/header-left01.png") left center no-repeat, url("../../assets/img/headerimg/header-right01.png") right center no-repeat;
      background-size: 43% 80%, 43% 80%;
      overflow: hidden;
      h3 {
        margin: 0;
        padding: 0;
        line-height: 10vh;
        text-align: center;
        font-size: 24px;
        color: #5dc2fe;
      }
  }
</style>