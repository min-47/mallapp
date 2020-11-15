<template>
  <div class="goods">
    <!-- {{goods}} -->
    <!-- 这里容易出现key值不唯一的问题，添加一个index  -->
    <goods-list-item v-for="(item,index) in goods" :key="item.iid+index" :goodsitem='item'/>
       
       
  </div>

</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  props:{
    goods:{
      type:Array,
      defult(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style>
.goods{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
}

</style>