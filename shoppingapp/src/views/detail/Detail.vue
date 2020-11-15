<template>
  <div id="detail">
     <detail-nav-bar></detail-nav-bar>
     <detail-swiper :topimages='topimages'></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from '../../views/detail/childComps/DetailNavBar'
import {getDetail} from '../../network/detail'
import DetailSwiper from '../../views/detail/childComps/DetailSwiper'
export default {
  name:'Detail',
  components:{
     DetailNavBar,
     DetailSwiper
    },

  data() {
    
    return {
      iid:null,
      topimages:[]
    }   
  },

  created(){
    // 保存传入的数据
        this.iid = this.$route.params.iid
        getDetail(this.iid).then(res =>{
           console.log(res)
          this.topimages = res.result.itemInfo.topImages
      
        })
      },
    // 根据iid请求数据
   
}
</script>

<style>

</style>