<template>
    <div class="schart">
        <m-header :mheadertitle="mheadertitle"></m-header>
        <div class="comtain">
            <el-row :gutter="20" class="comtent">
                <el-col :span="7">
                  <div class="grid-content bg-purple">
                    <div>
                      <bar-line></bar-line>
                    </div>
                    <div>
                      <bar-simple></bar-simple>
                    </div>
                    <div>
                      <regression></regression>
                    </div>
                  </div>
                  </el-col>
                <el-col :span="10">
                  <div class="grid-content bg-purple">
                    <div>
                      <Map></Map>
                    </div>
                    <div>
                      <Candlestick></Candlestick>
                    </div>
                  </div>
                </el-col>
                <el-col :span="7">
                  <div class="grid-content bg-purple">
                    <div>
                      <pie-simple></pie-simple>
                    </div>
                    <div>
                      <radar></radar>
                    </div>
                    <div>
                      <Graph></Graph>
                    </div>
                  </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import MHeader from '@/components/MHeader/index'
import BarLine from '@/components/echarts/line/index'
import BarSimple from '@/components/echarts/bar/index'
import PieSimple from '@/components/echarts/pie/index'
import regression from '@/components/echarts/regression/index'
import Map from '@/components/echarts/map/index'
import Radar from '@/components/echarts/radar/index'
import Candlestick from '@/components/echarts/candlestick/index'
import Graph from '@/components/echarts/graph/index'

export default {
    name: 'Home',
    data() {
        return{
          mheadertitle: "大屏展示"
        }
    },
    methods: {
        
    },
    components:{
        MHeader,
        BarLine,
        BarSimple,
        PieSimple,
        regression,
        Map,
        Radar,
        Candlestick,
        Graph
    }
}
</script>

<style lang="less" scoped>
@import './home.less';
  .comtain {
      margin-top: 0.5rem;
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
    /* background: #99a9bf; */
  }
  .bg-purple {
    /* background: #d3dce6; */
  }
  .bg-purple-light {
    /* background: #e5e9f2; */
  }
  .grid-content {
    border-radius: 4px;
    height: 90vh;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    /* background-color: #f9fafc; */
  }  
</style>