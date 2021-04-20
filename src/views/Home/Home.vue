<template>
  <div id="home">
      <nav-bar>
        <span slot="center">购物街</span>
      </nav-bar>

      <swiper :banners="[]"></swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'
import Swiper from './ChildComps/HomeSwiper'

export default {
    name:'home',
    components:{
      NavBar,
      Swiper
    }
}
</script>

<style>
  
</style>