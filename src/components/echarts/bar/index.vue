<template>
    <div>
        <div id="barsimple" class="barsimple"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
import {on,off} from '@/api/tools'
export default {
    name:'barsimple',
    data () {
        return {
            barsimple: null,
            option:{},
        }
    },
    mounted() {
        // window.onresize = () => {
        //     return (() =>{
        //         console.log(1)
        //         this.initbarsimple()
        //     })()
        // }
        this.initbarsimple()
    },
    methods:{
        resize () {
            this.barsimple.resize()
        },
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
            // this.barsimple.resize()
            on(window,'resize',this.resize)
        }
    },
    beforeDestroy() {
        off(window,'resize',this.resize)
    },
}
</script>

<style lang="">
    .barsimple {
        width: 25vw;
        height: 30vh;
    }
</style>