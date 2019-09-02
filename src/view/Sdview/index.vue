<template>
    <div>
        <div>header</div>
        <div>
            <div>
                <gl-map></gl-map>
            </div>
        </div>
    </div>
</template>

<script>
import GlMap from '@/components/echarts/3D/map/index'

export default {
    data() {
        return {
            
        }
    },
    components:{
        GlMap
    }
}
</script>