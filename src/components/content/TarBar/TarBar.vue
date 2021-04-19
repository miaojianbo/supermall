<template>
  <div class="tab-bar">
    <tar-bar-item :addr="homeAddr">
      <img src="~assets/image/主页.svg" slot="img">
      <img src="~assets/image/主页active.svg" slot="imgActive">
      <span slot="desc">主页</span>
    </tar-bar-item>
    <tar-bar-item :addr="classifyAddr">
      <img src="~assets/image/分类.svg" slot="img">
      <img src="~assets/image/分类active.svg" slot="imgActive">

      <span slot="desc">分类</span>
    </tar-bar-item>
    <tar-bar-item :addr="cartAddr">
      <img src="~assets/image/购物车.svg" slot="img">
      <img src="~assets/image/购物车active.svg" slot="imgActive">

      <span slot="desc">购物车</span>
    </tar-bar-item>
    <tar-bar-item :addr="profileAddr">
      <img src="~assets/image/我的.svg" slot="img">
      <img src="~assets/image/我的active.svg" slot="imgActive">
      <span slot="desc">我的</span>
    </tar-bar-item>
  </div>
</template>

<script>
import TarBarItem from 'components/common/TarBar/TarBarItem'
export default {
    name:'TarBar',
    components:{
        TarBarItem
    },
    data(){
      return {
        homeAddr:'/home',
        classifyAddr:'/classify',
        cartAddr:'/cart',
        profileAddr:'/profile'
      }
    }
}
</script>

<style>
    .tab-bar{
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #f6f6f6;
      box-shadow: 10px 10px 10px 10px rgb(199, 192, 192);
     vertical-align: middle;
    }

   
</style>