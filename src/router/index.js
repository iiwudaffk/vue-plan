import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import Time from '@/components/Time';
import Example from '@/components/Example';
import SelectContract from '@/components/SelectContract';
import List from '@/components/List';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/time',
      component: Time,
      children:[
        {path:'list',component:List}
      ]
    },
    {
      path: '/example',
      component: Example
    },
    {
      path: '/contract',
      component: SelectContract
    },
    {path:'*',redirect: '/home'},
  ]
})
