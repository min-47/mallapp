<template>
 
   <div class="tab-contrl">
    <div  v-for="(item,index) in  titles"
     :key='index' 
     class="tab-contrl-item" 
     :class='{active:index===currentIndex}'
     @click='itemclick(index)'
    >
      <span>{{item}}</span>
       
    </div>
 
</div>
 
</template>

<script>
export default {
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        currentIndex:0
      }
    },
    methods: {
      itemclick(index){
        this.currentIndex = index
        this.$emit('tabclick',index)
      }
    },
    
}

</script>

<style scoped >

  .tab-contrl{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    
  }
  .tab-contrl-item{
    flex: 1;
    /* border-bottom: 1px solid red; */
   
  }
  .tab-contrl-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);

  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
  }

</style>