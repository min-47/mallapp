<template>
  <div class="detail-swiper">
    <swiper class="swipers" >
      <swiper-item v-for="(item, index) in topimages" :key="index" class="swiper-items">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper'
export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topimages:{
        type:Array,
        dafult(){
        return []
    }
    }
    
  }

}
</script>

<style scoped>
.swipers{
  height: 300px;
  overflow: hidden;
}

</style>