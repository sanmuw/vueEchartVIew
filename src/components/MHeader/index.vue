<template>
    <div class="mheader">
        <el-row>
          <el-col :span="22"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Header',
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
  .mheader {
      height: 6vh;
      border-radius: 4px;
      // margin-left: 10px;
      // margin-right: 10px;
      background: #99a9bf;
  }
  .el-row {
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>