/*
 * @Autor: 李建鹏
 * @Date: 2022-08-17 00:16:17
 * @LastEditTime: 2022-08-17 00:17:44
 * @Description: 
 */
import { createRouter,createWebHashHistory} from "vue-router";
const routes = [
    {
        path:'/login',
        component:()=>import('@/Login.vue')
    },
    {
        path:'/home',
        component:()=>import('@/Home.vue')
    }
]
export default  createRouter({
    history: createWebHashHistory(),
    routes: routes,
  })
  