<template>
   <tab-bar>

        <tab-bar-item path='/home' activeColor='tomato'> 
            <img src="@/assets/img/tabbar/home.png" alt="" slot="item-icon">
            <img src="@/assets/img/tabbar/home_active.png" alt="" slot="item-icon-active">
            <div slot="item-text">首页</div>
        </tab-bar-item>

        <tab-bar-item path='/cart' activeColor='tomato'>
           <img src="@/assets/img/tabbar/cart.png" alt="" slot="item-icon">
           <img src="@/assets/img/tabbar/cart_active.png" alt="" slot="item-icon-active">
           <div slot="item-text">购物</div>
        </tab-bar-item>

        <tab-bar-item path='/category' activeColor='tomato'>
           <img src="@/assets/img/tabbar/category.png" alt="" slot="item-icon">
           <img src="@/assets/img/tabbar/category_active.png" alt="" slot="item-icon-active">
           <div slot="item-text">分类</div>
        </tab-bar-item>

        <tab-bar-item path='/profile' activeColor='tomato'>
           <img src="@/assets/img/tabbar/profile.png" alt="" slot="item-icon">
           <img src="@/assets/img/tabbar/profile_active.png" alt="" slot="item-icon-active">
           <div slot="item-text">我的</div>
        </tab-bar-item>
   </tab-bar>
</template>


<script>
import  TabBar from '../../common/tabbar/TabBar';
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
  components:{
    TabBarItem,
    TabBar
  }

}
</script>

<style>

</style>