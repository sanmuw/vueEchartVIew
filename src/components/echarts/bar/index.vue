<template>
    <div>
        <div id="barsimple" class="barsimple"></div>
    </div>
</template>

<script>
import echarts from 'echarts'

export default {
    name:'barsimple',
    data () {
        return {
            barsimple: null,
            option:{}
        }
    },
    mounted() {
        this.initbarsimple()
    },
    methods:{
        initbarsimple () {
            this.option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }]
            }

            this.barsimple = echarts.init(document.getElementById('barsimple'))
            this.barsimple.setOption(this.option)
        }
    },
}
</script>

<style lang="">
    .barsimple {
        width: 25vw;
        height: 30vh;
    }
</style>