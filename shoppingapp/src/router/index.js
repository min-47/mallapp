import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () =>import('../views/home/Home.vue')
const Cart = () =>import('../views/cart/Cart.vue')
const Category = () =>import('../views/category/Category.vue')
const Profile = () =>import('../views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
