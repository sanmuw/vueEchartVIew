// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import elementUI from 'element-ui'
import echarts from 'echarts'
// import 'echarts/theme/temp'
// import VueParticles from 'vue-particles' // 粒子特效

Vue.config.productionTip = false

Vue.use(elementUI)
    // Vue.use(VueParticles)
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})