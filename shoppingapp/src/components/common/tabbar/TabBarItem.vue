<template>
      <div class="tab-bar-item"  @click="itemclick">
        
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-if="isActive" name="item-icon-active"></slot>
        <div :style="activeStyle">
          
            <slot name="item-text"></slot>
          
          
        </div>
        
      </div>    
 
</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive:true
    }
  },
  methods: {
    itemclick(){
      this.$router.replace(this.path).catch(err=>err)
    }
  },
  computed: {
    
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
}
</script>

<style scoped>
   .tab-bar-item{
        flex:1;
        text-align: center;
        height: 49px;
        font-size: 14px;
        
      }
    .tab-bar-item img{
          widows: 24px;
          height: 24px;
          margin-top: 3px;
  }
  
</style>