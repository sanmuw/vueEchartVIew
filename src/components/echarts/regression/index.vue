<template>
    <div>
        <div id="regression" class="regression"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import ecStat from 'echarts-stat'
import {on,off} from '@/api/tools'

export default {
    name:'regression',
    data() {
        return {
            regression: null,
            regOption: {},
            data: [
                [1, 4862.4],
                [2, 5294.7],
                [3, 5934.5],
                [4, 7171.0],
                [5, 8964.4],
                [6, 10202.2],
                [7, 11962.5],
                [8, 14928.3],
                [9, 16909.2],
                [10, 18547.9],
                [11, 21617.8],
                [12, 26638.1],
                [13, 34634.4],
                [14, 46759.4],
                [15, 58478.1],
                [16, 67884.6],
                [17, 74462.6],
                [18, 79395.7]
            ]
        }
    },
    mounted() {
        this.initregression()
    },
    methods: {
        resize () {
            this.regression.resize()
        },
        initregression () {
            let myRegression = ecStat.regression('exponential', this.data)
            myRegression.points.sort(function(a, b) {
                return a[0] - b[0];
            })
            this.regOption = {
                title: {
                    text: '1981 - 1998 gross domestic product GDP (trillion yuan)',
                    subtext: 'By ecStat.regression',
                    // sublink: 'https://github.com/ecomfe/echarts-stat',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                xAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    splitNumber: 20
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                series: [{
                    name: 'scatter',
                    type: 'scatter',
                    label: {
                        emphasis: {
                            show: true,
                            position: 'left',
                            textStyle: {
                                color: 'blue',
                                fontSize: 16
                            }
                        }
                    },
                    data: this.data
                }, {
                    name: 'line',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    data: myRegression.points,
                    markPoint: {
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'left',
                                formatter: myRegression.expression,
                                textStyle: {
                                    color: '#333',
                                    fontSize: 14
                                }
                            }
                        },
                        data: [{
                            coord: myRegression.points[myRegression.points.length - 1]
                        }]
                    }
                }]                
            }
            this.regression = echarts.init(document.getElementById('regression'))
            this.regression.setOption(this.regOption)
            on(window,'resize',this.resize)
        }
    },
    beforeDestroy() {
        off(window,'resize',this.resize)
    },
}
</script>

<style lang="">
    .regression {
        width: 25vw;
        height: 30vh;
    }
</style>