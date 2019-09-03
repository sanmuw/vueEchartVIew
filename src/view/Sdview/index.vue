<template>
    <div class="Dview">
        <div class="HeaderBar">
            <t-header :headertitle="headertitle"></t-header>
        </div>
        <div class="maincontain">
        <el-row :gutter="20">
            <el-col :span="7">
                <div class="grid-content bg-purple glleft">
                    <div class="col"><gl-bar style="width:100%;height:100%"></gl-bar></div>
                    <div class="col"><gl-surface style="width:100%;height:100%"></gl-surface></div>
                    <div class="col"><gl-orthographic style="width:100%;height:100%">></gl-orthographic></div>
                </div>
            </el-col>
            <el-col :span="10">
                <div class="grid-content bg-purple mid">
                    <div class="earth">
                        <gl-map style="width:100%;height:100%;"></gl-map>
                    </div>
                    <div class="otherchart">
                        <gl-bar style="width:100%;height:100%"></gl-bar>
                    </div>

                </div>
            </el-col>
            <el-col :span="7">
                <div class="grid-content bg-purple glright">
                    <div class="col"><gl-bar style="width:100%;height:100%"></gl-bar></div>
                    <div class="col"><gl-surface style="width:100%;height:100%"></gl-surface></div>
                    <div class="col"><gl-orthographic style="width:100%;height:100%">></gl-orthographic></div>
                </div>
            </el-col>
        </el-row>
        </div>
    </div>
</template>

<script>
import THeader from '@/components/DHeader/index'
import GlMap from '@/components/echarts/3D/map/index'
import GlBar from '@/components/echarts/3D/bar/index'
import GlSurface from '@/components/echarts/3D/surface/index'
import GlOrthographic from '@/components/echarts/3D/orthographic/index'

export default {
    data() {
        return {
            headertitle:'Echarts3D可视化'
        }
    },
    components:{
        THeader,
        GlMap,
        GlBar,
        GlSurface,
        GlOrthographic
    }
}
</script>

<style lang="less" scoped>
    @import './sdview';

    .HeaderBar{
        height:  10vh;
    }
    .el-row {
        margin-bottom: 20px;
        /* width: ; */
        
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        // background: #99a9bf;
    }
    .bg-purple {
        // background: #d3dce6;
    }
    .bg-purple-light {
        // background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        // background-color: #f9fafc;
    }
</style>