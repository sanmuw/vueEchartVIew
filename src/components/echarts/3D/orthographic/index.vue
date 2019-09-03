<template>
    <div>
        <div ref="orthographic" class="orthographic"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
import {on,off} from '@/api/tools'

export default {
    data() {
        return {
            orthographic: null,
            oroption: {},
            data:[]
        }
    },
    mounted() {
        this.initorthographic()
    },
    methods: {
        resize () {
            this.orthographic.resize()
        },
        initorthographic () {
            for(let t=0;t<25;t += 0.001){
                let x = (1 + 0.25 * Math.cos(75 * t)) * Math.cos(t);
                let y = (1 + 0.25 * Math.cos(75 * t)) * Math.sin(t);
                let z = t + 2.0 * Math.sin(75 * t)
                this.data.push([x, y, z]);
            }

            this.oroption = {
                tooltip: {},
                // backgroundColor: '#fff',
                visualMap: {
                    show: false,
                    dimension: 2,
                    min: 0,
                    max:30,
                    inRange: {
                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    }
                },
                xAxis3D: {
                    type: 'value'
                },
                yAxis3D: {
                    type: 'value'
                },
                zAxis3D: {
                    type: 'value'
                },
                grid3D: {
                    viewControl: {
                        projection: 'orthographic'
                    }
                },
                series: [{
                    type: 'line3D',
                    data: this.data,
                    lineStyle: {
                        width: 4
                    }
                }]
            }
            this.orthographic = echarts.init(this.$refs.orthographic)
            this.orthographic.setOption(this.oroption)
            on(window,'resize',this.resize)
        }
    },
    beforeDestroy() {
          off(window,'resize',this.resize)
    },
}
</script>

<style lang=less scoped>
    .orthographic {
        width: 100%;
        height: 100%;
    }
</style>