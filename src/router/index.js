import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Wecoment from '@/components/Wecoment'
import User from '@/components/user/User'
import Right from '@/components/right/Right'
import Role from '@/components/right/Role'
import Param from '@/components/product/Param'
import Category from '@/components/product/Category'
import Product from '@/components/product/TreeGrid'
import Order from '@/components/order/Order'
import Report from '@/components/report/Report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/wecoment',
      children: [
        { path: '/wecoment', component: Wecoment },
        { path: '/user', component: User },
        { path: '/home/right', component: Right },
        { path: '/home/role', component: Role },
        { path: '/param', component: Param },
        { path: '/category', component: Category },
        { path: '/product', component: Product },
        { path: '/order', component: Order },
        { path: '/report', component: Report }
      ]
    }
  ]
})
