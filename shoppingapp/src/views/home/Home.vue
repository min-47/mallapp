<template>
  <div id="home">
    <!-- <h2>首页</h2> -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    
    <div>
      <tab-contrl :titles="htitles"
                    v-show="isTabFixed"
                    @tabclick='tabclick'
                    ref="tabcontrl2"
                    :class="{fixed:isTabFixed}"
                    class="tab-contrl"
                     />
    </div>


<scroll class="content" ref="scroll"
        :probe-tope='3'
        @scroll='contentScroll'
        :pull-up-load='true'
        @pullingUp='loadMore'>

        <!-- 监听轮播图是否加载完成，然后判断一次就行 -->
        <home-swiper :banners="banners" @swiperloadimg.once='swiperloadimg'></home-swiper>
        <recommend-view :recommends='recommends'></recommend-view>

        <feature-view/>

        <tab-contrl :titles="htitles"
                    @tabclick='tabclick'
                    ref="tabcontrl1"
                   />

        <goods-list :goods='showgoods'/>
        

 </scroll> 

    <back-top @click.native='backclick' v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/common/backtop/BackTop'

// import GoodsListItem from '../../components/content/goods/GoodsListItem'

import HomeSwiper from '../home/childComps/HomeSwiper'
import RecommendView from '../home/childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import TabContrl from '../../components/content/tabContrl/TabContrl'
import GoodsList from '../../components/content/goods/GoodsList'

import {getHomeMultidata,getHomeGoods} from '../../network/home';


export default {
  name:'Home',
  components:{
   NavBar,
   HomeSwiper,
   RecommendView,
   FeatureView,
   TabContrl,
   GoodsList,
   Scroll,
   BackTop
  //  GoodsListItem

  },
  data() {
    return {
      result:null,
      banners:[],
       recommends:[],
       htitles:['精选','新款','流行'],
       goods:{
         'pop':{page:0,list:[]},
         'new':{page:0,list:[]},
         'sell':{page:0,list:[]}
       },
       currentType:'pop',
       isShowBackTop:false,
       tabOffsetTop:546,
       isTabFixed:false,
       saveY:0

      
      
    }

  },
  created(){
    // 1.请求多个数据
       this. getHomeMultidata() 
    // 2.请求商品数据   
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

   } ,

 methods: {

     /**
    * 事件监听相关的方法
    * 
    */
   tabclick(index){
    console.log(index)
    this.currentType = Object.keys(this.goods)[index]
    this.$refs.tabcontrl1.currentIndex = index;
    this.$refs.tabcontrl2.currentIndex = index;
     
    // switch(index){
    //   case 0:
    //     this.currentType='pop'
    //     break
    //   case 1:
    //     this.currentType='new'
    //     break
    //   case 2:
    //     this.currentType='sell'
    //     break
    // }
   },
   backclick(){
    //  console.log('huidaodingbu ')
    this.$refs.scroll.scrollTo(0,0)
   },
   contentScroll(position) {
    //  判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000
        // 决定tabContrl是否吸顶(postion:fixed)
        this.isTabFixed =  (-position.y)>this.tabOffsetTop
    },
    loadMore() {
        this.getHomeGoods(this.currentType)
    },

  
   /**
    * 网络请求相关的方法
    */
   getHomeMultidata(){
     getHomeMultidata().then(res => {
      // console.log(res)
      // this.result = res;
      this.banners = res.data.banner.list
      this. recommends = res.data.recommend.list
      // console.log(this.recommends)
      // console.log(this.banners)
    })
   },

   getHomeGoods(type){
     const page = this.goods[type].page+1
      getHomeGoods(type, page).then(res =>{
        // console.log(res.data)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1

        this.$refs.scroll.finishPullUp()
      })
   },
   swiperloadimg(){
    //  console.log(this.tabOffsetTop)
      this.tabOffsetTop=this.$refs.tabcontrl1.$el.offsetTop
     console.log(this.$refs.tabcontrl1.$el.offsetTop)
   }
 
 },
 computed: {
  showgoods(){
    return  this.goods[this.currentType].list
  }
},
mounted() {
  // 获取tabContrl 的offsetTop
  // 所有组件都有一个属性$el,用于获取组件中的元素
   this.tabOffsetTop=this.$refs.tabcontrl1.$el.offsetTop
 
  
   
},
activated() {
  this.$refs.scroll.scrollTo(0,this.saveY,0)
},
deactivated() {
  this.saveY = this.$refs.scroll.scroll.y
},
}

// console.log(this.titles)
</script>

<style scoped>
 /* #home{
  padding-top:44px;
} */
  #home {
    /* padding-top: 44px; */
    height: 100vh;
     position: relative;
  }

.home-nav{
  background-color:var(--color-tint);
  color: #fff;

  /* position:fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tab-contrl{
  /* background: #000; */
   position: relative; 
   z-index: 9; 
}
 .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    top: 44px;
    
  }
  
</style>