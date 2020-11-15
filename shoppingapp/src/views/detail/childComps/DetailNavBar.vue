<template>
  <div class="detailNavBar">
    <nav-bar>
      <div slot="left" class="back" @click='backclick'><img src="../../../assets/img/common/back.svg" alt=""></div>

       <div slot="center" class="title"> 
         <div v-for="(item, index) in list" :key="index"
              class="title-item" :class="{active: index==currentindex}"
              @click='titleclick(index)'
         >{{item}}</div>
       </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
export default {
 data() {
   return {
     list:['商品','参数','评论','推荐'],
     currentindex:0
   }
 },
 components:{
   NavBar
 },
 methods: {
   titleclick(index){
     this.currentindex = index
   },
    backclick(){
   this.$router.go(-1)
  }
 },

}
 
</script>

<style scoped>
    .title{
      display: flex;
    }
    .title-item{
      flex: 1;
    }
    .active{
      color: red;
    }
    .back img{
      margin-top: 10px;
    }
</style>