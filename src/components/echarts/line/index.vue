<template>
    <div>
        <div id="barline" class="barline"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
// require('echarts/lib/chart/line')

export default {
    name:'barline',
    data() {
        return {
            lineEchart: null,
            option: {}
        }
    },
    mounted() {
        this.initline()
    },
    methods: {
        initline () {
            this.option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }
            this.lineEchart = echarts.init(document.getElementById('barline'))
            this.lineEchart.setOption(this.option)
        },
    },
}
</script>

<style lang="">
    .barline {
        width: 25vw;
        height: 32vh;
    }
</style>