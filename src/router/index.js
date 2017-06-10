import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/views/admin'
import ProductsList from '@/views/products/list'
import ProductAnalyze from '@/views/products/analyze'
import ProductsSettings from '@/views/products/settings'
import SalesRecords from '@/views/sales/records'
import SalesAnalyze from '@/views/sales/analyze'
import SalesStaffs from '@/views/sales/staffs'
import StockRecords from '@/views/stock/records'
import StockAnalyze from '@/views/stock/analyze'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/products/list'
  }, {
    path: '/admin',
    component: Admin,
    children: [{
      path: 'products/list',
      component: ProductsList
    }, {
      path: 'products/analyze',
      component: ProductAnalyze
    }, {
      path: 'products/settings',
      component: ProductsSettings
    }, {
      path: 'sales/records',
      component: SalesRecords
    }, {
      path: 'sales/analyze',
      component: SalesAnalyze
    }, {
      path: 'sales/staffs',
      component: SalesStaffs
    }, {
      path: 'stock/records',
      component: StockRecords
    }, {
      path: 'stock/analyze',
      component: StockAnalyze
    }]
  }]
})
