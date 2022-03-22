<template>
<div id="root">
  <Header/>
<!--  路由组件-->
  <router-view>
  </router-view>
<!--  在Home和Search显示Footer，登录和注册隐藏-->
  <Footer v-show="$route.meta.isShow"/>
</div>
</template>

<script>

import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch('home/categoryList')
  }
}
</script>

<style>

</style>
