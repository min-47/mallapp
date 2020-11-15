<template>
  <div class="class-top"
  
  ><img src="../../../assets/img/common/top.png" alt=""></div>
</template>

<script>
export default {

methods: {
  backclick(){
    // console.log('回到顶部')
    // this.$emit('backclick')
  }
},
}
</script>

<style scoped>
.class-top{
  position: fixed;
  right: 10%;
  /* left: 90%; */
  bottom: 55px;
}
.class-top img{
  width: 43px;
  height: 43px;
}
</style>