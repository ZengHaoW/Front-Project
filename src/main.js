import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import store from "@/store";
import '@/mock/mockServe';
import "swiper/css/swiper.css"


Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.config.productionTip = false

// import {reqCategoryList} from "@/api";
//
// reqCategoryList();
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
