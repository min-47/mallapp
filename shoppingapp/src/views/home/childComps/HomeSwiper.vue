<template>
  <swiper>
    <swiper-item v-for="item in banners" :key='item.sort'>
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadimg">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '../../../components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      loadimg(){
        this.$emit('swiperloadimg')
      }
    },
  }
</script>

<style scoped>

</style>
