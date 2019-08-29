<template>
    <div>
        <div ref="graph" class="graph"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import {on,off} from '@/api/tools'

export default {
    name: 'graph',
    data() {
        return {
            graph:null,
            graphOption: {},
            axisData: ['周一','周二','周三','很长很长的周四','周五','周六','周日']
        }
    },    
    mounted() {
        this.initgraph()
    },
    methods: {
        resize () {
            this.graph.resize()
        },
        initgraph () {
            let ths =this
            let data = this.axisData.map(function (item, i) {
                return Math.round(Math.random() * 1000 * (i + 1));
            });
            let links = data.map(function (item, i) {
                return {
                    source: i,
                    target: i + 1
                };
            });
            links.pop();
            this.graphOption = {
                title: {
                    text: '笛卡尔坐标系上的 Graph'
                },
                tooltip: {},
                xAxis: {
                    type : 'category',
                    boundaryGap : false,
                    data : ths.axisData
                },
                yAxis: {
                    type : 'value'
                },
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        coordinateSystem: 'cartesian2d',
                        symbolSize: 40,
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        data: data,
                        links: links,
                        lineStyle: {
                            normal: {
                                color: '#2f4554'
                            }
                        }
                    }
                ]                
            }
            this.graph = echarts.init(this.$refs.graph)
            this.graph.setOption(this.graphOption)
            on(window,'resize',this.resize)
        }
    },
    beforeDestroy() {
        off(window,'resize',this.resize)
    },
}
</script>

<style lang="">
    .graph {
        width: 100%;
        height: 30vh;
    }
</style>